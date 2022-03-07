import preprocess from 'svelte-preprocess';
import netlify from '@sveltejs/adapter-netlify';
// const netlify = require('@sveltejs/adapter-netlify')
const dev = process.env.NODE_ENV === 'development'

/** @type {import('@sveltejs/kit').Config} */
const config = {
	kit: {
		adapter: netlify(),

		// hydrate the <div id="svelte"> element in src/app.html
		// target: '#svelte'
		vite: {
			ssr: {
					noExternal: dev ? [] : ['@supabase/supabase-js']
			},
		}
	},

	preprocess: [preprocess({ postcss: true })]
};

export default config;
