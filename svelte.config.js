import adapter from '@sveltejs/adapter-static';

/** @type {import('@sveltejs/kit').Config} */

const dev = process.env.NODE_ENV === 'development';

const config = {
	kit: {
		adapter: adapter({
			pages: 'build',
			assets: 'build',
			fallback: null
		}),
		// Replace 'kvborja-portfolio' with your actual GitHub repo name.
		// Remove this line entirely if your repo is <username>.github.io
		paths: { base: dev ? '' : '/kvborja-portfolio' }
	},
	vitePlugin: {
		dynamicCompileOptions: ({ filename }) =>
			filename.includes('node_modules') ? undefined : { runes: true }
	}
};

export default config;
