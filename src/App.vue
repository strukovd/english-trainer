<template>
	<section class="loadingScreen" v-if="appStore.loading">
		Загрузка...
	</section>
	<section id="app-container" v-else>
		<!-- <transition name="modal">
			<ModalWrapper v-if="appStore.modals.length"/>
		</transition> -->
		<main>
			<component :is="layout"></component>
		</main>
		<footer>
			<!-- <v-snackbar v-model="appStore.snackbar.show" multi-line :color="appStore.snackbar.color" center>
				<v-icon v-if="appStore.snackbar.icon" :icon="appStore.snackbar.icon" style="opacity:.8"></v-icon>
				<div class="d-flex justify-center">{{ appStore.snackbar.msg }}</div>
			</v-snackbar> -->
		</footer>
	</section>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { mapStores } from 'pinia';
import { useAppStore, useUserStore } from '@/stores';
import DefaultLayout from '@/components/layouts/DefaultLayout.vue';
import MainLayout from '@/components/layouts/MainLayout.vue';

export default defineComponent({
	components: {
		MainLayout,
		DefaultLayout,
	},
	computed: {
		...mapStores(useAppStore, useUserStore),
		layout() {
			return this.$route.meta.layout || 'DefaultLayout';
		}
	},
	methods: {},

	created() {
		this.appStore.loading = true;

		//... загрузка данных

		Promise.all([  ])
			.catch(() => {
				console.log('Не удалось загрузить данные');
			}).
			finally(() => {
				this.appStore.loading = false;
			});
	},
});
</script>

<style lang="scss">

</style>
