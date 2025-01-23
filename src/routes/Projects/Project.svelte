<script>
	let { project } = $props();
</script>

<div class="flex flex-col justify-start gap-5 p-4" style="width: 45%">
	<div class="outline:border-2 flex justify-center border border-gray-300 hover:shadow-lg">
		{#if project.links && project.links.length > 0}
			<a href={project.links[0].url} target="_blank" rel="noopener noreferrer">
				<img src={project.src} alt={project.title} class="h-64 object-cover" />
			</a>
		{/if}
	</div>
	<div class="flex flex-col gap-1">
		<h2 class="font-bold">{project.title}</h2>
		<div class="flex flex-row gap-2">
			<p class="text-sm italic text-gray-600">{project.date}</p>
			{#if project.links && project.links.length > 0}
				{#each project.links as link}
					<a
						class="text-sm hover:text-indigo-600"
						href={link.url}
						target="_blank"
						rel="noopener noreferrer"
					>
						[{link.name}]
					</a>
				{/each}
			{/if}
		</div>
		<p class="text-sm">Skills: {project.skills}</p>
		<ul class="list-inside list-disc">
			{#each project.explanation as point}
				<li>{point}</li>
			{/each}
		</ul>
	</div>
</div>
