<script lang="ts">
	import Shore from '$lib/media/Shore.svg';
	import Cloud1 from '$lib/media/Cloud1.svg';
	import Cloud2 from '$lib/media/Cloud2.svg';
	import OrangeSky from '$lib/media/Orange_Sky.svg';
	import Sky from '$lib/media/Purple_Sky.svg';
</script>

<div class="full-background overflow-hidden items-center" aria-hidden="true">
	<div class="justify-items-center grid">
		<img src={Cloud1} alt="cloud" class="cloud"/>
		<img src={Sky} alt="sky" class="sky" />
	</div>
	<img src={Shore} alt="shore" class="shore md:-mt-[60vw]" />
	<div class="justify-items-center grid md:-mt-[30vw]">
		<img src={Cloud2} alt="cloud" class="cloud2" />
		<img src={OrangeSky} alt="sky" class="sky2" />
	</div>
</div>

<style lang="scss">
	.full-background {
		display: flex;
		flex-direction: column;
		align-items: center;
		z-index: 0;
		height: 100%;
	}

	@keyframes wave-sway {
		0% {
			transform: translateX(0vw);
		}
		50% {
			transform: translateX(1.5vw);
		}
		100% {
			transform: translateX(0vw);
		}
	}

	img {
		max-width: unset;
		width: 100%;
	}
	
	
	.cloud {
		width: 130%;
		margin-left: 10%;
		z-index: 1;
	}

	.sky {
		margin-top: -5%;
	}
	
	.shore {
		width: 200%;
		margin-left: 35%; /* Centers the oversized image */
		animation: wave-sway 3s ease-in-out infinite alternate;
	}

	.cloud2 {
		width: 130%;
		margin-top: -30%;
		z-index: 2;
	}

	.sky2 {
		margin-top: -15%;
		z-index: 1;
	}
</style>
