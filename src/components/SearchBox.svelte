<script lang="ts">
	import SearchEngineDropdown, { searchEngines } from './SearchEngineDropdown.svelte';

	let searchEngine = searchEngines[0];
</script>

<div class={`flex mx-auto ${$$props.class}`} style={$$props.style}>
	<SearchEngineDropdown
		{searchEngine}
		on:setSearchEngine={(event) => (searchEngine = event.detail)}
	/>
	<div class="py-1 px-2 flex-grow bg-white rounded-r">
		<form action={searchEngine.action} method="get" target="_blank">
			<input
				type="text"
				placeholder="Suche"
				class="block w-full focus:outline-none"
				name={searchEngine.query}
				autoFocus
			/>
		</form>
	</div>
</div>
