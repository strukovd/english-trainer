<template>
	<section id="main-layout">
		<section id="left-side">
			<SideBar/>
		</section>
		<section id="right-side">
			<header>
				<Header/>
			</header>
			<main id="main-page">
				<router-view :key="$route.fullPath" />
			</main>
			<footer></footer>
		</section>
	</section>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import Header from '@/components/common/Header.vue';
import SideBar from '@/components/common/SideBar.vue';

export default defineComponent({
	name: 'MainLayout',
	component: {
		Header,
		SideBar
	},
	data() {
		return {};
	},
	methods: {},
});
</script>

<style lang="scss">
#main-layout {
	display: flex;
	// flex-wrap: wrap;

	#left-side {
		flex: auto 0 0;
		min-height: 100vh;
		background: #ffffff;
		border-right: #e0e2e791 1px solid; // #E2E8F0
	}

	#right-side {
		// flex: auto 1 0;
		width: 100%;

		#main-page {
			padding: 20px;
		}
	}
}
</style>
