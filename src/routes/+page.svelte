<script lang="ts">
	import Info from '$lib/components/Info.svelte';
	import FAQ from '$lib/components/FAQ.svelte';
	import Hero from '$lib/components/Hero.svelte';
	import Tracks from '$lib/components/Tracks.svelte';
	import Sponsors from '$lib/components/Sponsors.svelte';
	import Schedule from '$lib/components/Schedule.svelte';
	import BackgroundBeach from '$lib/components/Background_Beach.svelte';
	import Background from '$lib/components/Background.svelte';
</script>

<div class="flex flex-col items-center">
	<div class= "flex flex-col items-center w-full relative">
		<div class="hill-container">
			<Background />
		</div>
		<Hero />
		<Info />
		<Tracks />
	</div>
	
	<div class="flex flex-col items-center w-full relative -mt-10 md:-mt-40">
		<div class="beach-container">
			<BackgroundBeach />
		</div>
		<FAQ />
		<Schedule />
		<Sponsors />
	</div>
</div>

<style lang="scss">
	.beach-container {
		position: absolute;
		width: 100vw;
		z-index: -1;
		height: 100%;
	}

	.hill-container {
		position: absolute;
		width: 100vw;
		z-index: -1;
		height: 100%;
	}
</style>
