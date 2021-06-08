<script lang="ts">
	import 'components/lib/theme.css'
	export let disabled: boolean = false
</script>

<button {disabled}>Test Button</button>

<style>
	button {
		cursor: pointer;
		background-color: var(--color-active-background);
		color: var(--color-active-foreground);
		border-radius: 0.5em;
		line-height: 2em;
		padding: 0 1em;
		border: none 0;
	}
	button:disabled {
		cursor: not-allowed;
		background-color: var(--color-active-disabled-background);
	}
</style>
