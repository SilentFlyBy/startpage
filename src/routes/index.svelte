<script lang="ts">
	import Card, { type LinkDescription } from 'src/components/Card.svelte';

	import Clock from 'src/components/Clock.svelte';
	import SearchBox from 'src/components/SearchBox.svelte';
	import { onMount } from 'svelte';
	import { writable } from 'svelte/store';

	interface Config {
		sections: {
			headline: string;
			color: string;
			links: LinkDescription[];
		}[];
	}

	const gistId = '717926d7537f54f2176e00733c6f7195';
	const CONFIG_KEY = 'CONFIG';

	let config = writable<Config>();
	$: gridColumnTemplate = `grid-cols-${$config?.sections.length}`;

	const discoverConfigFile = async () => {
		const gistResponse = await fetch(`https://api.github.com/gists/${gistId}`);
		const json = await gistResponse.json();
		return json.files['startpage.json'].raw_url as string;
	};

	const fetchData = async () => {
		const configUrl = await discoverConfigFile();
		const configResponse = await fetch(configUrl);
		const json = await configResponse.json();
		localStorage.setItem(CONFIG_KEY, json);
		config.set(json);
	};

	onMount(async () => {
		const json = localStorage.getItem(CONFIG_KEY);
		try {
			const c = json ? (JSON.parse(json) as Config) : null;
			c && config.set(c);
		} catch {}

		fetchData();
	});
</script>

<div class="w-full h-full bg-gray-700 overflow-auto">
	<div class={`my-0 mx-auto mt-8 font-sans grid ${gridColumnTemplate}`} style="max-width: 1024px;">
		<Clock class="col-start-2 col-end-4 mx-auto my-12" />
		<SearchBox
			class="col-start-2 col-end-4 my-2 row-start-3"
			style="width: calc(100% - (2* 0.3rem) - 6px)"
		/>
		{#if $config}
			{#each $config.sections as section}
				<Card key={section.headline} {...section} class="row-start-4" />
			{/each}
		{/if}
	</div>
</div>
