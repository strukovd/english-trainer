<template>
	<nav class="sidebar">
		<div class="logo">
			<router-link to="/">
				<!-- <img src="@/assets/GP-Logo.svg" alt="gazprom" /> -->
			</router-link>
		</div>
		<section class="nav-section" v-for="section in navigationMap" :key="section.name">
			<h3 class="section-title"><v-icon :icon="section.icon" size="1.2em" style="margin-right:.2em; vertical-align:baseline;"/>{{ section.name }}</h3>
			<nav class="sidebar-nav" v-for="navItem in section.items" :key="navItem.link"
				@click="!navItem.disabled && selectItem(navItem)"
				:class="{ 'selected': currentLink === navItem.link }"
				:style="{ opacity: navItem.disabled ? '.3' : '1' }"
			>
				<v-icon class="icon" :icon="navItem.icon" size="1.2em"/>
				<span>{{ navItem.name }}</span>
			</nav>
		</section>
	</nav>
</template>

<script lang="ts">
import { mapStores } from 'pinia';
import { useAppStore } from '@/stores';


export default {
	computed: {
		...mapStores(useAppStore)
	},
	data() {
		return {
			currentLink: '',
			navigationMap: [
				{
					name: 'Административное', icon: 'mdi-progress-wrench', items: [
						{ name: 'Пользователи', link: '/user', icon: 'mdi-account-outline' },
						{ name: 'Группы', link: '/group', icon: 'mdi-account-group-outline' },
						{ name: 'Разрешения', link: '/permission', icon: 'mdi-lock-outline' },
						{ name: 'Статистика', link: '/stat', icon: 'mdi-chart-line-variant', disabled: true },
						{ name: 'Журнал активности', link: '/activity', icon: 'mdi-notebook-outline', disabled: true },
					]
				},
				{
					name: 'Обратная связь', icon: 'mdi-comment-multiple-outline', items: [
						{ name: 'Заявки', link: '/forms', icon: 'mdi-file-document-outline', disabled: true },
						{ name: 'Чат', link: '/chat', icon: 'mdi-chat-outline', disabled: true },
					]
				},
				{
					name: 'Сервис', icon: 'mdi-cog-outline', items: [
						{ name: 'Показания', link: '/readings', icon: 'mdi-gauge', disabled: true },
						{ name: 'Оплаты', link: '/payments', icon: 'mdi-credit-card-outline', disabled: true },
					]
				},
				{
					name: 'Контент', icon: 'mdi-file-table-outline', items: [
						{ name: 'Разделы сайта', link: '/scheme', icon: 'mdi-sitemap-outline' }, // graph-outline
						{ name: 'Новости', link: '/news', icon: 'mdi-newspaper' },
						{ name: 'FAQ | ЧаВо', link: '/faq', icon: 'mdi-help-circle-outline' }, // mdi-bullhorn-outline
						{ name: 'Баннера', link: '/banners', icon: 'mdi-view-carousel-outline' }, // mdi-bullhorn-outline
						{ name: 'Тарифы', link: '/tariffs', icon: 'mdi-cash-multiple', disabled: true },
						{ name: 'История', link: '/history', icon: 'mdi-history' },
						{ name: 'Вакансии', link: '/vacancies', icon: 'mdi-briefcase-outline', disabled: true },
						{ name: 'Руководство', link: '/heads', icon: 'mdi-account-group-outline' },
						{ name: 'Статьи', link: '/articles', icon: 'mdi-text-box-outline' },
						{ name: 'Контакты', link: '/contacts', icon: 'mdi-email-outline', disabled: true },
						{ name: 'Реквизиты', link: '/requisites', icon: 'mdi-credit-card-outline', disabled: true },
						{ name: 'Филиалы', link: '/branches', icon: 'mdi-bank-outline', disabled: true },
						{ name: '9 мая', link: '/nine-may', icon: 'mdi-medal-outline', disabled: true },
						{ name: 'Закупки', link: '/purchases', icon: 'mdi-file-document-multiple-outline', disabled: true },
					]
				},
			]
		};
	},
	methods: {
		selectItem(item: any) {
			this.currentLink = item.link;
			this.$router.push(item.link);
		}
	},

	created() {
		if( !this.currentLink ) this.currentLink = this.$route.path;
	}
};
</script>


<style lang="scss">
.sidebar {
	// background: #F9F9F9;
	// display: flex;
	// flex-direction: column;
	.logo {
		background: #0079C1; // #1852E0;
		background-image: url('@/assets/bg.png');
		background-repeat: no-repeat;
		background-position: top right;
		padding: 10px 20px;
		border-radius: 0 0 4px 0;
	}

	.nav-section {
		padding:.5em 2em;
		font-size:.9em;
		font-weight: 300;

		.section-title {
			color: #1c274c58;
			font-weight: 300;
			font-size: 1.1em;
			margin:.2em 0;
		}

		.sidebar-nav {
			padding:.5em 2em;
			font-size:1em;
			font-weight: 300;
			cursor:pointer;

			.icon {
				margin-right:.2em;
				// opacity:.8;
				vertical-align:baseline;

				background: linear-gradient(191deg, #b4c0dd, #0b3289);
				// background: linear-gradient(124deg, #708090, #0079C1, #005ae5, #805ad3, #805ad3);
				-webkit-background-clip: text;
				background-clip: text;
				-webkit-text-fill-color: transparent;
			}

			&.selected {
				background: #f5f5f5;
				color: #0079C1;
				border-radius: 6px;
			}

		}
	}
}
</style>
