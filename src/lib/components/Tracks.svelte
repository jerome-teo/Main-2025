<script lang="ts">
	import AdventureTrack from '$lib/media/AdventureTrack.svg';
	import CelebrateTrack from '$lib/media/CelebrateTrack.svg';
	import SustainTrack from '$lib/media/SustainTrack.svg';
</script>

<section id="tracks-div" class="text-paper">
	<h1 id="tracks-title" class="text-fuchsia">Tracks</h1>
	<div class="track-div">
		<img src={SustainTrack} alt="Sustain Track" id="sustain-image" class="track-image" />
		<p>
			The refreshing wind from the mountains is calling your name! Remember to leave no trace to
			preserve this pristine ecosystem for future generations. Protect the environment by reducing
			consumption, wasting less resources, and using what resources we have more efficiently.
		</p>
	</div>
	<div class="track-div">
		<img src={AdventureTrack} alt="Adventure Track" id="adventure-image" class="track-image" />
		<p>
			You’ve embarked on your great adventure – now make adventuring easier for others! Improve
			public transit usage to help others get on their way! Make public spaces and the outdoors
			easier to access, so all travelers are ready to embark on their own journeys.
		</p>
	</div>
	<div class="track-div">
		<img src={CelebrateTrack} alt="Celebrate Track" id="celebrate-image" class="track-image" />
		<p>
			You’re a citizen of the world – but remember to connect with your roots! Engage with the
			places you’ve been – whether you’re uplifting cultural elements of your community or bringing
			everyone together through shared experiences! Uplift and preserve pillars of the community and
			spaces that bring joy.
		</p>
	</div>
</section>

<style lang="scss">
	#tracks-div {
		text-align: center;
		max-width: 1200px;
		margin: 5rem 0;
	}

	.track-div {
		width: 750px;
		padding: 20px;
		/* border: 1px solid white; */
		display: flex;
		align-items: center;
		gap: 2rem;
		margin: 1rem auto;
	}

	.track-div img {
		width: 200px;
		height: auto;
		flex-shrink: 0;
	}

	#tracks-div p {
		text-align: left;
		font-size: 1.1rem;
		margin: 0;
		flex: 1;
	}

	.track-div:nth-child(3) {
		flex-direction: row-reverse;
	}
	#sustain-image {
		width: 150px;
		transform: rotate(-3.32deg);
	}
	#adventure-image {
		transform: rotate(2.4deg);
	}
	#celebrate-image {
		transform: rotate(-7.05deg);
	}

	@media (max-width: 40rem) {
		#tracks-div {
			margin: 0;
			margin-top: 3rem;

			p {
				font-size: 4vw;
			}
		}

		.track-div {
			flex-direction: column;
			width: 65vw;
		}

		.track-div img {
			width: 200px;
		}
		.track-div:nth-child(3) {
			flex-direction: column;
		}
	}
</style>
