<div class="oval-button">
	<slot />
</div>

<style lang="scss">
	.oval-button {
		transition: scale 0.3s ease-in-out;

		&:hover {
			scale: 1.05;
		}

		&:active {
			transition: scale 0s;
			scale: 1.1;
		}
	}

	:global(.apply) {
		background-color: #f94a9c;
		padding-top: 0.5rem;
		padding-bottom: 0.5rem;
		padding-left: 1.5rem;
		padding-right: 1.5rem;
		border-radius: 1.5rem;
		margin: 0.5rem;
	}
</style>
