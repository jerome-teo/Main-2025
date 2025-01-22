<script lang="ts">
	import { onMount, tick } from 'svelte';
	import { scrollTo, scrollTop } from 'svelte-scrolling';
	import SleekButton from './utils/SleekButton.svelte';
	import OvalButton from './utils/OvalButton.svelte';
</script>

<div class="hidden sm:flex fixed top-0 left-0 z-[200] w-full h-[80px] px-4 py-10 align-center">
	<div class="flex flex-row line w-[100%]" role="navigation">
		<div class="flex flex-row items-center gap-1 sm:gap-2 md:gap-2">
			<SleekButton>
				<button on:click={() => scrollTop()}>Home</button>
			</SleekButton>
			<SleekButton>
				<button on:click={() => scrollTop()}>About</button>
			</SleekButton>
			<SleekButton>
				<button on:click={() => scrollTop()}>Tracks</button>
			</SleekButton>
			<SleekButton>
				<button on:click={() => scrollTop()}>FAQ</button>
			</SleekButton>
			<SleekButton>
				<button on:click={() => scrollTop()}>Sponsors</button>
			</SleekButton>
			<OvalButton>
				<a class="apply" href="https://tinyurl.com/qwerhacks25">Apply Now!</a>
			</OvalButton>
		</div>
	</div>
</div>

<style lang="scss">
	.line {
		justify-content: space-between;
	}
</style>
