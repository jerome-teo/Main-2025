<script lang="ts">
	import Postit from './q&a/Postit.svelte';
	import ShortcutIcon from './utils/ShortcutIcon.svelte';
	import WindowBase from './utils/WindowBase.svelte';
</script>

<div class="p-4 flex flex-col">
	<div class="md-8 md:mt-[8vh] sm:ml-2 md:ml-[8vw] z-10 pointer-events-none">
		<WindowBase
			title=""
			textCenter={true}
			background_val="linear-gradient(90deg, #EF5986 0.09%, #FFBFB1 16.22%, #FFE9B1 38.59%, #9FF4CB 58.37%, #92DEFF 78.14%, #C993FF 99.48%);"
		>
			<h1>WE'RE NOT LIKE OTHER HACKATHONS.</h1>
			<p>
				QWER Hacks aims to mobilize and bring together LGBTQIA+ individuals and allies to uplift
				marginalized communities through a focus on queer joy and social impact tech!
			</p>
		</WindowBase>
	</div>
	<div class="mt-5 mr-4 md:mt-[-40px] md:mr-[8vw] self-end pointer-events-none">
		<WindowBase
			title=""
			textCenter={true}
			background_val="linear-gradient(90deg, #75ABE7 0%, #F1A4E5 100%);"
			max_width="max-w-[80ch]"
		>
			<h1 class="capitalize">long blurb about this year's format</h1>
			<p>
				This year QWER Hacks is focused on another format of hackathon: doing more community engaged
				development and intentional development. We are seeking projects that exist at this
				intersection: unaddressed issues x importance to society. We want to see hacks of use and
				passion. We’ll have experts on various topics at the event to talk to but if you have an
				issue your passionate about and know a lot about, hack away!
			</p>
		</WindowBase>
	</div>

	<ShortcutIcon title="Raccoon Memes" src="assets/intro/folder.svg" alt="Folder Icon" />
	<Postit>
		<p class="text-center">
			“I loved everything about the hackathon: the workshops, activities, energy, environment,
			topics, and purpose!!! I can’t wait to see it all again at QWER Hacks 2024!”
		</p>
	</Postit>
</div>
