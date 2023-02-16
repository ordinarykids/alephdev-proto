const config = {
	content: [
		"./src/**/*.{html,js,svelte,ts}",
		"./node_modules/flowbite-svelte/**/*.{html,js,svelte,ts}",
	],

	theme: {
		fontFamily: {
			'sans': ['"Maison Neue Bold"', 'ui-sans-serif', 'system-ui'],
			'serif': ['"GT Alpina"', 'ui-serif', 'Georgia'],
			'mono': ['ui-monospace', 'SFMono-Regular'],
			'display': ['Oswald'],
			'body': ['"Open Sans"'],
		},
		extend: {},
	},

	plugins: [
		require('flowbite/plugin')
	],
};

module.exports = config;
