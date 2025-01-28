<script lang="ts">
	import Info from '$lib/components/Info.svelte';
	import FAQ from '$lib/components/FAQ.svelte';
	import Hero from '$lib/components/Hero.svelte';
	import Tracks from '$lib/components/Tracks.svelte';
	import Sponsors from '$lib/components/Sponsors.svelte';
</script>

<div class="mx-3 mt-30 flex flex-col sm:mx-7 md:mt-50 lg:mt-75">
	<Hero />
	<Info />
	<Tracks />
	<FAQ />
	<Sponsors />
</div>
