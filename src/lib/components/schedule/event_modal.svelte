<script lang="ts">
	export let title: string;
	export let description: string | undefined;
	export let location: string | undefined;
	export let hour_start: number;
	export let minute_start: number;
	export let length_minutes: number;

	import { writable } from 'svelte/store';
	import './schedule.scss';

	export let modal_open = writable(false);

	let time_start = `${(hour_start + 8) % 12 == 0 ? '12' : (hour_start + 8) % 12}:${
		minute_start < 10 ? '0' + minute_start : minute_start
	} ${(hour_start + 8) % 24 < 12 ? 'am' : 'pm'}`;
	let hour_end = hour_start + 8 + Math.floor((length_minutes + minute_start) / 60);
	let time_end = `${hour_end % 12 == 0 ? '12' : hour_end % 12}:${
		(minute_start + length_minutes) % 60 < 10
			? '0' + ((minute_start + length_minutes) % 60)
			: (minute_start + length_minutes) % 60
	} ${hour_end % 24 < 12 ? 'am' : 'pm'}`;
</script>

<div
	aria-modal="{$modal_open}"
	class="bg-white/1 fixed inset-0 z-[300] flex items-center justify-center overflow-y-auto backdrop-blur-[10px]"
	role="dialog"
>
	<div class="max-h-[80%] max-w-[90%] lg:max-w-[60%]">
		<div
			class="container divide-y-2 divide-dashed flex flex-col gap-3 bg-bg p-10 sm:p-24 sm:pt-20 sm:pb-20"
			on:click={(e) => {
				e.stopPropagation();
			}}
			on:keydown={(e) => {
				console.log('keydown');
				if (e.key === 'Escape') {
					$modal_open = false;
				}
			}}
		>
			<div>
				<h3>{title}</h3>
				<span>{time_start} to {time_end}</span>
			</div>
			{#if location !== undefined}
				<p class="whitespace-pre-line">Location: {@html location}</p>
			{/if}
			{#if description !== undefined}
				<p class="whitespace-pre-line">{@html description}</p>
			{/if}
		</div>
	</div>
</div>

<style>
	.container {
		border-radius: 1rem;
		display: flex;
		flex-direction: column;
		z-index: 199 !important;
		outline: solid 1px black;
	}
</style>
