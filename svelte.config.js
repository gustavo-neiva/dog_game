import preprocess from 'svelte-preprocess';
import netlify from '@sveltejs/adapter-netlify';
// const netlify = require('@sveltejs/adapter-netlify')
import { resolve } from "path"

/** @type {import('@sveltejs/kit').Config} */
const config = {
	kit: {
		adapter: netlify(),

		// hydrate the <div id="svelte"> element in src/app.html
		// target: '#svelte'
		vite: {
		resolve: {
				alias: {
					$components: resolve('./src/components'),
				}
			}
		}
	},

	preprocess: [preprocess({ postcss: true })]
};

export default config;
