<script lang="ts">
	import { onDestroy, onMount } from 'svelte';

	import Event from './schedule/event.svelte';
	import './schedule/schedule.scss';

	const ColorMap = {
		food: 'green',
		workshop: 'lightblue',
		talk: 'coral',
		fun: 'yellow',
		other: 'plum'
	} as const;

	type Categories = keyof typeof ColorMap;
	type Colors = (typeof ColorMap)[Categories];

	type EventType = {
		title: string;
		description?: string;
		location?: 'hermosa room' | 'main room' | string;
		hour_start: number;
		minute_start: number;
		length_minutes: number;
		display_width: number;
		display_column: number;
		category: Categories;
	};

	const events: EventType[] = [
		{
			title: 'Breakfast/Snacks',
			description: `MILF: Man I love Food 🥐

FREE snacks and drinks from Corner Bakery cafe are waiting 4 u right here at palisades room 😋

And YES they are vegan <3`,
			location: 'main room',
			hour_start: 0,
			minute_start: 0,
			length_minutes: 60,
			display_width: 2,
			display_column: 1,
			category: 'food'
		},
		{
			title: 'Check-In',
			description: `Checkin starts now!

plz come up to carnesale commons (pacific palisades room) at UCLA (directions down below)

PS there will be cool swag we promise (some is limited so hurry!! first come first serve).`,
			location: `Carnesale Commons at UCLA - <a class="underline" href="https://goo.gl/maps/9zUegz42XzzPcjYk8">251 Charles E Young Drive West, Los Angeles, CA 90095</a>. If you\'re a UCLA student, it\'s the building right above BPlate.`,
			hour_start: 1,
			minute_start: 0,
			length_minutes: 60,
			display_width: 3,
			display_column: 0,
			category: 'other'
		},
		{
			title: 'Opening Presentation',
			description: `Welcome to QWER Hacks!!! Can't wait to see you here! 
			
Learn about our event and what's going on!`,
			location: 'main room',
			hour_start: 2,
			minute_start: 0,
			length_minutes: 30,
			display_width: 3,
			display_column: 0,
			category: 'talk'
		},
		{
			title: 'Keynote Speech',
			// description:
			// `Learn all about how healthcare biases 🩺impact trans folks 🏳️‍⚧️ with speaker and workshop host May Márquez!!`,
			location: 'main room',
			hour_start: 2,
			minute_start: 30,
			length_minutes: 30,
			display_width: 2,
			display_column: 0,
			category: 'talk'
		},
		{
			title: 'Track Speaker -- Celebrate',
			// description: `What do food and queerness have in common? Come learn from Alvaro's unique approach to food systems`,
			location: 'main room',
			hour_start: 3,
			minute_start: 0,
			length_minutes: 20,
			display_width: 2,
			display_column: 0,
			category: 'talk'
		},
		{
			title: 'Track Speaker -- Sustain',
			location: 'main room',
			// description: "Show up for Jesse Goldshear’s insightful talk on: “Insecure Survival: The Material and Social Lives of Unhoused People Who Use Drugs”",
			hour_start: 3,
			minute_start: 20,
			length_minutes: 20,
			display_width: 2,
			display_column: 1,
			category: 'talk'
		},
		{
			title: 'Track Speaker -- Adventure',
			// description:
			// `Learn all about how healthcare biases 🩺impact trans folks 🏳️‍⚧️ with speaker and workshop host May Márquez!!`,
			location: 'main room',
			hour_start: 3,
			minute_start: 40,
			length_minutes: 20,
			display_width: 2,
			display_column: 0,
			category: 'talk'
		},
		{
			title: 'Student Experience Critical Thinking Workshop',
			// description:
			// `Learn all about how healthcare biases 🩺impact trans folks 🏳️‍⚧️ with speaker and workshop host May Márquez!!`,
			location: 'main room',
			hour_start: 4,
			minute_start: 30,
			length_minutes: 90,
			display_width: 2,
			display_column: 0,
			category: 'talk'
		},
		{
			title: 'Lunch',
			description: `The B in LGBT stands for BELLA PITA 🥙

Go grab ur scrumdiddly yum lunch now, u deserve it <3`,
			location: 'main room',
			hour_start: 4,
			minute_start: 0,
			length_minutes: 90,
			display_width: 3,
			display_column: 0,
			category: 'food'
		},
		{
			title: 'Hacking Begins!!',
			hour_start: 6,
			minute_start: 0,
			length_minutes: 10,
			display_width: 3,
			display_column: 0,
			category: 'other'
		},
		{
			title: 'Hackathon Survival Guide & Team Formation',
			description: `We wish all newbie hackers a very hope u survive 😻

Jk, Evy Nguyen from ACM W is here to help you 👩‍❤️‍💋‍👩u literally do not have to worry at all ok mwah`,
			location: 'hermosa room',
			hour_start: 6,
			minute_start: 0,
			length_minutes: 60,
			display_width: 2,
			display_column: 1,
			category: 'workshop'
		},
		{
			title: 'ACM Hack Technical Workshop',
			description: `Still confused about Git/Version Control? Don’t GIT too sad ab it (heheh) 😏

Evy Nguyen from ACM W is here to the rescue!!!!! She will answer all ur silly qs`,
			hour_start: 7,
			location: 'hermosa room',
			minute_start: 0,
			length_minutes: 60,
			display_width: 2,
			display_column: 0,
			category: 'workshop'
		},
		{
			title: 'UX Design & User Research Workshop',
			location: 'main room',
			description: `Ur ex’s red flags aren’t the only flags u need to be worrying ab tonight 😏🚩

Sit back and relax for CTF, put on by our friends at MLH!`,
			hour_start: 8,
			minute_start: 0,
			length_minutes: 60,
			display_width: 1,
			display_column: 2,
			category: 'workshop'
		},
		{
			title: 'Write for Rights!',
			description: ``,
			location: 'hermosa room',
			hour_start: 9,
			minute_start: 0,
			length_minutes: 60,
			display_width: 2,
			display_column: 1,
			category: 'workshop'
		},
		{
			title: 'Dinner',
			description: `COME GET YALL JUICEEEE 🧃

Plz go and get ur dinner, friends.`,
			location: 'main room',
			hour_start: 10,
			minute_start: 0,
			length_minutes: 60,
			display_width: 3,
			display_column: 0,
			category: 'food'
		},
		{
			title: 'MLH Games',
			description: `MLH EVENT NUMBER 22222222...🥂

May the best stacker win 😉`,
			hour_start: 11,
			minute_start: 0,
			length_minutes: 60,
			display_width: 3,
			display_column: 0,
			category: 'fun'
		},
		{
			title: 'Crafts',
			description: ``,
			location: 'hermosa room',
			hour_start: 12,
			minute_start: 0,
			length_minutes: 120,
			display_width: 2,
			display_column: 1,
			category: 'workshop'
		},
		{
			title: 'Snacks',
			description: `We hope you’re hungry…. For a fresh new batch of snacks !!!! pls feel free to take all the snacks u want 🍩`,
			hour_start: 15,
			minute_start: 0,
			length_minutes: 60,
			display_width: 3,
			display_column: 0,
			category: 'food'
		},
		// 		{
		// 			title: 'Navigating Identity in Workplace Life and ERGs',
		// 			description: `Listen to Allie Garland from The Aerospace Corp share about her first hand experience of an athlete turned engineer and how she found an identity of her own outside of her changing titles. 😻`,
		// 			location: 'hermosa room',
		// 			hour_start: 7,
		// 			minute_start: 30,
		// 			length_minutes: 30,
		// 			display_width: 2,
		// 			display_column: 0,
		// 			category: 'talk'
		// 		},
		// 		{
		// 			title: 'Snacks',
		// 			description: `I can see ur health bars running low besties… maybe it’s time to take a snack break 🥞❗`,
		// 			hour_start: 8,
		// 			minute_start: 0,
		// 			length_minutes: 60,
		// 			display_width: 2,
		// 			display_column: 0,
		// 			category: 'food'
		// 		},
		// 		{
		// 			title: 'Careers in Game Dev',
		// 			description: `gay mergirl? 🧜 No, it’s gamer girl. 🎮

		// Come listen to Linden Reid’s workshop on careers in game dev 👾!!! this is the one time u can be a gamer (non-derogatory).`,
		// 			hour_start: 8,
		// 			minute_start: 0,
		// 			length_minutes: 60,
		// 			display_width: 2,
		// 			display_column: 1,
		// 			category: 'talk'
		// 		},
		// 		{
		// 			title: 'Impostor Syndrome',
		// 			description: `Tired of relating to Taylor Swift’s “mirrorball”? 🪩😞

		// Come listen to Evy Nguyen from ACM W talk about imposter syndrome and how to overcome it!!`,
		// 			hour_start: 9,
		// 			minute_start: 0,
		// 			length_minutes: 30,
		// 			display_width: 2,
		// 			display_column: 0,
		// 			category: 'talk'
		// 		},
		// 		{
		// 			title: 'Thinking Traps and Beyond',
		// 			description: `QWER Hacks founders Sharvani and Arjun from Queer in AI are back! 🥳

		// Listen to them talk about traps and beyond at their amazing workshop!!! 💫`,
		// 			hour_start: 9,
		// 			minute_start: 30,
		// 			length_minutes: 30,
		// 			display_width: 2,
		// 			display_column: 1,
		// 			category: 'talk'
		// 		},
		// 		{
		// 			title: 'Identity Specific Workshop/Panel',
		// 			description: `Our friend Fiona from TechTogether is here all the way from Boston! ✈️

		// Join us to discuss identity-specific topics. 💥`,
		// 			hour_start: 10,
		// 			minute_start: 0,
		// 			length_minutes: 60,
		// 			display_width: 3,
		// 			display_column: 0,
		// 			category: 'workshop'
		// 		},
		// 		{
		// 			title: 'Dinner',
		// 			description: `COME GET YALL JUICEEEE 🧃

		// Plz go and get ur dinner, friends. It is sponsored by the one and only Fresh Corn Grill 🌽`,
		// 			hour_start: 11,
		// 			minute_start: 0,
		// 			length_minutes: 60,
		// 			display_width: 3,
		// 			display_column: 0,
		// 			category: 'food'
		// 		},
		// 		{
		// 			title: 'Intro to Deep Learning',
		// 			description: `Gay ppl in stem be like “I know a place 🌈” and it’s the ACM AI DEEP LEARNING 🧑‍💻 workshop at QWER hacks (happening now btw so don’t miss it).`,
		// 			hour_start: 12,
		// 			minute_start: 0,
		// 			length_minutes: 60,
		// 			display_width: 2,
		// 			display_column: 1,
		// 			category: 'talk'
		// 		},
		// 		{
		// 			title: 'CTF - Capture The Flag',
		// 			description: `Wooo CTF!! Come capture flags, solve puzzles, and even try to phish the organizers!

		// Put on by your very own Julie Cover, it's bound to be a blast!`,
		// 			hour_start: 13,
		// 			minute_start: 0,
		// 			length_minutes: 60,
		// 			display_width: 2,
		// 			display_column: 0,
		// 			category: 'fun'
		// 		},

		// 		{
		// 			title: 'Tie Dye',
		// 			description: `Still not sick of all our cool sexy swag yet? 😎

		// Come to the TIE DYE 🌈station to get a special QWER Hacks shirt 👕, customized to ur liking !`,
		// 			hour_start: 14,
		// 			minute_start: 0,
		// 			length_minutes: 120,
		// 			display_width: 2,
		// 			display_column: 1,
		// 			category: 'fun'
		// 		},
		// 		{
		// 			title: 'Movie',
		// 			description: `“my favorite thing about the movie is, like, it feels like a movie” - harry styles 🎥

		// Come watch a movie w us and log it on Letterboxd afterwards idk up to u !`,
		// 			hour_start: 15,
		// 			minute_start: 0,
		// 			length_minutes: 120,
		// 			display_width: 1,
		// 			display_column: 1,
		// 			category: 'fun'
		// 		},
		{
			title: 'Breakfast',
			description: `Brekkie time 🍳

Come to the food table and get some vegan-friendly bagels <3 🥯`,
			hour_start: 24,
			minute_start: 0,
			length_minutes: 60,
			display_width: 3,
			display_column: 0,
			category: 'food'
		},
		{
			title: 'ACM EDI Workshop',
			description: `JUST A FEW MORE HOURS BESTIES 💪

Meanwhile, enjoy our workshop on how to pitch to judges for a maximized joint slay between u and ur teammates 🤓`,
			hour_start: 25,
			minute_start: 0,
			length_minutes: 60,
			display_width: 2,
			display_column: 0,
			category: 'workshop'
		},
		{
			title: 'Tech Together Meet Up',
			description: `JUST A FEW MORE HOURS BESTIES 💪

Meanwhile, enjoy our workshop on how to pitch to judges for a maximized joint slay between u and ur teammates 🤓`,
			hour_start: 26,
			minute_start: 0,
			length_minutes: 60,
			display_width: 2,
			display_column: 0,
			category: 'workshop'
		},
		{
			title: `Raye's Tech for Good Career Workshop`,
			// description: `JUST A FEW MORE HOURS BESTIES 💪

			// Meanwhile, enjoy our workshop on how to pitch to judges for a maximized joint slay between u and ur teammates 🤓`,
			hour_start: 27,
			minute_start: 0,
			length_minutes: 60,
			display_width: 2,
			display_column: 0,
			category: 'workshop'
		},
		{
			title: `Identity Panel`,
			// description: `JUST A FEW MORE HOURS BESTIES 💪

			// Meanwhile, enjoy our workshop on how to pitch to judges for a maximized joint slay between u and ur teammates 🤓`,
			hour_start: 28,
			minute_start: 30,
			length_minutes: 60,
			display_width: 2,
			display_column: 0,
			category: 'workshop'
		},
		{
			title: 'Lunch',
			description: `The B in LGBT stands for BELLA PITA 🥙

Go grab ur scrumdiddly yum lunch now, u deserve it <3`,
			location: 'main room',
			hour_start: 29,
			minute_start: 0,
			length_minutes: 15,
			display_width: 3,
			display_column: 0,
			category: 'food'
		},
		{
			title: `Entrepreneurship, Pitching Workshop`,
			// description: `JUST A FEW MORE HOURS BESTIES 💪

			// Meanwhile, enjoy our workshop on how to pitch to judges for a maximized joint slay between u and ur teammates 🤓`,
			hour_start: 29,
			minute_start: 30,
			length_minutes: 60,
			display_width: 2,
			display_column: 0,
			category: 'workshop'
		},
		// {
		// 	title: 'Devpost Submission Due',
		// 	description: `⚠️Submit ur hacks on Devpost now!!!! ⚠️`,
		// 	hour_start: 26,
		// 	minute_start: 0,
		// 	length_minutes: 10,
		// 	display_width: 3,
		// 	display_column: 0,
		// 	category: 'other'
		// },
		{
			title: 'Hacking Ends',
			description: `⚠️LAST CALL!!!
Submit your hacks on Devpost now !! ⚠️`,
			hour_start: 31,
			minute_start: 0,
			length_minutes: 10,
			display_width: 3,
			display_column: 0,
			category: 'other'
		},
		// 		{
		// 			title: 'Digital Art: P5.js',
		// 			description: `She’s artsy 🎨or whatever… and tech-y 💻

		// Come join Maya as she talks about her work in digital art!!! She slays we promise 💅`,
		// 			hour_start: 27,
		// 			minute_start: 0,
		// 			length_minutes: 30,
		// 			display_width: 3,
		// 			display_column: 0,
		// 			category: 'talk'
		// 		},
		// 		{
		// 			title: "Yen's workshop",
		// 			description: `Yen Tan is a co-founder of Kona, an employee wellbeing platform that puts people first. Yen has spoken at Google, GiLab Commit, and other remote work conferences and podcasts. Yen will be speaking about finding confidence and fighting burnout.`,
		// 			hour_start: 28,
		// 			minute_start: 0,
		// 			length_minutes: 30,
		// 			display_width: 2,
		// 			display_column: 1,
		// 			category: 'workshop'
		// 		},
		{
			title: 'Judging',
			hour_start: 33,
			minute_start: 30,
			length_minutes: 120,
			display_width: 2,
			display_column: 0,
			category: 'other'
		},
		// 		{
		// 			title: 'Just dance',
		// 			description: `feeling in the mood to dance after submitting your hack? 🕺

		// Join us in a game of Just Dance!!! bet u can’t beat my score for Rasputin 😈`,
		// 			hour_start: 28,
		// 			minute_start: 30,
		// 			length_minutes: 60,
		// 			display_width: 1,
		// 			display_column: 2,
		// 			category: 'fun'
		// 		},
		// {
		// 	title: 'Closing Speaker - Fiona',
		// 	description: `TechTogether's lovely Fiona is back as our closing speaker! 🤯`,
		// 	hour_start: 29,
		// 	minute_start: 30,
		// 	length_minutes: 30,
		// 	display_width: 3,
		// 	display_column: 0,
		// 	category: 'other'
		// },
		{
			title: 'Closing Presentation',
			description: `DRUMROLL PLEASE… 🥁

Time to see which cool prizes u won in our closing presentation <3 🏆`,
			hour_start: 35,
			minute_start: 30,
			length_minutes: 90,
			display_width: 3,
			display_column: 0,
			category: 'other'
		},
		{
			title: 'Dinner',
			description: `COME GET YALL JUICEEEE 🧃

Plz go and get ur dinner, friends.`,
			location: 'main room',
			hour_start: 37,
			minute_start: 0,
			length_minutes: 60,
			display_width: 3,
			display_column: 0,
			category: 'food'
		}
	];

	interface Hour {
		index: number;
		string: string;
	}

	const hours: Hour[] = [
		{ index: 0, string: '8am' },
		{ index: 1, string: '9am' },
		{ index: 2, string: '10am' },
		{ index: 3, string: '11am' },
		{ index: 4, string: '12pm' },
		{ index: 5, string: '1pm' },
		{ index: 6, string: '2pm' },
		{ index: 7, string: '3pm' },
		{ index: 8, string: '4pm' },
		{ index: 9, string: '5pm' },
		{ index: 10, string: '6pm' },
		{ index: 11, string: '7pm' },
		{ index: 12, string: '8pm' },
		{ index: 13, string: '9pm' },
		{ index: 14, string: '10pm' },
		{ index: 15, string: '11pm' },
		{ index: 16, string: '12am' },
		{ index: 17, string: '1am' },
		{ index: 18, string: '2am' },
		{ index: 19, string: '3am' },
		{ index: 20, string: '4am' },
		{ index: 21, string: '5am' },
		{ index: 22, string: '6am' },
		{ index: 23, string: '7am' },
		{ index: 24, string: '8am' },
		{ index: 25, string: '9am' },
		{ index: 26, string: '10am' },
		{ index: 27, string: '11am' },
		{ index: 28, string: '12pm' },
		{ index: 29, string: '1pm' },
		{ index: 30, string: '2pm' },
		{ index: 31, string: '3pm' },
		{ index: 32, string: '4pm' },
		{ index: 33, string: '5pm' },
		{ index: 34, string: '6pm' },
		{ index: 35, string: '7pm' },
		{ index: 36, string: '8pm' },
		{ index: 37, string: '9pm' }
	];

	let eventIsHovered = false;
	let trackerTime = 0;
	let content: HTMLDivElement;

	function updateTrackerTime() {
		let startDate = new Date('February 1, 2025 08:00 GMT-08'); // Use this time in prod
		// let startDate = new Date(`January 24, 2023 08:00 GMT-08`);
		let currentDateTime = Date.now();
		let timeSinceStartHours = currentDateTime - startDate.getTime();
		timeSinceStartHours /= 1000 * 60 * 60; // milliseconds per hour
		let timeSinceStartTenMinutes = Math.floor(timeSinceStartHours * 6);

		// jump to current time on pageload
		if (content) {
			console.log(content);
			content.scroll({
				top: timeSinceStartTenMinutes * 150 * (1 / 6) - 130,
				behavior: 'smooth'
			});
		}
		trackerTime = timeSinceStartTenMinutes;
		return null;
	}

	let interval: number;

	updateTrackerTime();

	onMount(() => {
		updateTrackerTime();

		// update tracker every 10 minutes
		interval = setInterval(
			() => {
				if (!eventIsHovered) {
					trackerTime += 1;
					content.scrollTop = trackerTime * 150 * (1 / 6) - 100;
				}
			},
			1000 * 60 * 10
		) as unknown as number;
	});

	onDestroy(() => {
		clearInterval(interval);
	});
</script>

<section id="schedule" class="schedule-container z-1" on:loadstart={updateTrackerTime()} on:mouseup>
	<div class="header flex max-w-full flex-col items-center px-6">
		<h1 class="text-fuchsia mb-1 text-center">Day of Events</h1>
		<p class="text-center">
			We're so excited to see you all soon! Here's a sneak peek at what we'll have happening:
			<br />(click for more info)
		</p>

		<div class="mt-2 flex max-w-full flex-row flex-wrap justify-center gap-x-4">
			{#each Object.entries(ColorMap) as [category, name]}
				<div class="category flex flex-row items-center gap-2">
					<div class="h-4 w-4 rounded-full {name} inline-block" />
					{category}
				</div>
			{/each}
		</div>
	</div>
	<div bind:this={content} class="content h-48" id="schedule-content">
		{#each hours as hour}
			<div class="spacer h{hour.index * 6}"><span>{hour.string}</span></div>
			<div class="spacer h{hour.index * 6} half" />
		{/each}
		<div class="events">
			{#each events as event}
				<Event
					title={event.title}
					description={event.description}
					location={event.location}
					hour_start={event.hour_start}
					minute_start={event.minute_start}
					length_minutes={event.length_minutes}
					display_width={event.display_width}
					display_column={event.display_column}
					color={ColorMap[event.category]}
					{eventIsHovered}
				/>
			{/each}
		</div>
		<div class="tracker h{trackerTime} {trackerTime < 0 ? ' hidden' : ''}">
			<div class="circle" />
		</div>
	</div>
</section>
