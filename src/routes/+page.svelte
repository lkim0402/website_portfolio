<script>
	import { fly } from 'svelte/transition';
</script>

<div class="flex flex-col" in:fly={{ y: 200, duration: 2000 }}>
	<section class="mb-10">
		<div class="flex flex-row">
			<!-- <img src="pumpkin.png" alt="Pumpkin" class="h-40 w-40" /> -->
			<div class="flex flex-col gap-2">
				<h1 class="mb-2 text-5xl">Hi I'm Leejun Kim!</h1>
				<p class="text-xl">I am a programmer, an artist, and game developer.</p>
			</div>
		</div>
	</section>
	<section class="mb-10">
		<h1 class="mb-2 text-3xl">About me</h1>
		<p>
			Welcome to my website! I'm Leejun, currently a senior studying at the University of Washington
			- Seattle, majoring in CS. I love AI & ML, computer graphics, and game development. I want to
			live an intentional life while doing what I love and enjoy.
		</p>
	</section>

	<section>
		Outside of these interests, I...
		<ul class="list-inside list-disc">
			<li>love digital art!</li>
			<li>use Obsidian as my main PKM (Notion sometimes)</li>
			<li>love indie/unique games</li>
			<li>am trying to focus on one thing, but I love exploring many things all at once..</li>
		</ul>
	</section>

	<section>
		<p>I'm happy to connect and work on projects together/chat. Feel free to reach out!</p>
	</section>
</div>
