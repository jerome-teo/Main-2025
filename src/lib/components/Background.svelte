<script lang="ts">
	import Hill_Day from '$lib/media/hill_day.svg';
	import Hill_Night from '$lib/media/hill_night.svg';

	let { transitionProgress } = $props();

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
	let backgroundColor = $derived(interpolateColor('#92ceff', '#4162BF', transitionProgress));
</script>

<div class="full-background" style="background-color: {backgroundColor}">
	<!-- <img src={Hill} alt="hill" class="w-full top-hill" /> -->
	<img
		src={Hill_Day}
		alt="hill"
		class="top-hill z-2 w-full"
		style="opacity: {1 - transitionProgress}"
	/>
	<img
		src={Hill_Night}
		alt="hill"
		class="top-hill z-1 w-full"
		style="opacity: {transitionProgress}"
	/>
</div>

<style lang="scss">
	.top-hill {
		position: absolute;
		top: 5rem;
		transition: opacity 1s ease;
	}

	.full-background {
		// background-color: #92ceff; /* Set background to #92ceff */
		width: 100%;
		min-height: 100vh;
		position: absolute;
		top: 0;
		left: 0;
		z-index: 0;
		transition: background-color 1s ease; /* Smooth color transition */
	}
</style>
