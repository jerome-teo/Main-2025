<script lang="ts">
	import Postit from './q&a/Postit.svelte';
	import CleanButton from './utils/CleanButton.svelte';
	import RetroButton from './utils/RetroButton.svelte';
	import ShortcutIcon from './utils/ShortcutIcon.svelte';
	import WindowBase from './utils/WindowBase.svelte';
	import Postcard from './Postcard.svelte';
	import ApplyNowButton from './ApplyNowButton.svelte';
	import About from '$lib/media/About_Postcard.svg';
	import UCLA from '$lib/media/UCLA_Postcard.svg';
</script>

<div>
	<Postcard backgroundImage={About} width="630px" height="356px" tilt={4.5} id="about-postcard">
		<div id="about-div">
			<p class="about-header">About:</p>
			<p id="about-text">
				QWER Hacks is here to bring LGBTQIA+ individuals and allies together to uplift marginalized
				communities. At our hackathon, we celebrate authenticity, promote inclusivity, and enable
				everyone to grow together.
			</p>
		</div>

		<div id="address-div">
			<p id="address-text">
				Feb 1-2, 2025 at UCLA <br />
				405 Hilgard Ave <br />
				Los Angeles, CA 90095 <br />
				United States
			</p>
		</div>
	</Postcard>
	<Postcard backgroundImage={UCLA} width="707px" height="745px" tilt={-3} id="ucla-postcard">
		<div id="different-div">
			<p class="subtitle">We’re not like other hackathons...</p>
			<p>
				We are here to support your journey – we want you to thrive, grow, share your passions, and
				make something great
			</p>
			<p>
				So what's that mean?<br />
				This year, we want you to, learn to find real, impactful issues, make things to help your community
				& spread joy, and find new pals and pride in your identity
			</p>
		</div>

		<div id="apply-now-btn-div">
			<ApplyNowButton link="https://tinyurl.com/qwerhacks25" />
		</div>
	</Postcard>
</div>

<style>
	:global(body) {
		overflow-x: hidden;
		width: 100vw;
	}
	:global(#about-postcard),
	:global(#ucla-postcard) {
		position: absolute;
		left: 50%;
		transform: translateX(-50%) rotate(var(--tilt));
		z-index: 10;
		/* max-width: 90vw; */
	}

	:global(#about-postcard) {
		top: 55vw;
	}

	:global(#ucla-postcard) {
		top: 90vw;
	}

	.about-header {
		font-weight: bold;
		font-family: 'Etna', serif;
		color: #534011;
		font-size: 24px;
	}
	#about-div {
		width: 250px;
		position: absolute;
		top: 11%;
		left: 5%;
		display: inline-block;
	}
	#about-text {
		line-height: 2.8;
		font-style: normal;
		font-weight: 400;
	}
	#address-div {
		width: 200px;
		position: absolute;
		top: 43%;
		right: 11%;
	}
	#address-text {
		line-height: 2.5;
	}
	#different-div {
		width: 600px;
		position: absolute;
		top: 60%;
		left: 10%;
	}
	#about-text,
	#address-text {
		color: #534011;
	}
	p {
		font-size: 14px;
		font-family: 'Etna', serif;
	}
	#different-div p {
		color: #4162bf;
		line-height: 2;
	}
	#different-div .subtitle {
		font-weight: 800;
	}
	#apply-now-btn-div {
		position: absolute;
		top: 85%;
		left: 36%;
		font-family: 'Etna', serif;
	}

	/* Media query for medium-sized screens */
	@media (max-aspect-ratio: 7/5) {
		:global(#ucla-postcard) {
			top: 85vw;
		}
	}
	/* Media query for smaller screens */
	@media (max-aspect-ratio: 5/5) {
		:global(#about-postcard) {
			width: 400px;
			height: auto;
			left: 50%;
			transform: translateX(-50%) rotate(var(--tilt));
			top: 70vh;
		}
		#about-div {
			top: 14%;
			left: 5%;
			width: 40%;
		}
		#about-text {
			line-height: 1.2;
			font-style: normal;
			font-weight: 400;
		}
		#address-div {
			top: 44%;
			right: 3%;
			width: 40%;
		}
		#address-text {
			line-height: 1.6;
		}

		:global(#ucla-postcard) {
			width: 450px;
			height: auto;
			left: 50%;
			transform: translateX(-50%) rotate(var(--tilt));
			top: 110vh;
		}
		#different-div {
			width: 385px;
			position: absolute;
			top: 59%;
			left: 7%;
		}
		#different-div p {
			line-height: 1;
		}
		#apply-now-btn-div {
			position: absolute;
			top: 83%;
			left: 30%;
			font-family: 'Etna', serif;
		}

		/* Media query for very narrow screens */
		@media (max-aspect-ratio: 8/5) {
			#about-div {
				left: 10%;
				width: 38%;
			}
			#about-text {
				line-height: 1.1;
			}
			#different-div {
				width: 340px;
				left: 13%;
			}
		}
	}
</style>
