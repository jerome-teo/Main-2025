export function generateUUID(): string {
	return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
		var r = (Math.random() * 16) | 0,
			v = c == 'x' ? r : (r & 0x3) | 0x8;
		return v.toString(16);
	});
}

export function getRotation(el: HTMLElement): number {
	const values = getFullMatrix(el);

	const scale = Math.sqrt(values.a * values.a + values.b * values.b);

	// arc sin, convert from radians to degrees, round
	// DO NOT USE: see update below
	const sin = values.b / scale;
	const angle = Math.round(Math.asin(sin) * (180 / Math.PI));
	return angle;
}

export function getFullMatrix(element: HTMLElement): DOMMatrix {
	if (!element) return new DOMMatrix();
	const css = getComputedStyle(element).transform;
	const matrix = new DOMMatrix(css);
	const parent = element?.offsetParent;
	if (parent) {
		return getFullMatrix(parent).multiply(matrix);
	}
	return matrix;
}

type Dimensions = { width: number; height: number };

export function calculateInscribedRectangleDims(
	outerWidth: number,
	outerHeight: number,
	angleDegrees: number
): Dimensions {
	const radians = angleDegrees * (Math.PI / 180);
	const outerDiagonal = Math.sqrt(outerWidth ** 2 + outerHeight ** 2);

	// Using the cosine and sine laws for the projections on the diagonal
	const projection = (outerWidth / 2) * Math.sin(radians) + (outerHeight / 2) * Math.sin(radians);
	const innerDiagonal = outerDiagonal - 2 * projection;

	// Solving the system of equations for the inner dimensions
	// We will use a numerical approach since there's no direct algebraic solver in TypeScript
	const cosTheta = Math.cos(radians);
	const sinTheta = Math.sin(radians);

	// Initial guess (could be improved with a better heuristic)
	let innerWidth = outerWidth - 2 * projection;
	let innerHeight = outerHeight - 2 * projection;

	// Iterative method to solve the equations (numerical solver)
	for (let i = 0; i < 100; i++) {
		// 100 iterations should be enough for convergence
		const tempWidth = (outerWidth - innerHeight * sinTheta) / cosTheta;
		const tempHeight = (outerHeight - innerWidth * sinTheta) / cosTheta;

		if (Math.abs(tempWidth - innerWidth) < 0.001 && Math.abs(tempHeight - innerHeight) < 0.001) {
			// Convergence criteria met
			break;
		}

		innerWidth = tempWidth;
		innerHeight = tempHeight;
	}

	return { width: innerWidth, height: innerHeight };
}

export function debounce<T extends (...args: unknown[]) => void>(
	fun: T,
	timeout: number
): (...args: Parameters<T>) => void {
	let flag = true;

	return (...args: Parameters<T>) => {
		if (flag) {
			flag = false;
			setTimeout(() => {
				flag = true;
			}, timeout);
			return fun(...args);
		}
	};
}

export function createDayNightTimer() {
	const getPSTTime = () => {
		const now = new Date();
		const utcTime = now.getTime() + now.getTimezoneOffset() * 60000;
		const pstOffset = -8 * 60 * 60000; // PST offset in milliseconds
		return new Date(utcTime + pstOffset);
	};

	// Reactive variables
	let currentTime = getPSTTime();
	let transitionProgress = 0; // 0 = fully day, 1 = fully night

	const updateTransition = () => {
		const hours = currentTime.getHours(); // PST hours
		const minutes = currentTime.getMinutes(); // PST minutes

		if (hours === 17) {
			// Transition from light to dark (5 PM to 6 PM)
			transitionProgress = minutes / 60; // Progress from 0 to 1
		} else if (hours === 8) {
			// Transition from dark to light (8 AM to 9 AM)
			transitionProgress = 1 - minutes / 60; // Progress from 1 to 0
		} else if (hours > 17 || hours < 8) {
			// Fully night (after 6 PM until 8 AM)
			transitionProgress = 1;
		} else {
			// Fully day (after 9 AM until 5 PM)
			transitionProgress = 0;
		}

		// console.log(`Transition Progress: ${transitionProgress}`);
	};

	// Update every minute
	setInterval(() => {
		currentTime = getPSTTime(); // Recalculate PST time
		updateTransition(); // Update transition progress
	}, 60000);

	// Initial calculation
	updateTransition();
	return {
		get transitionProgress() {
			return transitionProgress;
		}
	};
}
