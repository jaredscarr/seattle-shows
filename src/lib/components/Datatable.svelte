<script lang="ts">
	import ThSort from '$lib/components/ThSort.svelte';
	import ThFilter from '$lib/components/ThFilter.svelte';
	import Search from '$lib/components/Search.svelte';
	import RowsPerPage from '$lib/components/RowsPerPage.svelte';
	import RowCount from '$lib/components/RowCount.svelte';
	import Pagination from '$lib/components/Pagination.svelte';
	import { events } from '$lib/data/store';
	import { DataHandler } from '@vincjo/datatables';

	$: handler = new DataHandler($events, { rowsPerPage: 5 });
	$: rows = handler.getRows();

</script>

<div class="overflow-y-auto space-y-4">
	<header class="flex justify-between">
		<Search {handler} />
		<RowsPerPage {handler} />
	</header>
	<table class="table table-hover table-compact w-full table-auto">
		<thead>
		<tr>
			<ThSort {handler} orderBy="date">Date</ThSort>
			<ThSort {handler} orderBy="headliner">Headliner</ThSort>
			<ThSort {handler} orderBy="support_talent">Openers</ThSort>
			<ThSort {handler} orderBy="showtime">Showtime</ThSort>
			<ThSort {handler} orderBy="venue">Venue</ThSort>
			<ThSort {handler} orderBy="age">Age</ThSort>
		</tr>
		<tr>
			<ThFilter {handler} filterBy="date" />
			<ThFilter {handler} filterBy="headliner" />
			<ThFilter {handler} filterBy="support_talent" />
			<ThFilter {handler} filterBy="showtime" />
			<ThFilter {handler} filterBy="venue" />
			<ThFilter {handler} filterBy="age" />
		</tr>
		</thead>
		<tbody>
		{#each $rows as row}
			<tr>
				<td>{row.date}</td>
				<td>{row.headliner}</td>
				<td>{row.support_talent}</td>
				<td>{row.showtime}</td>
				<td>{row.venue}</td>
				<td>{row.age}</td>
			</tr>
		{/each}
		</tbody>
	</table>
	<footer class="flex justify-between">
		<RowCount {handler} />
		<Pagination {handler} />
	</footer>
</div>
