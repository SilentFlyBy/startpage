<script lang="ts">
	import { onMount } from 'svelte';

	let date: Date;

	const dayNames = [
		'Sonntag',
		'Montag',
		'Dienstag',
		'Mittwoch',
		'Donnerstag',
		'Freitag',
		'Samstag'
	];

	const monthNames = [
		'Januar',
		'Februar',
		'März',
		'April',
		'Mai',
		'Juni',
		'Juli',
		'August',
		'September',
		'Oktober',
		'November',
		'Dezember'
	];

	onMount(async () => {
		date = new Date();
		setInterval(() => {
			date = new Date();
		}, 1000);
	});
</script>

<div class={`text-white flex flex-col items-center ${$$props.class}`}>
	<div style="font-size: 120px; line-height: 120px;">
		{`${date?.getHours().toLocaleString(undefined, {
			minimumIntegerDigits: 2
		})}:${date?.getMinutes().toLocaleString(undefined, { minimumIntegerDigits: 2 })}`}
	</div>
	<div class="text-2xl">
		{date &&
			`${dayNames[date?.getDay()]}, ${date.getDate()}. ${
				monthNames[date.getMonth()]
			} ${date.getFullYear()}`}
	</div>
</div>
