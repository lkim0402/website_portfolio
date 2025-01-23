<script>
	import { fly } from 'svelte/transition';
</script>

<div in:fly={{ y: 200, duration: 2000 }}>
	<h1>Some p5.js viz</h1>
</div>

<!-- <iframe
	title="3d snowman"
	src="https://editor.p5js.org/estherleejunkim/full/vcY57VyA5"
	width="400"
	height="400"
	style="width: 640px; height: 360px; overflow: hidden;"
	frameborder="0"
	scrolling="no"
>
</iframe> -->
