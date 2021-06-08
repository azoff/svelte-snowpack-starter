/** @type {import("snowpack").SnowpackUserConfig } */
export default {
	mount: {
		public: { url: '/', static: true },
		src: '/dist',
		'node_modules/flexboxgrid/css': '/vendor/flexboxgrid',
		'node_modules/normalize.css': '/vendor/normalize',
	},
	exclude: [
		'**/*.stories.svelte',
		'**/stories/**/*.svelte'
	],
	alias: {
		components: './src/components',
		'@src': './src',
	},
	plugins: [
		'@snowpack/plugin-svelte',
		'@snowpack/plugin-typescript',
		['@canarise/snowpack-eslint-plugin', {
      globs: ['**/*.ts', '**/*.svelte'],
    }],
	],
	routes: [
		/* Enable an SPA Fallback in development: */
		// {"match": "routes", "src": ".*", "dest": "/index.html"},
	],
	optimize: {
		/* Example: Bundle your final build: */
		// "bundle": true,
	},
	packageOptions: {
		/* ... */
	},
	devOptions: {
		open: 'none',
	},
	buildOptions: {
		/* ... */
	},
}
