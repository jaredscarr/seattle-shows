<script lang="ts">
	import Datatable from '$lib/components/Datatable.svelte';
	import { onMount } from 'svelte';
	import { events } from '$lib/data/store';

	let data: string;

	onMount(async () => {
		const cachedEvents = localStorage.getItem('cachedEvents');
		if (cachedEvents) {
			events.set(JSON.parse(cachedEvents));
		} else {
			data = await fetch('https://6an5pj1dl8.execute-api.us-west-2.amazonaws.com/prod/event-scraper')
				.then((response) => response.json())
				.then((dataJson) => dataJson)
				.catch((err) => console.warn(err));
			events.set(JSON.parse(JSON.stringify(data)));
			localStorage.setItem('cachedEvents', JSON.stringify(data));
		}

		setInterval(() => localStorage.clear(), 43200000);
	});
</script>
<svelte:head>
	<title>Seattle Shows</title>
	<meta name="Displays table of a subset of live music in Seattle" content="seattle-shows.jaredscarr.com" />
</svelte:head>

<section>
	<Datatable />
</section>
