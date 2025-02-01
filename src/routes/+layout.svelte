<script lang="ts">
	import { injectSpeedInsights } from '@vercel/speed-insights/sveltekit';
	import '../app.css';

	import Background from '$lib/components/Background.svelte';
	import BackgroundBeach from '$lib/components/Background_Beach.svelte';

	import Header from '$lib/components/Header.svelte';
	import { createDayNightTimer, interpolateColor } from '$lib/typescript/utils.svelte';
	import { setContext } from 'svelte';
	// import BackgroundBeach from '$lib/components/Background_Beach.svelte';

	let { children } = $props();

	let theme = $state(2);

	const timer = createDayNightTimer();
	let transitionProgress = $derived(theme === 2 ? timer.transitionProgress : theme);
	setContext('transitionProgress', () => transitionProgress);

	function cycleTheme() {
		if (theme === 2) theme = 0;
		else theme += 1;
	}

	// $effect(() => {
	// 	document.documentElement.style.setProperty(
	// 		'background-color',
	// 		// interpolateColor('#0F5E08', '#75761F', transitionProgress)
	// 		'#fb8a83'
	// 	);
	// });
</script>

<div class="flex w-full flex-col relative">
	<a
		id="mlh-trust-badge"
		class="fixed top-0 right-[50px] z-10000 block w-[10%] max-w-[100px] min-w-[60px]"
		href="https://mlh.io/na?utm_source=na-hackathon&utm_medium=TrustBadge&utm_campaign=2024-season&utm_content=yellow"
		target="_blank"
		><img
			src="https://s3.amazonaws.com/logged-assets/trust-badge/2025/mlh-trust-badge-2025-yellow.svg"
			alt="Major League Hacking 2025 Hackathon Season"
		/></a
	>
	<Header {theme} {cycleTheme} />
	{@render children()}
</div>

<style lang="scss">
	.background-container {
		position: absolute;
		top: 0px;
		width: 100%;
		height: 100%;
		overflow-y: hidden;
		z-index: -1;
		display: flex;
		flex-direction: column;
	}

	:root {
		background-color: #FB8A83;
	}
</style>
