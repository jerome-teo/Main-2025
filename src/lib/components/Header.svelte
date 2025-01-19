<script lang="ts">
	import { onMount, tick } from 'svelte';
	import { scrollTo, scrollTop } from 'svelte-scrolling';
	import RetroButton from './utils/RetroButton.svelte';
	import CleanButton from './utils/CleanButton.svelte';
	import SleekButton from './utils/SleekButton.svelte';

	const formatTwoDigit = (n: number) => {
		return n < 10 ? `0${n}` : `${n}`;
	}

	export let height: number = 0;

	let headerElement: HTMLElement;
	
	onMount(() => {
		tick().then(() => {
			height = headerElement.offsetHeight;
		});
		
		window.addEventListener('resize', () => {
			height = headerElement.offsetHeight;
		});

		return () => {
			window.removeEventListener('resize', () => {
				height = headerElement.offsetHeight;
			});
		};
	});
</script>

<div
	class="hidden sm:flex bg-lavender fixed top-0 left-0 z-[200] w-full h-[80px] px-4 py-10 align-center whiteborder"
	bind:this={headerElement}
>
	<div class="flex flex-row line w-[100%]" role="navigation">
		<div class="flex flex-row items-center gap-1 sm:gap-2 md:gap-2">
			<SleekButton>
				<button on:click={() => scrollTop()}>home</button>
			</SleekButton>
			<SleekButton>
				<button on:click={() => scrollTop()}>about</button>
			</SleekButton>
			<SleekButton>
				<button on:click={() => scrollTop()}>tracks</button>
			</SleekButton>
			<SleekButton>
				<button on:click={() => scrollTop()}>FAQ</button>
			</SleekButton>
			<SleekButton>
				<button on:click={() => scrollTop()}>sponsors</button>
			</SleekButton>
			<RetroButton classList="active">
				<a class="apply" href="/apply">Apply Now!</a>
			</RetroButton>
		</div>
	</div>
</div>

<style lang="scss">
	.whiteborder {
		border-top: solid 4px white;
	}
	.line {
		justify-content: space-between;
	}
</style>
