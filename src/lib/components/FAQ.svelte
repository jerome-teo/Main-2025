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
		class="w-full"
		style="text-align: center; color:#EB68AF; z-index: 12; font-size: 5vw; font-weight: bolder;"
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
			<p class="w-2/7 pl-[13%] pt-[7%] category">QH PASSPORT</p>
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
				<p class="category">TIME:</p>
				<p class="detail">Feb 1-2</p>
				<div class="w-full h-full relative">
					<ButtonBase class="absolute right-[13%] top-[41%] rounded-[2em] bg-[#f94a9c] size-max">
						<a class="text-[3vw]" href="https://tinyurl.com/qwerhacks25" target="_blank">Apply Now!</a>
					</ButtonBase>
				</div>
			</div>
		</div>
	</div>
</section>

<style lang="scss">
	p {
		line-height: 1.5;
		font-size: 2vw;
	}

	// @media (min-width: 500px) {
	.detail {
		font-size: 1.4vw;
		font-weight: bold;
	}
	.category {
		font-size: 1.2vw;

		margin-top: 20%;
		// font-weight: bold;
	}
	.qh-passport {
		font-size: 2vw;
		font-weight: bolder;
	}
	// }
	.passport {
		// top: 340%;
		margin-top: 8vw;
		max-width: 80%;
		z-index: 11;
		background: url('/src/lib/media/Passport.svg') no-repeat center center;
		background-size: contain;
	}
</style>
