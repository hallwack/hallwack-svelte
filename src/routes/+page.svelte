<script lang="ts">
	import { fade } from "svelte/transition";
	import Photo from "$lib/assets/ava.webp";
	import ContactLinks from "@/components/custom/contact-links/contact-links.svelte";
</script>

<div
	in:fade
	class="my-8 flex flex-col gap-8 text-justify text-base font-normal leading-relaxed sm:text-lg sm:font-medium"
>
	<h1 class="text-2xl font-bold tracking-wide">Hi, I'm Raihan Adam 👋</h1>

	<p>
		I'm a 10th semester student majoring in Informatics Engineering at UIN Sunan Gunung Djati
		Bandung. Over the past four years, I have been working as a junior web developer at a startup in
		Bandung.
	</p>

	<div class="flex items-center justify-center">
		<img src={Photo} alt="Raihan Adam" class="w-72 rounded-lg object-cover" />
	</div>

	<p>
		I am highly motivated to learn new things, work diligently, and thrive in a team environment.
		Additionally, I take responsibility for assigned tasks, possess a strong willingness to learn
		and improve myself, and have excellent interpersonal skills, especially in new and diverse
		environments.
	</p>

	<p>
		Throughout my career journey, I have successfully completed various exciting web projects that
		have had a positive impact. I believe that technology can provide innovative solutions to
		everyday challenges, which inspires me to continuously develop my skills and knowledge in this
		field.
	</p>

	<p>
		I am incredibly enthusiastic about advancing my career in web development and making meaningful
		contributions to the industry. I am ready to take on new challenges and continually enhance my
		skills through lifelong learning.
	</p>

	<ContactLinks />
</div>
