<script lang="ts">
	import { scrollTo, scrollTop } from 'svelte-scrolling';
	import ButtonBase from './utils/ButtonBase.svelte';
	import Menu from '$lib/media/menu.svg';
	import { slide } from 'svelte/transition';

	let { theme, cycleTheme } = $props();
	let showMenu = $state(false);
	let menuDiv: HTMLElement | null;
	let menuButton: HTMLElement | null;
</script>

{#snippet menu()}
	<ButtonBase>
		<button onclick={() => scrollTop()}>Home</button>
	</ButtonBase>
	<ButtonBase>
		<button use:scrollTo={"about"}>About</button>
	</ButtonBase>
	<ButtonBase>
		<button use:scrollTo={"tracks"}>Tracks</button>
	</ButtonBase>
	<ButtonBase>
		<button use:scrollTo={"faq"}>FAQ</button>
	</ButtonBase>
	<ButtonBase>
		<button onclick={() => scrollTop()}>Sponsors</button>
	</ButtonBase>
	<ButtonBase class="mx-3 rounded-3xl bg-[#f94a9c]">
		<a href="https://tinyurl.com/qwerhacks25" target="_blank">Apply Now!</a>
	</ButtonBase>
	<ButtonBase>
		<button class="mt-1.5 cursor-pointer text-[2rem]" onclick={cycleTheme}>
			{theme === 2 ? '🕖' : theme === 1 ? '🌙' : '🌞'}
		</button>
	</ButtonBase>
{/snippet}

<svelte:window
	onclick={(e) => {
		if (!menuDiv?.contains(e.target as Node) && !menuButton?.contains(e.target as Node))
			showMenu = false;
	}}
/>

<div class="fixed top-0 z-[200] flex w-full items-start">
	<ButtonBase class="mt-1.5 block max-w-18 md:hidden">
		<button
			bind:this={menuButton}
			onclick={() => {
				showMenu = !showMenu;
			}}
		>
			<img class="w-full" src={Menu} alt="menu" />
		</button>
	</ButtonBase>
	<nav class="ms-2 hidden flex-row items-center md:flex">
		{@render menu()}
	</nav>
	{#if showMenu}
		<nav
			bind:this={menuDiv}
			in:slide
			out:slide
			class="flex flex-col rounded-b-3xl border-3 border-t-0 text-brown border-brown bg-paper md:hidden"
		>
			{@render menu()}
		</nav>
	{/if}
</div>

<style lang="scss">
</style>
