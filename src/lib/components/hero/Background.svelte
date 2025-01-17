<script lang="ts">
	import TopHill from '$lib/media/Top_Hill.svg';
	import Logo from '$lib/media/QWERHACKS_Logo.svg';
	import Shrubs from '$lib/media/Shrubs.svg';
	import Hill from '$lib/media/Hill.svg';
	import Hill_Day from '$lib/media/hill_day.svg';
	import Hill_Night from '$lib/media/hill_night.svg';

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

		console.log(`Transition Progress: ${transitionProgress}`);
	};

	// Update every minute
	setInterval(() => {
		currentTime = getPSTTime(); // Recalculate PST time
		updateTransition(); // Update transition progress
	}, 60000);

	// Initial calculation
	updateTransition();

	const interpolateColor = (startColor, endColor, progress) => {
		// Parse HEX colors to RGB
		const start = {
			r: parseInt(startColor.slice(1, 3), 16),
			g: parseInt(startColor.slice(3, 5), 16),
			b: parseInt(startColor.slice(5, 7), 16)
		};
		const end = {
			r: parseInt(endColor.slice(1, 3), 16),
			g: parseInt(endColor.slice(3, 5), 16),
			b: parseInt(endColor.slice(5, 7), 16)
		};

		// Interpolate each channel
		const r = Math.round(start.r + (end.r - start.r) * progress);
		const g = Math.round(start.g + (end.g - start.g) * progress);
		const b = Math.round(start.b + (end.b - start.b) * progress);

		// Return the interpolated color in HEX format
		return `rgb(${r}, ${g}, ${b})`;
	};

	// Reactive background color
	$: backgroundColor = interpolateColor('#92ceff', '#4162BF', transitionProgress);
</script>

<!-- <div class="full-background">
	<img src={Hill} alt="hill" class="w-full top-hill" />
	<div class="text-container flex-col flex">
		<h1 class="june text-white relative">Greetings From</h1>

		<img src={Logo} alt="logo" class="qwerhacks-logo" />
		<img src={Shrubs} alt="shrubs" class="shrubs" />
		<h1 class="june text-white">Feb 2-4, 2025</h1>
	</div>
</div> -->
<div class="full-background" style="background-color: {backgroundColor}">
	<!-- <img src={Hill} alt="hill" class="w-full top-hill" /> -->
	<img
		src={Hill_Day}
		alt="hill"
		class="w-full top-hill day"
		style="opacity: {1 - transitionProgress}"
	/>
	<img
		src={Hill_Night}
		alt="hill"
		class="w-full top-hill night"
		style="opacity: {transitionProgress}"
	/>

	<div class="logo-container">
		<div class="greeting-text">
			<h1 class="june text-white">Greetings From</h1>
		</div>
		<img src={Logo} alt="logo" class="qwerhacks-logo" />
		<div class="date-text">
			<h1 class="june text-white">Feb 2-4, 2025</h1>
		</div>
	</div>
	<img src={Shrubs} alt="shrubs" class="shrubs" />
</div>

<style lang="scss">
	.top-hill {
		position: absolute; /* Position it where needed */
		top: 10%;
		bottom: 0px; /* Adjust placement */
		right: 0px; /* Adjust placement */
	}
	.day {
		z-index: 2;
	}
	.night {
		z-index: 1;
	}
	.june {
		font-family: 'JuneExptVariable', sans-serif;
		font-variation-settings: 'STYL' 70;
		font-size: 4vw;
	}
	.full-background {
		// background-color: #92ceff; /* Set background to #92ceff */
		width: 100%;
		height: 100%;
		position: absolute;
		top: 0;
		left: 0;
		z-index: 0;
		transition: background-color 1s linear; /* Smooth color transition */
	}

	.date-text,
	.greeting-text {
		position: relative;
		// text-align: left;
		// align-items: left;
		top: clamp(10vh, 35vh, 40vh); /* Adjust vertical position */

		right: 5%; /* Aligns the logo to the right with some padding */
		width: 66%; /* 2/3 of the container's width */

		z-index: 4;
	}
	.qwerhacks-logo {
		position: absolute;
		top: clamp(10vh, 35vh, 40vh); /* Adjust vertical position */
		right: 5%; /* Aligns the logo to the right with some padding */
		width: 66%; /* 2/3 of the container's width */

		z-index: 2; /* Ensures it’s above the background */
	}
	.shrubs {
		position: absolute;
		top: clamp(40vh, 50vh, 60vh); /* Adjust vertical position */
		right: 5%; /* Aligns the logo to the right with some padding */
		width: 60%; /* 2/3 of the container's width */

		z-index: 3; /* Ensures it’s above the background */
	}
	.logo-container {
		display: flex; /* Use flexbox for alignment */
		flex-direction: column; /* Stack the items vertically */
		// align-items: center; /* Center the text and logo horizontally */
		gap: 1rem; /* Add spacing between the items */
		width: 66%; /* Width for the logo and its container */
		z-index: 2; /* Ensure it's above the background */
	}

	.date-text,
	.greeting-text {
		position: absolute;
		margin: 0; /* Remove default margin */
		font-size: 10px;
	}

	.greeting-text {
		text-align: left; /* Align text to the center */
		// top: calc(18vw + 4rem);
	}
	.date-text {
		text-align: right; /* Align text to the center */
		// top: calc(36vw + 4rem);
	}
	@media (max-aspect-ratio: 5/5) {
		.qwerhacks-logo {
			top: calc(24vw + 4rem); /* Adjust vertical position for smaller screens */
		}

		.shrubs {
			top: calc(28vw + 6rem); /* Adjust vertical position */
		}
		.greeting-text {
			top: calc(18vw + 4.5rem);
		}
		.date-text {
			top: calc(36vw + 4rem);
		}
	}
	@media (min-aspect-ratio: 5/5) {
		.qwerhacks-logo {
			top: calc(20vw + 1rem); /* Adjust vertical position for smaller screens */
		}

		.shrubs {
			top: calc(28vw + 0.5rem); /* Adjust vertical position */
		}
		.greeting-text {
			top: calc(11vw + 4rem);
		}
		.date-text {
			top: calc(28vw + 4rem);
		}
	}
</style>
