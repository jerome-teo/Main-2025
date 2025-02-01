<script lang="ts">
	import Hill_Day from '$lib/media/hill_day.svg';
	import Hill_Night from '$lib/media/hill_night.svg';
	import { interpolateColor } from '$lib/typescript/utils.svelte';
	import { getContext } from 'svelte';

	const transitionProgress = getContext('transitionProgress') as () => number;

	// Reactive background color
	let skyColor = $derived(interpolateColor('#92ceff', '#4162BF', transitionProgress()));
	let groundColor = $derived(interpolateColor('#0F5E08', '#75761F', transitionProgress()));
</script>

<div class="full-background" aria-hidden="true">
	<!-- <img src={Hill} alt="hill" class="w-full top-hill" /> -->
	<div class="sky" style="background-color: {skyColor}"></div>
	<img
		src={Hill_Day}
		alt="hill"
		class="top-hill w-full"
	/>
	<img
		src={Hill_Night}
		alt="hill"
		class="top-hill w-full"
		style="opacity: {transitionProgress()}"
	/>
	<div class="ground" style="background-color: {groundColor}"></div>
</div>

<style lang="scss">
	.top-hill {
		margin-top: 5rem;
		transition: opacity 1s ease;
		grid-column: 1;
		grid-row: 1;
	}

	.full-background {
		// background-color: #92ceff; /* Set background to #92ceff */
		display: grid;
		height: 115%;
		width: 100%;
		transition: background-color 1s ease; /* Smooth color transition */
		z-index: 0;
		position: relative;
		overflow: hidden;
	}

	.sky {
		width: 100%;
		height: 20%;
		grid-column: 1;
		grid-row: 1;
		transition: background-color 1s ease;
	}

	.ground {
		height: 100%;
		grid-row: 1;
		grid-column: 1;
		transition: background-color 1s ease;
		width: 100%;
		z-index: -1;
	}
</style>
