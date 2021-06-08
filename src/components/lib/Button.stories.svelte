<script lang="js">
	import { Meta, Story, Template } from '@storybook/addon-svelte-csf'
	import Button from './Button.svelte'
</script>

<Meta title="Button" component={Button} />

<Template let:args>
	<Button {...args}>Hello World</Button>
</Template>

<Story
	name="Basic"
	args={{
		disabled: false,
	}}
/>
