<script lang="ts">
	import { fly } from 'svelte/transition';
	import '../../app.css';
	import Project from './Project.svelte';
	import { projects } from './projectsData';

	let { children } = $props();

	let categories = ['All', 'AI/ML', 'Games', 'Web/App'];

	let currentCategory = $state('All');

	function setCategory(category: string) {
		currentCategory = category;
		console.log('category: ' + category);
	}
</script>

<div in:fly={{ y: 200, duration: 2000 }}>
	<div>
		<h1 class="my-[1rem] text-3xl">Projects</h1>
		<!-- <div style="height:10px"></div> -->
		<!-- listing the categories -->
		<div class="mb-7 flex flex-row gap-7">
			{#each categories as category}
				<button
					class="text-xl hover:text-indigo-400 {currentCategory === category
						? 'bg-indigo-300 text-white'
						: ''}"
					aria-label={category}
					onclick={() => setCategory(category)}>{category}</button
				>
			{/each}
		</div>
	</div>
	<div class="flex flex-col gap-2">
		<div style="height:5px"></div>

		<!-- {#if currentCategory === 'AI/ML'}
			<p>An exploration of AI/ML projects using mainly TensorFLow</p>
		{:else if currentCategory === 'Games'}
			<p>Game development projects</p>
		{:else if currentCategory === 'Web/App'}
			<p>App development projects</p>
		{/if} -->
	</div>
	<!-- listing the projects per category-->
	<div class="flex justify-center">
		<div class="mb-8 grid grid-cols-1 gap-20 2xl:grid-cols-2">
			{#each projects as project}
				{#if currentCategory === 'All' || project.type.includes(currentCategory)}
					<Project {project} />
				{/if}
			{/each}
		</div>
	</div>
	{@render children()}
</div>
