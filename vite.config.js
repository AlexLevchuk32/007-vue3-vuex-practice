import { fileURLToPath, URL } from 'node:url';

import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [vue()],
	resolve: {
		alias: {
			'@': fileURLToPath(new URL('./src', import.meta.url)),
		},
	},
	server: {
		// host: true,
		open: true,
		// watch: {
		// 	usePolling: true,
		// },
	},
	build: {
		minify: true,
		// sourcemap: 'hidden',
	},
	preview: {
		open: true,
	},
});
