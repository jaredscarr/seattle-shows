<script lang="ts">
	import Datatable from '$lib/components/Datatable.svelte';
	import { onMount } from 'svelte';
	import { events } from '$lib/data/store';

	const ENDPOINTS = ['showbox', 'corazon', 'barboza'];

	onMount(async () => {
		const cachedEvents = localStorage.getItem('cachedEvents');
		if (cachedEvents) {
			events.set(JSON.parse(cachedEvents));
		} else {
			const requests = ENDPOINTS.map(async param => {
				return await fetch(`https://6an5pj1dl8.execute-api.us-west-2.amazonaws.com/prod/event-scraper?integration=${param}`)
					.then((response) => response.json())
					.then((dataJson) => dataJson)
					.catch((err) => console.warn(err));
			});
			const fetchResults = (await Promise.all(requests)).flat();
			events.set(JSON.parse(JSON.stringify(fetchResults)));
			localStorage.setItem('cachedEvents', JSON.stringify(fetchResults));
		}

		setInterval(() => localStorage.clear(), 43200000);
	});
</script>
<svelte:head>
	<title>Seattle Shows</title>
	<meta name="Displays table of a subset of live music in Seattle" content="seattle-shows.jaredscarr.com" />
</svelte:head>

<section>
	<div class="m-5">
		<Datatable />
	</div>
</section>
