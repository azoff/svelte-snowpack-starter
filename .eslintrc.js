const m = module

m.exports = {
	extends: 'eslint:recommended',
	parser: '@typescript-eslint/parser',
	parserOptions: {
		ecmaVersion: 2019,
		sourceType: 'module',
	},
	env: {
		es6: true,
		browser: true,
	},
	plugins: ['svelte3', '@typescript-eslint'],
	overrides: [
		{
			files: ['*.svelte'],
			processor: 'svelte3/svelte3',
		},
	],
	settings: {
		'svelte3/typescript': true,
	},
}
