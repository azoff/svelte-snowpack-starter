const m = module, r = require

const autoPreprocess = r('svelte-preprocess')

m.exports = {
	stories: ['../src/**/*.stories.svelte'],
	addons: ['@storybook/addon-links', '@storybook/addon-essentials', '@storybook/addon-svelte-csf'],
	webpackFinal: async (config) => {
		// add typescript support to svelte stories in Storybook
		const svelteLoader = config.module.rules.find((r) => r.loader && r.loader.includes('svelte-loader'))
		svelteLoader.options.preprocess = autoPreprocess({
			css: { includePaths: ['src', 'node_modules'] },
			typescript: {
				tsconfigFile: './tsconfig.json',
				transpileOnly: true,
			},
		})
		config.resolve.modules.push('src')
		config.resolve.extensions.push('.ts', '.tsx')
		return config
	},
}
