<script>
	import { ModeWatcher } from "mode-watcher";
	import "@fontsource-variable/plus-jakarta-sans";
	import "../app.pcss";
	import Navbar from "$lib/components/custom/navbar/navbar.svelte";
</script>

<ModeWatcher />

<body class="antialiased scroll-smooth">
	<div class="container mx-auto min-h-screen max-w-4xl">
		<Navbar />
		<slot />
	</div>
</body>

<style>
	:global(body) {
		font-family: "Plus Jakarta Sans Variable", sans-serif;
	}
</style>
