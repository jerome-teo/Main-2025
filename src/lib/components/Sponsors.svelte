<script lang="js">
	import { scrollRef } from 'svelte-scrolling';
	import StandOut from '$lib/media/stand-out-stickers-logo.svg';
	import L3 from '$lib/media/L3Harris.svg';
	import Northrop from '$lib/media/Northrop.svg';
	import PPG from '$lib/media/PPG.svg';
	import Carousel from './utils/Carousel.svelte';

	const images = [
		{
			"alt": "northrop grumman",
			"image": Northrop
		},
		{
			"alt": "L3Harris",
			"image": L3
		},
		{
			"alt": "PPG",
			"image": PPG
		},
		{
			"alt": "Stand Out Stickers",
			"image": StandOut
		}
	]
</script>

<section use:scrollRef={'sponsors'} id="" class="mt-[5rem] flex w-full flex-col items-center">
	<h1 class="text-fuchsia z-12 w-full text-center text-[6vw] font-extrabold sm:text-5xl">
		Sponsors
	</h1>
	<Carousel images={images}></Carousel>
</section>

<style>
</style>
