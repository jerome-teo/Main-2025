<script lang="ts">
	import Hill_Day from '$lib/media/hill_day.svg';
	import Hill_Night from '$lib/media/hill_night.svg';
	import { interpolateColor } from '$lib/typescript/utils.svelte';

	let { transitionProgress } = $props();

	// Reactive background color
	let backgroundColor = $derived(interpolateColor('#92ceff', '#4162BF', transitionProgress));
</script>

<div class="full-background" style="background-color: {backgroundColor}">
	<!-- <img src={Hill} alt="hill" class="w-full top-hill" /> -->
	<img
		src={Hill_Day}
		alt="hill"
		class="top-hill w-full"
	/>
	<img
		src={Hill_Night}
		alt="hill"
		class="top-hill w-full"
		style="opacity: {transitionProgress}"
	/>
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
		height: 100%;
		width: 100%;
		position: absolute;
		top: 0;
		transition: background-color 1s ease; /* Smooth color transition */
	}
</style>
