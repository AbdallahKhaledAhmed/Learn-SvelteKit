<script>
	import '../app.css';
	import favicon from '$lib/assets/favicon.svg';
	import Nav from '$lib/components/Nav.svelte';

	let { children } = $props();
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
</svelte:head>

<div style:display="flex" style="display: flex; gap: 2rem;">
	<aside><Nav /></aside>
	{@render children()}
</div>