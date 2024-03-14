<script lang="ts">
	import "@fontsource-variable/plus-jakarta-sans";
	import "../app.pcss";
	import { page } from "$app/stores";
	import { ModeWatcher } from "mode-watcher";
	import { MetaTags } from "svelte-meta-tags";
	import extend from "just-extend";
	import Navbar from "$lib/components/custom/navbar/navbar.svelte";
	import type { LayoutData } from "./$types";

	export let data: LayoutData;

	$: metaTags = extend(true, {}, data.baseMetaTags, $page.data.pageMetaTags);
</script>

<ModeWatcher />
<MetaTags {...metaTags} />

<body class="scroll-smooth antialiased">
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
