<script lang="ts">
	import { injectSpeedInsights } from '@vercel/speed-insights/sveltekit';
	import '../app.css';

	import Background from '$lib/components/Background.svelte';
	import Header from '$lib/components/Header.svelte';
	import { createDayNightTimer } from '$lib/typescript/utils.svelte';
	import { setContext } from 'svelte';

	let { children } = $props();

	let theme = $state(2);

	const timer = createDayNightTimer();
	let transitionProgress = $derived(theme === 2 ? timer.transitionProgress : theme);
	setContext('transitionProgress', () => transitionProgress);

	function cycleTheme() {
		if (theme === 2) theme = 0;
		else theme += 1;
	}
</script>

<a
	id="mlh-trust-badge"
	class="block fixed top-0 right-[50px] z-10000 w-[10%] max-w-[100px] min-w-[60px]"
	href="https://mlh.io/na?utm_source=na-hackathon&utm_medium=TrustBadge&utm_campaign=2024-season&utm_content=yellow"
	target="_blank"
	><img
		src="https://s3.amazonaws.com/logged-assets/trust-badge/2025/mlh-trust-badge-2025-yellow.svg"
		alt="Major League Hacking 2024 Hackathon Season"
	/></a
>
<Background {transitionProgress} />
<Header {theme} {cycleTheme} />
{@render children()}
