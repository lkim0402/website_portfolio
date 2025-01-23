<script lang="ts">
	import { fly } from 'svelte/transition';
	import '../../app.css';
	let { children } = $props();
</script>

<div in:fly={{ y: 200, duration: 2000 }}>
	{@render children()}
</div>
