<script lang="js">
	import AdventureTrack from '$lib/media/AdventureTrack.svg';
	import CelebrateTrack from '$lib/media/CelebrateTrack.svg';
	import SustainTrack from '$lib/media/SustainTrack.svg';
	import { scrollRef } from 'svelte-scrolling';
	import StandOut from '$lib/media/stand-out-stickers-logo.svg';
	import L3 from '$lib/media/L3Harris.svg';
	import Boeing from '$lib/media/Boeing.svg';
	import Northrop from '$lib/media/Northrop.svg';
	import PPG from '$lib/media/PPG.svg';
	import Carousel from './utils/Carousel.svelte';
</script>

<section use:scrollRef={'sponsors'} id="" class="mt-[5rem] flex w-full flex-col items-center">
	<h1 class="text-fuchsia z-12 w-full text-center text-[6vw] font-extrabold sm:text-5xl">
		Sponsors
	</h1>
	<Carousel images={[Northrop, L3, PPG, StandOut]}></Carousel>
</section>

<style>
	#tracks-div {
		position: relative;
		margin: 0 auto;
		margin-top: 5rem;
		z-index: 20;
		text-align: center;
		width: 90%;
		max-width: 1200px;
	}

	#tracks-title {
		margin-bottom: 2rem;
	}

	.track-div {
		width: 750px;
		padding: 20px;
		/* border: 1px solid white; */
		display: flex;
		align-items: center;
		gap: 2rem;
		margin: 1rem auto;
	}

	.track-div img {
		width: 200px;
		height: auto;
		flex-shrink: 0;
	}

	#tracks-div p {
		color: white;
		font-family: 'Etna';
		font-size: 14px;
		text-align: left;
		margin: 0;
		flex: 1;
	}

	.track-div:nth-child(3) {
		flex-direction: row-reverse;
	}
	#sustain-image {
		width: 150px;
		transform: rotate(-3.32deg);
	}
	#adventure-image {
		transform: rotate(2.4deg);
	}
	#celebrate-image {
		transform: rotate(-7.05deg);
	}

	@media (max-aspect-ratio: 8/5) {
		.track-div {
			flex-direction: column;
			width: 65vw;
		}

		.track-div img {
			width: 200px;
		}
		.track-div:nth-child(3) {
			flex-direction: column;
		}
	}
</style>
