<!--
@component
Base component for a styled button. Passes through props like class, href and onclick
Note that user-defined html classes are not global and won't work properly, use tailwind where possible

-->

<script lang="ts">
	let { children, ...rest } = $props();
</script>

<div class="button-base {rest.class ?? ''}" style={rest.style}>
	{@render children()}
</div>

<style lang="scss">
	.button-base {
		transition: scale 0.2s ease;

		&:hover {
			transition: scale 0.1s ease;
			scale: 1.05;
		}

		&:active {
			transition: scale 0.1s ease;
			scale: 0.95;
		}

		:global(a),
		:global(button) {
			display: block;
			text-wrap: nowrap;
			padding-left: 0.8em;
			padding-right: 0.8em;
			padding-top: 0.36em;
			padding-bottom: 0.3em;
		}
	}
</style>
