<script lang="ts">
	import Donate from '$lib/components/Donate.svelte';
	import Hero from '$lib/components/Hero.svelte';
	import Info from '$lib/components/Info.svelte';
	import FAQ from '$lib/components/FAQ.svelte';
</script>

<Hero />

<!-- <div class="w-full dots one" style="">
    <div class="w-full h-full mask-overlay one" />
    <Info />
</div> -->
<!-- <div class="w-full dots two" style="">
	<div class="w-full h-full mask-overlay two" />
	<FAQ />
</div> -->
<!-- <div class="w-full dots three">
	<div class="w-full h-full mask-overlay three" />
	<Donate />
</div> -->

<style lang="scss">
	$mask: radial-gradient(
		circle,
		white 0%,
		rgba(255, 255, 255, 0.2) 40%,
		rgba(255, 255, 255, 0) 50%
	);
	.dots {
		background-size: cover, 10px, 180px;
		background-repeat: no-repeat, repeat, repeat;
		background-attachment: scroll, fixed, scroll;
		background-blend-mode: soft-light;
		display: flex;
		&.one {
			margin-top: -20vh;
			padding-top: 20vh;
			background-image: $mask, url('/assets/general/dot.svg'),
				linear-gradient(180deg, #a84fb3 0%, #e689c6 99.48%);
		}
		&.two {
			background-image: $mask, url('/assets/general/dot.svg'),
				linear-gradient(180deg, #e688c6 0%, #f4c1ca 100%);
			background-position-x: 40vw, 0px, center;
		}
		&.three {
			background-image: $mask, url('/assets/general/dot.svg'),
				linear-gradient(180deg, #f4c0ca 0%, #c993ff 100%);
			background-position-x: -50vw, 0px, center;
		}
	}
	.mask-overlay {
		position: absolute;
		&.one {
			background: linear-gradient(180deg, #a84fb3 0%, #e689c6 99.48%);
			mask-image: radial-gradient(black 30%, transparent 90%);
			height: 80vh;
		}
		&.two {
			background: linear-gradient(180deg, #e688c6 0%, #f4c1ca 100%);
			mask-image: radial-gradient(black 30%, transparent 70%);
			right: 50vw;
			height: 70vh;
			margin-top: 20vh;
		}
		&.three {
			background: linear-gradient(180deg, #f4c0ca 0%, #c993ff 100%);
			mask-image: radial-gradient(black 30%, transparent 90%);
			height: 80vh;
			left: 25vw;
		}
		isolation: isolate;
	}
</style>
