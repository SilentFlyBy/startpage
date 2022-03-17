<script context="module" lang="ts">
	export interface LinkDescription {
		label: string;
		url: string;
	}
</script>

<script lang="ts">
	interface Props {
		headline: string;
		color: string;
		links: LinkDescription[];
		className?: string;
	}
	export let headline;
	export let links;
	export let color;

	$: {
		console.log(color);
	}
</script>

<div class={`m-2 rounded bg-gray-200 shadow overflow-hidden ${$$props.class}`}>
	<div class="py-4" style="background-color: {color};">
		<h2 class="m-0 text-center text-white text-2xl font-bold">
			{headline}
		</h2>
	</div>
	<ul class="card-links">
		{#each links as link}
			<li>
				<a href={link.url} target="_blank">{link.label}</a>
			</li>
		{/each}
	</ul>
</div>

<style>
	ul.card-links {
		margin: 0;
		padding: 0;

		margin-top: 1rem;

		list-style-type: none;
	}

	ul.card-links a {
		font-size: 1.2rem;
		font-weight: bold;

		display: block;

		padding: 0.5rem 0;
		padding-left: 2rem;

		transition: all 300ms;
		text-decoration: none;

		color: #2d5b9f;
	}
	ul.card-links li {
		margin: 0;
	}
	ul.card-links li:last-child a {
		margin-bottom: 1rem;
	}
	ul.card-links li:last-child a:hover {
		margin-bottom: 0;
	}
	ul.card-links a:hover {
		font-style: italic;

		padding: 1rem 0;
		padding-left: 3rem;

		color: #fff !important;
		background-color: #5b5b5b;
	}
	ul.card-links li:hover ~ li:last-child a {
		margin-bottom: 0 !important;
	}
	ul.card-links a:visited {
		color: #2d5b9f;
	}
</style>
