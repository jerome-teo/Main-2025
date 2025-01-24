<script lang="ts">
	import { scrollTo, scrollTop } from 'svelte-scrolling';
	import ButtonBase from './utils/ButtonBase.svelte';
	import Menu from '$lib/media/menu.svg';
	import { slide } from 'svelte/transition';

	let { theme, cycleTheme } = $props();
	let showMenu = $state(false);
	let menuDiv, menuButton;
</script>

{#snippet menu()}
	<ButtonBase>
		<button onclick={() => scrollTop()}>Home</button>
	</ButtonBase>
	<ButtonBase>
		<button onclick={() => scrollTop()}>About</button>
	</ButtonBase>
	<ButtonBase>
		<button onclick={() => scrollTop()}>Tracks</button>
	</ButtonBase>
	<ButtonBase>
		<button onclick={() => scrollTop()}>FAQ</button>
	</ButtonBase>
	<ButtonBase>
		<button onclick={() => scrollTop()}>Sponsors</button>
	</ButtonBase>
	<ButtonBase class="m-3 bg-[#f94a9c] rounded-3xl">
		<a href="https://tinyurl.com/qwerhacks25">Apply Now!</a>
	</ButtonBase>
	<ButtonBase>
		<button class="text-[2rem] mt-1.5 cursor-pointer" onclick={cycleTheme}>
			{theme === 2 ? "🕖" : theme === 1 ? "🌙" : "🌞"}
		</button>
	</ButtonBase>
{/snippet}

<svelte:window onclick={(e) => {
	if (!menuDiv?.contains(e.target) && !menuButton?.contains(e.target))
		showMenu = false;
}}/>

<div class="flex z-[200] fixed top-0 left-0 w-full items-start">
	<ButtonBase class="block sm:hidden max-w-18 mt-1.5">
		<button bind:this={menuButton} onclick={() => { showMenu = !showMenu }}>
			<img class="w-full" src={Menu} alt="menu"/>
		</button>
	</ButtonBase>
	<div role="navigation" class="hidden sm:flex flex-row items-center ms-2">
		{@render menu()}
	</div>
	{#if showMenu}
		<div bind:this={menuDiv} in:slide out:slide role="menu" class="flex flex-col sm:hidden bg-white rounded-b-3xl border-gray-500 border-4 border-t-0">
			{@render menu()}
		</div>
	{/if}
</div>

<style lang="scss">

</style>
