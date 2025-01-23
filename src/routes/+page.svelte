<script>
	import { fly } from 'svelte/transition';
</script>

<div class="flex flex-col" in:fly={{ y: 200, duration: 2000 }}>
	<div class="flex flex-row">
		<img src="pumpkin.png" alt="Pumpkin" class="h-40 w-40" />
		<div class="flex flex-col gap-2">
			<h1 class="text-5xl">Hi I'm Leejun Kim!</h1>
			<p>
				I’m an aspiring MLE engineer, computer graphics enthusiast, and artist. Welcome to my
				homepage!
			</p>
		</div>
	</div>
	<h1 class="text-3xl">About me</h1>
	<p>
		Welcome to my website! I'm Leejun, currently a senior studying at the University of Washington -
		Seattle, majoring in CS. I love AI & ML, computer graphics, and game development. I want to live
		an intentional life while doing what I love and enjoy.
	</p>
	<p class="font-bold">I want to create what I want to exist.</p>

	<div style="height:30px"></div>

	Outside of these interests, I...
	<ul class="list-inside list-disc">
		<li>love digital art</li>
		<li>am a bookworm, recently got into SF</li>
		<li>use Obsidian as my main PKS, Notion sometimes</li>
		<li>love indie/unique games</li>
	</ul>
	<br />
	<p>I'm happy to connect and work on projects together/chat. Feel free to reach out!</p>

	<div style="height:40px"></div>
</div>
