<script lang="ts" context="module">
	interface SearchEngine {
		name: string;
		action: string;
		query: string;
	}

	export const searchEngines: SearchEngine[] = [
		{ name: 'Google', action: 'https://www.google.com/search', query: 'q' },
		{ name: 'DuckDuckGo', action: 'https://duckduckgo.com/', query: 'q' },
		{
			name: 'Startpage',
			action: 'https://www.startpage.com/sp/search',
			query: 'query'
		}
	];
</script>

<script lang="ts">
	import DropdownArrow from 'src/icons/DropdownArrow.svelte';

	import { createEventDispatcher } from 'svelte';

	let dropdownOpen = false;
	const dispatch = createEventDispatcher();

	export let searchEngine: SearchEngine;
</script>

<div
	class={`relative py-1 px-2 border-r bg-gradient-to-t from-gray-100 to-white rounded-l ${
		dropdownOpen && 'rounded-bl-none'
	}`}
>
	<div
		class=" flex text-gray-500 hover:text-gray-300 transition-colors cursor-pointer"
		on:click={() => {
			dropdownOpen = !dropdownOpen;
		}}
	>
		<span>{searchEngine.name}</span>
		<DropdownArrow class="block ml-1 dropdown-arrow" />
	</div>
	{#if dropdownOpen}
		<div class="absolute bg-white rounded-b top-8 min-w-full py-1 left-0 shadow">
			<ul>
				{#each searchEngines as search}
					<li
						class="px-2 hover:bg-gray-500 hover:text-white hover:italic cursor-pointer"
						on:click={() => {
							dispatch('setSearchEngine', search);
							dropdownOpen = false;
						}}
					>
						{search.name}
					</li>
				{/each}
			</ul>
		</div>
	{/if}
</div>

<style>
	:global(.dropdown-arrow) {
		width: 10px;
	}
</style>
