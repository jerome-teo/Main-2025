<script lang="ts">
	import Background from '$lib/components/hero/Background.svelte';
</script>

<div class="h-screen relative w-screen" style="z-index: 9;">
	<div
		id="content"
		class="z-10 flex flex-col items-center justify-center h-screen w-screen py-16 px-4 gap-5"
	>
		<!-- <img
			fetchpriority="high"
			src="assets/hero/logo.svg"
			alt="QWERHacks Logo"
			class="w-full lg:w-8/12"
		/> -->
		<!-- <h2 class="text uppercase text-center text-4xl md:text-5xl lg:text-7xl">
			<span class="inline-block">feb 2-4, 2024</span> <span class="inline-block">@ ucla</span>
		</h2>

		<h3 class="font-jetbrains md:2xl lg:text-3xl text-white text-center textshadow">
			MLH’s First LGBTQIA+ Hackathon!
		</h3> -->
	</div>
	<!-- <div class="absolute right-[8vw] bottom-[15vh] xl:bottom-[20vh]">
		<ShortcutIcon
			title="Apply Now!"
			src="assets/hero/rainbow.svg"
			alt="rainbow icon"
			onclick="https://forms.gle/Vgign2Y7GMq8wbuRA"
		/>
	</div>
	<div class="absolute left-[8vw] bottom-[7vh] md:bottom-[15vh]">
		<ShortcutIcon
			title="Support Us!"
			src="assets/hero/sponsor.svg"
			alt="An icon of a hand with a heart floating above it, with sparks flying out of the heart."
			onclick="mailto:sponsor@qwerhacks.org"
		/>
	</div> -->
	<!-- <div id="background" class="absolute top-0 right-0 -z-20 h-full w-full overflow-clip"> -->
	<Background />
	<!-- </div> -->
</div>

<style lang="scss">
	.textshadow {
		text-shadow:
			#200b3a 4px 0px 0px,
			#200b3a -4px 0px 0px,
			#200b3a 0px 4px 0px,
			#200b3a 0px -4px 0px;
	}

	.text {
		color: #fff;
		font-style: normal;
		font-weight: 400;
		line-height: normal;
		letter-spacing: 3.2px;
		text-shadow: #310561 0px 6px;
	}
</style>
