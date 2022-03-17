module.exports = {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	safelist: [
		{
			pattern: /^grid-cols-/
		},
		{
			pattern: /^row-start-/
		}
	],
	theme: {
		fontFamily: {
			sans: ['roboto', 'sans-serif']
		},
		extend: {
			colors: {
				blue: {
					deep: '#3056cf'
				}
			}
		}
	},
	variants: {
		extend: {
			padding: ['hover', 'group-hover', 'last'],
			fontStyle: ['hover']
		}
	},
	plugins: []
};
