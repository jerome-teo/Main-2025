<script lang="ts">
	import CleanButton from './utils/CleanButton.svelte';
	import Postit from './q&a/Postit.svelte';
	import ShortcutIcon from './utils/ShortcutIcon.svelte';
	import WindowBase from './utils/WindowBase.svelte';
	import Passport from '$lib/media/Passport.svg';
	import ApplyNowButton from './ApplyNowButton.svelte';

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

<div id="faq-div">
	<h1
		class="w-full"
		style="text-align: center; color:#EB68AF; z-index: 12; position: absolute; font-size: 5vw; font-weight: bolder;"
	>
		Frequently Asked Questions
	</h1>
	<div class="passport">
		<img src={Passport} class="passport-bg" alt="QWERHacks Passport" />

		<div class="faq-section h-1/2">
			{#each faqs as faq}
				<p class="category">{faq.question}</p>
				<p class="detail">{@html faq.answer}</p>
			{/each}
		</div>

		<div class="details-section h-1/2">
			<div class="flex flex-row">
				<div class="w-1/3">
					<p class="category">QH PASSPORT</p>
				</div>
				<div class="w-1/3 details">
					{#each details as item}
						<div class="detail-item">
							<p class="category">{item.category.toUpperCase()}</p>
							<p class="detail">{@html item.detail}</p>
						</div>
					{/each}
				</div>
				<div class="w-1/2">
					<p class="qh-passport">QWERHacks Passport</p>
					<br />
					<p class="category">TIME:</p>
					<p class="detail">Feb 1-2</p>
					<div class="apply-now-btn-div">
						<ApplyNowButton link="https://tinyurl.com/qwerhacks25"></ApplyNowButton>
					</div>
				</div>
			</div>
		</div>
	</div>
</div>

<style lang="scss">
	#faq-div {
		display: block;
		margin: 0 auto;
	}
	h2,
	h1,
	p {
		color: #4162bf;
		font-family: Etna;
		line-height: 1.5;
	}

	// @media (max-width: 500px) {
	// 	h1 {
	// 		font-size: 1.5rem;
	// 	}
	// 	p {
	// 		font-size: 0.4rem;
	// 	}
	// 	.qh-passport .category .detail {
	// 		font-size: 2px;
	// 	}
	// }
	.details {
		gap: 1px;
	}

	// @media (min-width: 500px) {
	.detail {
		font-size: 1.4vw;
		font-weight: bold;
		margin-bottom: 3%;
	}
	.category {
		font-size: 1.2vw;

		margin-bottom: 0;
		// font-weight: bold;
	}
	.qh-passport {
		font-size: 2vw;
		font-weight: bolder;
	}
	// }
	.passport {
		position: absolute;
		// top: 340%;
		margin-top: 8vw;
		left: 20%;
		width: 60%;
		height: auto;
		z-index: 11;
	}

	.passport-bg {
		width: 100%;
	}

	.faq-section {
		position: absolute;
		top: 5%;
		left: 10%;
		width: 80%;
		font-family: 'Georgia', serif;
		font-size: 18px;
		color: #1e1e1e;
	}

	.details-section {
		position: absolute;
		top: 55%;
		left: 10%;
		width: 80%;
	}

	.apply-now-btn-div {
		position: absolute;
		bottom: 16%;
		right: -5%;
	}
</style>
