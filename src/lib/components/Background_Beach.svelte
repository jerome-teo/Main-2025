<script lang="ts">
	import Leaf1 from '$lib/media/Leaf1.svg';
	import Leaf2 from '$lib/media/Leaf2.svg';
	import Leaf3 from '$lib/media/Leaf3.svg';
	import Leaf4 from '$lib/media/Leaf4.svg';
	import Shore from '$lib/media/Shore.svg';
	import Cloud1 from '$lib/media/Cloud1.svg';
	import Cloud2 from '$lib/media/Cloud2.svg';
	import OrangeSky from '$lib/media/Orange_Sky.svg';
	import Sky from '$lib/media/Purple_Sky.svg';

	import Hill_Day from '$lib/media/hill_day.svg';
	import Hill_Night from '$lib/media/hill_night.svg';
	import { interpolateColor } from '$lib/typescript/utils.svelte';

	// let { transitionProgress } = $props();

	// Reactive background color
</script>

<div class="full-background" style="" aria-hidden="true">
	<!-- <img src={Hill} alt="hill" class="w-full top-hill" /> -->
	<div class="cloud">
		<img src={Cloud1} alt="cloud" class="h-full w-full" style="" />
	</div>
	<div class="sky">
		<img src={Sky} alt="sky" class="h-full w-full" />
	</div>
	<div class="shore-container">
		<img src={Shore} alt="shore" class="shore-animation absolute" />
	</div>
	<div class="cloud2">
		<img src={Cloud2} alt="cloud" class="h-full w-full" style="" />
	</div>
	<div class="sky2">
		<img src={OrangeSky} alt="sky" class="h-full w-full" />
	</div>
</div>

<style lang="scss">
	.top-hill {
		margin-top: 5rem;
		transition: opacity 1s ease;
		grid-column: 1;
		grid-row: 1;
	}

	.full-background {
		// background-color: #92ceff; /* Set background to #92ceff */
		display: grid;
		height: 50%;
		// width: 100%;
		position: absolute;
	}
	@keyframes wave-sway {
		0% {
			transform: translateX(-5px);
		}
		50% {
			transform: translateX(5px);
		}
		100% {
			transform: translateX(-5px);
		}
	}
	.cloud img {
		width: 100%;
		height: 100%; /* Stretch height to make it thicker */
		object-fit: cover; /* Ensures it fills the area without maintaining aspect ratio */
	}
	.cloud2 img {
		width: 100%;
		height: 100%; /* Stretch height to make it thicker */
		object-fit: cover; /* Ensures it fills the area without maintaining aspect ratio */
	}
	.shore-animation img {
		width: 100%;
		height: 100%; /* Stretch height to make it thicker */
		object-fit: cover; /* Ensures it fills the area without maintaining aspect ratio */
	}
	.sky {
		height: 200vh;
		width: 100vw;
		z-index: 2;
		top: 290vh;
		position: absolute;
	}
	.sky2 {
		height: 200vh;
		width: 100vw;
		z-index: 2;
		top: 570vh;
		position: absolute;
	}
	.sky2 img {
		overflow: hidden;
		object-fit: cover;
		height: 100%;
	}
	.cloud {
		height: 35vh;
		width: 120vw;
		left: -5vw;
		transform: translateX(-5%); /* Centers the oversized image */
		top: 270vh;
		z-index: 6;
		position: absolute;
	}
	.cloud2 {
		height: 50vh;
		width: 120vw;
		left: -5vw;
		transform: translateX(-5%); /* Centers the oversized image */
		top: 536vh;
		z-index: 6;
		position: absolute;
	}
	.shore-container {
		// position: absolute;
		bottom: 0;
		z-index: 2;
		// left: 0;
		margin-top: 220vw;
		// position: absolute;
		width: 200vw;
		height: 180vw;
		overflow: hidden; /* Ensures no gaps appear */
	}
	.shore-animation {
		// position: absolute;
		// bottom: 0;
		left: -10%;
		z-index: 6;
		width: 180vw; /* 150% of the viewport width */
		// transform: translateX(-50%); /* Centers the oversized image */
		animation: wave-sway 3s ease-in-out infinite alternate;
	}
</style>
