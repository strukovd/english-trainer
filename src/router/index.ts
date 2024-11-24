import { createRouter, createWebHistory } from "vue-router";
import { isUserAuthorized } from "./middlewares";
import routes from './routes';

const DEFAULT_TITLE = "Second Brain";

const router = createRouter({
	history: createWebHistory(import.meta.env.BASE_URL),
	routes: routes,
});

// router.beforeEach((to, from, next) => {
// 	if (!to.meta.public && !isUserAuthorized()) {
//		/* Переадресация неавторизованного пользователя */
// 		next("/login");
// 	} else {
// 		next();
// 	}
// });

router.afterEach((to, from) => {
	if (to.meta.icon) {
		document
			.querySelector("[rel='icon']")
			?.setAttribute("href", to.meta.icon as string);
	}

	document.title = (to.meta.title as string) || DEFAULT_TITLE;
	// Vue.nextTick(() => { });
});

export default router;
