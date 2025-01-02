<script lang="ts">
	import TopHill from '$lib/media/Top_Hill.svg';
	import Logo from '$lib/media/QWERHACKS_Logo.svg';
	import Shrubs from '$lib/media/Shrubs.svg';
	import Hill from '$lib/media/Hill.svg';
</script>

<!-- <div class="full-background">
	<img src={Hill} alt="hill" class="w-full top-hill" />
	<div class="text-container flex-col flex">
		<h1 class="june text-white relative">Greetings From</h1>

		<img src={Logo} alt="logo" class="qwerhacks-logo" />
		<img src={Shrubs} alt="shrubs" class="shrubs" />
		<h1 class="june text-white">Feb 2-4, 2025</h1>
	</div>
</div> -->
<div class="full-background">
	<img src={Hill} alt="hill" class="w-full top-hill" />
	<div class="logo-container">
		<div class="greeting-text">
			<h1 class="june text-white">Greetings From</h1>
		</div>
		<img src={Logo} alt="logo" class="qwerhacks-logo" />
		<div class="date-text">
			<h1 class="june text-white">Feb 2-4, 2025</h1>
		</div>
	</div>
	<img src={Shrubs} alt="shrubs" class="shrubs" />
</div>

<style lang="scss">
	.top-hill {
		position: absolute; /* Position it where needed */
		top: 10%;
		bottom: 0px; /* Adjust placement */
		right: 0px; /* Adjust placement */
		z-index: 1;
	}
	@import url(https://fonts.adobe.com/fonts/june-expt-variable?vf-axes=STYL%2C63&vf-font-size=100&vf-font=JuneExptVariable-Active);
	.june {
		font-family: 'june-expt-variable', sans-serif;
		font-variation-settings: 'STYL' 20;
		font-size: 4vw;
	}

	.full-background {
		background-color: #92ceff; /* Set background to #92ceff */
		width: 100%;
		height: 100%;
		position: absolute;
		top: 0;
		left: 0;
		z-index: 0;
	}

	.date-text,
	.greeting-text {
		position: relative;
		// text-align: left;
		// align-items: left;
		top: clamp(10vh, 35vh, 40vh); /* Adjust vertical position */

		right: 5%; /* Aligns the logo to the right with some padding */
		width: 66%; /* 2/3 of the container's width */

		z-index: 4;
	}
	.qwerhacks-logo {
		position: absolute;
		top: clamp(10vh, 35vh, 40vh); /* Adjust vertical position */
		right: 5%; /* Aligns the logo to the right with some padding */
		width: 66%; /* 2/3 of the container's width */

		z-index: 2; /* Ensures it’s above the background */
	}
	.shrubs {
		position: absolute;
		top: clamp(40vh, 50vh, 60vh); /* Adjust vertical position */
		right: 5%; /* Aligns the logo to the right with some padding */
		width: 60%; /* 2/3 of the container's width */

		z-index: 3; /* Ensures it’s above the background */
	}
	.logo-container {
		display: flex; /* Use flexbox for alignment */
		flex-direction: column; /* Stack the items vertically */
		// align-items: center; /* Center the text and logo horizontally */
		gap: 1rem; /* Add spacing between the items */
		width: 66%; /* Width for the logo and its container */
		z-index: 2; /* Ensure it's above the background */
	}

	.date-text,
	.greeting-text {
		position: absolute;
		margin: 0; /* Remove default margin */
		font-size: 10px;
	}

	.greeting-text {
		text-align: left; /* Align text to the center */
		// top: calc(18vw + 4rem);
	}
	.date-text {
		text-align: right; /* Align text to the center */
		// top: calc(36vw + 4rem);
	}
	@media (max-aspect-ratio: 5/5) {
		.qwerhacks-logo {
			top: calc(24vw + 4rem); /* Adjust vertical position for smaller screens */
		}

		.shrubs {
			top: calc(28vw + 6rem); /* Adjust vertical position */
		}
		.greeting-text {
			top: calc(18vw + 4.5rem);
		}
		.date-text {
			top: calc(36vw + 4rem);
		}
	}
	@media (min-aspect-ratio: 5/5) {
		.qwerhacks-logo {
			top: calc(20vw + 1rem); /* Adjust vertical position for smaller screens */
		}

		.shrubs {
			top: calc(28vw + 0.5rem); /* Adjust vertical position */
		}
		.greeting-text {
			top: calc(11vw + 4rem);
		}
		.date-text {
			top: calc(28vw + 4rem);
		}
	}
	@font-face {
		font-family: 'june-expt-variable';
		src: url('$lib/fonts/june-expt-curious.otf') format('truetype'); /* Update the path as necessary */
		font-weight: normal;
		font-style: normal;
	}
</style>
