import adapter from '@sveltejs/adapter-static';
import preprocess from 'svelte-preprocess';
import path from 'path';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://github.com/sveltejs/svelte-preprocess
	// for more information about preprocessors
	preprocess: preprocess(),

	kit: {
		prerender: {
			default: true
		},
		adapter: adapter(),
		paths: {
			base: '/startpage/'
		},
		vite: {
			resolve: {
				alias: {
					src: path.resolve('./src')
				}
			}
		}
	}
};

export default config;
