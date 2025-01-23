<script lang="ts">
	import { fly } from 'svelte/transition';
	import '../../app.css';
	import Project from './Project.svelte';
	import { projects } from './projectsData';

	let { children } = $props();

	let categories = ['All', 'AI/ML', 'Games', 'App', 'Graphics', 'GenArt'];

	let currentCategory = $state('All');

	function setCategory(category: string) {
		currentCategory = category;
		console.log('category: ' + category);
	}
</script>

<div in:fly={{ y: 200, duration: 2000 }}>
	<div>
		<h1 class="text-3xl">Projects</h1>
		<div style="height:10px"></div>
		<!-- listing the categories -->
		<div class="flex flex-row gap-7">
			{#each categories as category}
				<button
					class="text-xl {currentCategory === category ? 'text-indigo-600' : ''}"
					aria-label={category}
					onclick={() => setCategory(category)}>{category}</button
				>
			{/each}
		</div>
	</div>
	<div class="flex flex-col gap-2">
		<div style="height:5px"></div>

		{#if currentCategory === 'GenArt'}
			<p>Creative coding using p5.js</p>
		{:else if currentCategory === 'Graphics'}
			<p>Deep dive into computer graphics!</p>
		{:else if currentCategory === 'AI/ML'}
			<p>AI/ML projects</p>
		{:else if currentCategory === 'Games'}
			<p>Game development projects</p>
		{:else if currentCategory === 'App'}
			<p>App development projects</p>
		{/if}

		<!-- listing the projects per category-->
		<div class="flex flex-row flex-wrap gap-4">
			{#each projects as project}
				{#if currentCategory === 'All' || project.type.includes(currentCategory)}
					<Project {project} />
				{/if}
			{/each}
		</div>
	</div>
	{@render children()}
</div>
