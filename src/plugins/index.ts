// import http from './http';
// import snackbar from './snackbar';
// import modal from './modal';
// import fileServer from './fileServer';
// import validator from './validator';

import pinia from '../stores';
import router from '../router';

import type { App } from 'vue';

export function registerPlugins (app: App) {

	pinia.use(({ store }) => {
		store.$http = app.config.globalProperties.$http;
	});

	app
		// .use(http)
		// .use(snackbar)
		// .use(modal)
		// .use(fileServer)
		// .use(validator)
		.use(router)
		.use(pinia);
}
