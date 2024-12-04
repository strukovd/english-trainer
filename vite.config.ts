import { fileURLToPath, URL } from 'node:url';

import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import vueJsx from '@vitejs/plugin-vue-jsx';
import vueDevTools from 'vite-plugin-vue-devtools';

// https://vitejs.dev/config/
export default defineConfig({
	resolve: {
		alias: {
			'@': fileURLToPath(new URL('./src', import.meta.url))
		}
	},
	plugins: [
		vue(),
		vueJsx(),
		vueDevTools(),
	],
	css: {
		preprocessorOptions: {
			scss: {
				api: 'modern-compiler', // or 'modern'
			},
		},
	},
});
