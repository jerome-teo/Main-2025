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
	<h1 class="text-fuchsia z-12">
		Sponsors
	</h1>
	<p class="text-white z-40 my-4 max-w-2xl px-4 text-center text-lg sm:text-base">
		Thank you to all our sponsors! This hackathon truly could not happen without your support.<br />
		If you’d like to consider becoming a sponsor, please check out our sponsorship package!<br />
		Interested or want to learn more? Email us at:
		<a href="mailto:sponsor@qwerhacks.org" class="text-fuchsia font-bold underline"
			>sponsor@qwerhacks.org</a
		>
	</p>
	<Carousel images={images}></Carousel>
</section>

<style>
</style>
