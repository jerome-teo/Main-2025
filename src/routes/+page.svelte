<script lang="ts">
	import Info from '$lib/components/Info.svelte';
	import FAQ from '$lib/components/FAQ.svelte';
	import Hero from '$lib/components/Hero.svelte';
	import Tracks from '$lib/components/Tracks.svelte';
</script>

<div class="mx-3 flex flex-col sm:mx-7 mt-30 md:mt-50 lg:mt-75">
	<Hero />
	<Info />
	<Tracks />
	<FAQ />
</div>
