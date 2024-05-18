<script lang="ts">
	import '../app.postcss';
	import { AppShell, AppBar, LightSwitch } from "@skeletonlabs/skeleton";
	import { Github } from "lucide-svelte";

	export const prerender = true;
	const currYear = new Date().getFullYear();
</script>

<AppShell>
	<svelte:fragment slot="header">
		<AppBar>
			<svelte:fragment slot="lead">Seattle Shows</svelte:fragment>
			<svelte:fragment slot="trail">
				<a href="https://github.com/jaredscarr"
					 class="btn-icon hover:bg-secondary-400-500-token"
					 data-sveltekit-preload-data="hover">
					<Github />
				</a>
				<LightSwitch />
			</svelte:fragment>
		</AppBar>
	</svelte:fragment>
	<slot />
	<svelte:fragment slot="footer">
		<div class="mt-10 mb-10 text-center">
			<p>Copyright &copy {currYear} Jared Scarr</p>
		</div>
	</svelte:fragment>
</AppShell>
