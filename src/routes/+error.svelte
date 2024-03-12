<script lang="ts">
	import { page } from "$app/stores";
	import { fade } from "svelte/transition";

	$: console.error($page.error);
</script>

<div
	in:fade
	class="my-8 flex flex-col gap-8 text-justify text-base font-medium leading-relaxed sm:text-lg"
>
	<h1 class="text-2xl font-bold tracking-wide">{$page.status}: {$page.error?.message} ❌</h1>
</div>
