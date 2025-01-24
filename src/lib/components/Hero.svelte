<script lang="ts">
	import { getContext } from 'svelte';
	import Logo_Day from '../media/logo_day.svg';
	import Logo_Night from '../media/logo_night.svg';

	const transitionProgress = getContext('transitionProgress') as () => number;
</script>

<div class="z-4 flex max-w-4/5 flex-col self-end sm:max-w-3/5">
	<div class="w-full text-left">
		<h1 class="font-june text-3xl text-white sm:text-5xl">Greetings From</h1>
	</div>
	<div class="grid w-full grid-cols-1">
		<img src={Logo_Day} alt="logo" class="qh-logo" />
		<img src={Logo_Night} alt="logo" class="qh-logo" style="opacity: {transitionProgress()}" />
	</div>
	<div class="w-full text-right">
		<h1 class="font-june text-3xl text-white sm:text-5xl">Feb 1-2, 2025</h1>
	</div>
</div>

<style lang="scss">
	.qh-logo {
		transition: opacity 1s ease;
		grid-row: 1;
		grid-column: 1;
	}
</style>
