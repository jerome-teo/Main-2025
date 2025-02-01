<script lang="ts">
	import ButtonBase from './utils/ButtonBase.svelte';
	import Menu from '$lib/media/menu.svg';
	import { slide } from 'svelte/transition';

	let { theme, cycleTheme } = $props();
	let showMenu = $state(false);
	let menuDiv: HTMLElement | null;
	let menuButton: HTMLElement | null;

	function scrollTo(id: string) {
		document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
	}
</script>

{#snippet menu()}
	<ButtonBase>
		<button onclick={()=>window.scrollTo({ top: 0, behavior: "smooth" })}>Home</button>
	</ButtonBase>
	<ButtonBase>
		<button onclick={()=>scrollTo('about')}>About</button>
	</ButtonBase>
	<ButtonBase>
		<button onclick={()=>scrollTo('tracks-div')}>Tracks</button>
	</ButtonBase>
	<ButtonBase>
		<button onclick={()=>scrollTo('faq')}>FAQ</button>
	</ButtonBase>
	<ButtonBase>
		<button onclick={()=>scrollTo('schedule')}>Schedule</button>
	</ButtonBase>
	<ButtonBase>
		<button onclick={()=>scrollTo('sponsors')}>Sponsors</button>
	</ButtonBase>
	<ButtonBase class="bg-fuchsia mx-3 rounded-3xl">
		<a href="https://tinyurl.com/qwerhacks25" target="_blank">Apply Now!</a>
	</ButtonBase>
	<ButtonBase>
		<button class="mt-1.5 cursor-pointer text-[2rem]" aria-label="theme switcher" onclick={cycleTheme}>
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
			class="text-brown border-brown bg-paper flex flex-col rounded-b-3xl border-3 border-t-0 md:hidden"
		>
			{@render menu()}
		</nav>
	{/if}
</div>

<style lang="scss">
	button {
		cursor: pointer;
	}
</style>
