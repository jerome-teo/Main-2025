<script lang="ts">
	import About from '$lib/media/About_Postcard.svg';
	import UCLA from '$lib/media/UCLA_Postcard.svg';
	import { scrollRef } from 'svelte-scrolling';
</script>

<section use:scrollRef={"about"} class="flex flex-col items-center text-brown">
	<div class="postcard rotate-4">
		<img src={About} alt="Postcard background" />
		<div class="flex flex-row aspect-1207/714">
			<div class="w-1/2 pl-[3.5vw] pr-[3vw] pt-[5vw] md:p-10">
				<h1>About:</h1>
				<p class="about">
					QWER Hacks is here to bring LGBTQIA+ individuals and allies together to uplift marginalized
					communities. At our hackathon, we celebrate authenticity, promote inclusivity, and enable
					everyone to grow together.
				</p>
			</div>

			<p class="address">
				Feb 1-2, 2025 at UCLA <br />
				405 Hilgard Ave <br />
				Los Angeles, CA 90095 <br />
				United States
			</p>
		</div>
	</div>
	<div class="postcard -rotate-3">
		<img src={UCLA} alt="Postcard background" />
		<div class="flex flex-col items-center">
			<div class="text-lightblue mt-[52%] p-[8%]">
				<p class="subtitle font-bold">We’re not like other hackathons...</p>
				<p>
					We are here to support your journey – we want you to thrive, grow, share your passions, and
					make something great!
				</p>
				<p>
					So what's that mean?
				</p>
				<p>
					This year, we want you to, learn to find real, impactful issues, make things to help your community
					& spread joy, and find new pals and pride in your identity!
				</p>
			</div>
		</div>
	</div>
</section>

<style lang="scss">
	.postcard {
		display: grid;
		max-width: 100%;
		overflow: hidden;
		width: 700px;

		* {
			grid-row: 1;
			grid-column: 1;
		}

		// Large screens
		@media (width >= 48rem) {
			h1 {
				font-size: 1.875rem;
				line-height: 1.2;
			}

			p {
				&.about {
					font-size: 1.125rem;
					line-height: 2.2;
					padding-top: 20px;
				}

				&.address {
					font-size: 1.5rem;
        			line-height: 2.75rem;
					padding-left: 3rem;
					padding-top: 11rem;
				}

				margin-bottom: 1rem;
			}

			// Postcard div
			margin-top: 120px;
		}

		// Small screens
		// Use vw because postcard has already expanded to fill the entire width of the screen
		@media (width < 48rem){
			h1 {
				font-size: 4vw;
			}

			p {
				&.about {
					padding-top: 1vw;
					font-size: 3.5vw;
					line-height: 4vw;
					overflow: hidden;
				}

				&.address {
					font-size: 3.5vw;
					line-height: 5.5vw;
					padding-top: 24vw;
					padding-left: 5vw;
				}

				&.subtitle {
					font-size: 4vw;
				}

				font-size: 3.25vw;
				line-height: 1;
				margin-bottom: 1.5vw;
			}
			
			// Postcard div
			margin-top: 10vw;
		}
	}
</style>
