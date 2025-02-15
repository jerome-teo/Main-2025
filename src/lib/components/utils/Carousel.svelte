<script lang="ts">
	import { onMount, onDestroy } from 'svelte';
	import ButtonBase from './ButtonBase.svelte';
	import Back from '$lib/media/icons8-back-50.png'
	import Next from '$lib/media/icons8-next-50.png'

	let { images = [], autoplayInterval = 3000 } = $props();

	// Double the images array to ensure smooth infinite scrolling
	let extendedImages = [...images, ...images];

	let currentIndex = $state(0); // Start from the middle set of images
	let containerRef: HTMLElement | null;
	let intervalId: number | null = null;
	let isDragging = false;
	let startX = 0;
	let currentX = 0;

	// Calculate the position class for each image
	let items = $derived(
		extendedImages.map((image, idx) => {
			const relativeIndex = (idx - currentIndex + extendedImages.length) % extendedImages.length;

			let position = '';
			if (relativeIndex === 0) {
				position = 'far-left';
			} else if (relativeIndex === 1) {
				position = 'left';
			} else if (relativeIndex === 2) {
				position = 'center';
			} else if (relativeIndex === 3) {
				position = 'right';
			} else if (relativeIndex === 4) {
				position = 'far-right';
			}

			const { image: src, alt } = image;

			return {
				src,
				alt,
				position
			};
		})
	);

	function handleMouseDown(event: MouseEvent | TouchEvent) {
		isDragging = true;
		startX = 'touches' in event ? event.touches[0].clientX : event.clientX;
		currentX = startX;
		stopAutoplay();

		// Add a dragging class to the container to disable transitions during drag
		if (containerRef) {
			containerRef.classList.add('dragging');
		}
	}

	function handleMouseMove(event: MouseEvent | TouchEvent) {
		if (!isDragging) return;

		if (event instanceof MouseEvent)
			event.preventDefault();
		currentX = 'touches' in event ? event.touches[0].clientX : event.clientX;
		const diff = currentX - startX;

		if (Math.abs(diff) > 120) {
			if (diff > 0) {
				prev();
			} else {
				next();
			}
			startX = currentX;
		}
	}

	function handleMouseUp(event: MouseEvent | TouchEvent) {
		isDragging = false;
		
		// Remove the dragging class to re-enable transitions
		if (containerRef) {
			containerRef.classList.remove('dragging');
		}
		
		if (event instanceof TouchEvent) {
			startAutoplay();
			currentX = event.changedTouches[0].clientX;
		} else {
			currentX = event.clientX;
		}
	
		const diff = currentX - startX;

		// If the mouse has moved, do nothing
		if (Math.abs(diff) !== 0) return;

		// Else this is a click
		if (event instanceof TouchEvent)
			event.preventDefault();
		const rect = containerRef.getBoundingClientRect();
		const clickX = currentX - rect.left; // Click position relative to container
		const middle = rect.width / 2;

		if (clickX < middle * 0.8) {
			prev(); // Clicked on left side
		} else if (clickX > middle * 1.2) {
			next(); // Clicked on right side
		}
	}

	function handleMouseLeave() {
		if (!isDragging)
			startAutoplay();
	}

	function next() {
		currentIndex = (currentIndex + 1) % extendedImages.length;
	}

	function prev() {
		currentIndex = (currentIndex - 1 + extendedImages.length) % extendedImages.length;
	}

	function startAutoplay(e: any = null) {
		e && console.log(e.type);
		if (intervalId === null) {
			intervalId = setInterval(next, autoplayInterval);
		}
	}

	function stopAutoplay(e: any = null) {
		e && console.log(e.type);
		if (intervalId !== null) {
			clearInterval(intervalId);
			intervalId = null;
		}
	}


	onMount(startAutoplay);
	onDestroy(stopAutoplay);
</script>

<div
	bind:this={containerRef}
	class="carousel-container"
	role="presentation"
	onmousedown={handleMouseDown}
	onmousemove={handleMouseMove}
	onmouseup={handleMouseUp}
	onmouseleave={handleMouseLeave}
	ontouchstart={handleMouseDown}
	ontouchmove={handleMouseMove}
	ontouchend={handleMouseUp}
>

	<div class="carousel-items">
		{#each items as { src, alt, position }, i}
			<div class="carousel-item {position}">
				<img src={src} alt={alt} />
			</div>
		{/each}
	</div>

	<ButtonBase class="absolute top-1/2 -translate-y-1/2 left-1">
		<img src={Back} alt="previous" class="p-2 nav-button" aria-hidden="true"/>
	</ButtonBase>
	<ButtonBase class="absolute top-1/2 -translate-y-1/2 right-1">
		<img src={Next} alt="next" class="p-2 nav-button" aria-hidden="true"/>
	</ButtonBase>
</div>

<style lang="scss">
	.carousel-container {
		position: relative;
		width: 100%;
		height: 400px;
		overflow: hidden;
	}

	.carousel-items {
		position: relative;
		width: 100%;
		height: 100%;
		pointer-events: none;
	}

	.carousel-item {
		transform: translate(-50%, -50%) scale(0.2);
		opacity: 0;
		position: absolute;
		top: 50%;
		left: 50%;
		width: 300px;
		height: 200px;
		transition: all 0.5s ease;
		pointer-events: none; /* Prevent images from interfering with drag */

		img {
			width: 100%;
			height: 100%;
			object-fit: contain;
			border-radius: 10px;
			box-shadow: 0 5px 15px rgba(0, 0, 0, 0.3);
			user-select: none; /* Prevent image selection during drag */
			-webkit-user-drag: none; /* Prevent image dragging */
			background-color: rgba(255, 255, 255, 0.8);
		}

		// Center image
		&.center{
			transform: translate(-50%, -50%) scale(1);
			opacity: 1;
			z-index: 2;
		}

		// Left image
		&.left {
			transform: translate(-125%, -50%) scale(0.7);
			opacity: 0.4;
			z-index: 1;
		}

		// Right image
		&.right {
			transform: translate(25%, -50%) scale(0.7);
			opacity: 0.4;
			z-index: 1;
		}

		// Far left image (entering/exiting)
		&.far-left {
			transform: translate(-140%, -50%) scale(0.4);
		}

		// Far right image (entering/exiting)
		&.far-right {
			transform: translate(40%, -50%) scale(0.4);
		}
	}

	.nav-button {
		background: rgba(255, 255, 255, 0.7);
		border: none;
		border-radius: 50%;
		width: 40px;
		height: 40px;
		cursor: pointer;
	}

	@media (max-width: 768px) {
		.carousel-container {
			height: 300px;
		}

		.carousel-item {
			width: 250px;
			height: 150px;

			&.left {
				opacity: 0;
			}

			&.right {
				opacity: 0;
			}
		}
	}
</style>
