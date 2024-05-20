import { writable } from 'svelte/store';
import type { Writable } from 'svelte/store';
import type { Row } from '@vincjo/datatables';

export const events: Writable<Row[]> = writable([]);
