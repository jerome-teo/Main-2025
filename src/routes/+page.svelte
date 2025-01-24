<script lang="ts">
	import Info from '$lib/components/Info.svelte';
	import FAQ from '$lib/components/FAQ.svelte';
	import Hero from '$lib/components/Hero.svelte';
	import Tracks from '$lib/components/Tracks.svelte';
</script>

<!-- <div class="mr-3 flex flex-col sm:mr-7"> -->
<div class="flex flex-col sm:mr-7">
	<Hero />
	<Info />
	<Tracks />
	<FAQ />
</div>
