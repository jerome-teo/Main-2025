<script lang="ts">
	import Passport from '$lib/media/Passport.svg';
	import { scrollRef } from 'svelte-scrolling';
	import ApplyNowButton from './ApplyNowButton.svelte';
	import ButtonBase from './utils/ButtonBase.svelte';

	let faqs = [
		{
			question: 'Who can come to QWER Hacks?',
			answer:
				'Anyone who is 18 or older, a member (or ally) of the LGBTQIA+ community, and enrolled in a postsecondary academic institution!'
		},
		{
			question: 'How do teams work?',
			answer:
				'Teams consist of 2-4 hackers! Each member should submit an application. Don’t have a team? No worries! We’ll help you find one at the hackathon!'
		},
		{
			question: 'What are the tracks?',
			answer: 'Sustain, adventure, and celebrate!'
		},
		{
			question: 'How much does attending QWER Hacks cost?',
			answer: "It's free, babey!"
		}
	];
	let details = [
		{ category: 'Surname', detail: 'Hacker' },
		{ category: 'Given Name', detail: 'Awesome' },
		{
			category: 'Location',
			detail: '405 Hilgard Ave,<br />Los Angeles, CA<br />90095<br />United States'
		}
	];
	let messagebox = "can't wait to go :>";
</script>

<section use:scrollRef={"faq"} class="w-full flex flex-col items-center">
	<h1
		class="w-full text-center text-[#EB68AF] z-12 text-[6vw] sm:text-5xl font-bold"
	>
		Frequently Asked Questions
	</h1>
	<div class="passport flex flex-col aspect-1315/1500 overflow-hidden text-[#4162bf]">
		<!-- <img src={Passport} class="passport-bg" alt="QWERHacks Passport" /> -->

		<div class="h-1/2 p-[5%]">
			{#each faqs as faq}
				<p class="font-bold">{faq.question}</p>
				<p>{@html faq.answer}</p>
			{/each}
		</div>

		<div class="details-section h-1/2 flex flex-row">
			<p class="w-2/7 pl-[13%] sm:pl-[11.5%] pt-[7%] category">QH PASSPORT</p>
			<div class="w-2/7 p-[7%]">
				{#each details as item}
					<div class="detail-item">
						<p class="category">{item.category.toUpperCase()}</p>
						<p class="detail">{@html item.detail}</p>
					</div>
				{/each}
			</div>
			<div class="w-3/7 pt-[7%]">
				<p class="qh-passport">QWERHacks Passport</p>
				<p class="category mt-[20%]">TIME:</p>
				<p class="detail">Feb 1-2</p>
				<div class="w-full h-full relative">
					<ButtonBase class="absolute right-[13%] top-[41%] rounded-[2em] bg-[#f94a9c] size-max">
						<a class="text-[120%]" href="https://tinyurl.com/qwerhacks25" target="_blank">Apply Now!</a>
					</ButtonBase>
				</div>
			</div>
		</div>
	</div>
</section>

<style lang="scss">
	.passport {
		// top: 340%;
		margin-top: 5rem;
		max-width: 80%;
		width: 600px;
		z-index: 11;
		background: url('/src/lib/media/Passport.svg') no-repeat center center;
		background-size: contain;

		p {
			line-height: 1.2;
			font-size: 87%;
		}

		.detail {
			font-size: 70%;
			font-weight: bold;
		}

		.category {
			font-size: 65%;
		}

		.qh-passport {
			font-size: 102%;
			font-weight: bolder;
		}

		@media (width < 48rem) {
			margin-top: 8vw;

			p {
				font-size: 2vw;
				line-height: 1.5;
			}
			
			.detail {
				font-size: 1.4vw;
				font-weight: bold;
			}

			.category {
				font-size: 1.2vw;
			}

			.qh-passport {
				font-size: 2vw;
				font-weight: bolder;
			}

			:global(a) {
				font-size: 3vw;
			}
		}
	}
</style>
