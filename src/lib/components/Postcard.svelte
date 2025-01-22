<script lang="ts">
	import Draggable from './utils/Draggable.svelte';
	export let backgroundImage: string;
	export let tilt: number;
	export let width: string = '300px';
	export let height: string = '200px';
	export let id: string = '';
	let slotRef: HTMLElement;
	let anchor: HTMLAnchorElement | HTMLButtonElement;
</script>

<div class="postcard" {id} style="--tilt: {tilt}deg; --width: {width}; --height: {height};">
	<img src={backgroundImage} alt="Postcard background" />
	<div class="postcard-content">
		<slot></slot>
	</div>
</div>

<style>
	.postcard {
		transform: rotate(var(--tilt));
		transition: transform 0.3s ease-in-out;
		width: var(--width);
		height: var(--height);
		position: relative;
		font-family: 'Etna', 'Times New Roman', Times, serif;
	}
	.postcard img {
		width: 100%;
		height: 100%;
		object-fit: cover;
	}
	.postcard-content {
		position: absolute;
		top: 0;
		left: 0;
		right: 0;
		bottom: 0;
	}
</style>
