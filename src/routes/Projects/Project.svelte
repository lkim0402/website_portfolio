<script>
	let { project } = $props();
</script>

<div class="border-radius border- rounded-3xl border-2">
	<div class="mx-4 flex w-[30rem] flex-col border-gray-300 p-4">
		<section>
			<div class="mb-5 flex items-center justify-center">
				{#if project.links && project.links.length > 0}
					<a href={project.links[0].url} target="_blank" rel="noopener noreferrer">
						<img src={project.src} alt={project.title} class="max-h-[25rem]" />
					</a>
				{/if}
			</div>
		</section>
		<section>
			<div class="mx-2 flex flex-col gap-1">
				<h2 class="font-bold">{project.title}</h2>
				<div class="flex flex-row gap-2">
					<p class="text-sm italic text-gray-600">{project.date}</p>
					{#if project.links && project.links.length > 0}
						{#each project.links as link}
							<a
								class="text-sm text-indigo-600 hover:text-indigo-300"
								href={link.url}
								target="_blank"
								rel="noopener noreferrer"
							>
								[{link.name}]
							</a>
						{/each}
					{/if}
				</div>
				<p class="font- text-[0.8rem] italic text-slate-400">Tools: {project.skills}</p>
				<ul class="list-inside list-disc">
					{#each project.explanation as point}
						<li>{point}</li>
					{/each}
				</ul>
			</div>
		</section>
	</div>
</div>
