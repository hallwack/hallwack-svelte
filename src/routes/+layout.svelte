<script>
	import "../app.pcss";
	import Navbar from "$lib/components/custom/navbar/navbar.svelte";
	import "@fontsource-variable/plus-jakarta-sans";
</script>

<div class="container mx-auto min-h-screen max-w-4xl antialiased">
	<Navbar />
	<slot />
</div>

<style>
	:global(body) {
		font-family: "Plus Jakarta Sans Variable", sans-serif;
	}
</style>

