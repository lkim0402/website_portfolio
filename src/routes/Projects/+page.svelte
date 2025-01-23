<!-- <script lang="ts">
	import Project from './Project.svelte';
	import { projects } from './projectsData';

	// (in project) for setting project categories
	let currentCategory = $state('All');
	function setCategory(category: string) {
		console.log('current category: ' + category);
		currentCategory = category;
	}
</script>

<div>
	<div class="flex flex-col gap-4">
		{#each projects as project}
			{#if currentCategory === 'All' || project.type.includes(currentCategory)}
				<Project {project} />
			{/if}
		{/each}
	</div>
</div> -->
