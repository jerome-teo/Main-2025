<script lang="ts">
	import { getContext } from 'svelte';
	import Logo_Day from '../media/logo_day.svg';
	import Logo_Night from '../media/logo_night.svg';

	const transitionProgress = getContext('transitionProgress');
</script>

<div class="mt-30 flex max-w-4/5 flex-col self-end sm:mt-45 sm:max-w-3/5">
	<div class="z-4 w-full text-left">
		<h1 class="june text-white">Greetings From</h1>
	</div>
	<div class="relative block w-full items-center justify-center">
		<div class="wrapper" style="position: relative;">
			<img src={Logo_Day} alt="logo" class="qh-logo" style="opacity: 1" />
			<img src={Logo_Night} alt="logo" class="qh-logo" style="opacity: {transitionProgress()}" />
			<img
				src={Logo_Day}
				alt="logo"
				class="qh-logo-placeholder"
				style=" width: 100%;height: auto;visibility: hidden;"
			/>
		</div>
		<!-- <div class="date-text"> -->
	</div>
	<div class="z-4 w-full text-right">
		<h1 class="june text-white">Feb 1-2, 2025</h1>
	</div>
</div>

<style lang="scss">
	.june {
		// font-family: 'june-expt-variable', sans-serif;
		font-family: 'JuneExptVariable', sans-serif;

		font-variation-settings: 'STYL' 20;
		font-size: 4vw;
		z-index: 4;
	}

	.qh-logo {
		width: 100%; /* Make sure it fits the container */
		height: auto; /* Maintain aspect ratio */
		position: absolute;
		left: 0;
		top: 0;
		transition: opacity 1s ease;
	}
</style>
