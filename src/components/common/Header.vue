<template>
	<div class="toolbar">
		<!-- <div class="logo">
			<router-link to="/">
				<img :src="logo" alt="Gazprom"/>
			</router-link>
		</div> -->
		<nav class="menu-items">
			<ul class="ul">
				<li v-for="nav in navigation" :key="nav.id">
					<router-link :class="{ 'link': true, [nav.icon]: true }" :to="nav.path">
						{{ nav.title }}
					</router-link>
				</li>
			</ul>
		</nav>
		<div id="sidemenu">
			<button type="button" class="btn" @click="navOpen = !navOpen" v-bind:class="{ active: navOpen }">
				<span class="top"></span>
				<span class="mid"></span>
				<span class="bottom"></span>
			</button>
			<transition name="translateX">
				<nav v-show="navOpen">
					<div class="wrapper">
						<ul class="list">
							<li class="item" v-for="nav in navigation" :key="nav.id">
								<router-link class="link" :to="nav.path">
									{{ nav.title }}
								</router-link>
							</li>
						</ul>
					</div>
				</nav>
			</transition>
		</div>
		<div class="right">
			<!-- TODO: SearchPanel -->
			<!-- <div class="searchContainer">
				<router-link to="/" class="searchLink">
					<img class="searchIcon" src="@/assets/Search.svg" alt="icon" />
				</router-link>
				<input class="searchInput" type="text" placeholder="Поиск" />
			</div> -->
			<BaseTextBox placeholder="Поиск" prependIcon="mdi-magnify"/>
			<!-- <UserPanel/> -->
		</div>
	</div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
// import logo from '@/assets/GP-Logo.svg';
// import UserPanel from './UserPanel.vue';
// import SearchPanel from './SearchPanel.vue';

export default defineComponent({
	// components: { UserPanel, SearchPanel },
	data() {
		return {
			navOpen: false,
			logo,
			navigation: [
				{ title: 'Административная панель', id: 1, path: '/', icon: 'admin' },
				{ title: 'Статистика', id: 2, path: '/', icon: 'statistics' },
				{ title: 'Чат', id: 3, path: '/', icon: 'chat' },
			]
		};
	}
});
</script>

<style lang="scss" scoped>
.toolbar {
	display: flex;
	align-items: center;
	background: white;
	border-bottom: #e0e2e791 1px solid; // #E2E8F0
	padding: 17px 15px;

	.menu-items {
		flex: auto 1 0;

		@media (max-width: 1400px) {
			display: none;
		}

		.ul {
			display: flex;
			list-style: none;
			color: #1C274C;

			.link {
				text-decoration: none;
				margin: 0 15px;
				color: #1C274C;
			}
		}
	}

	.logo {
		width: 104px;
		height: 51px;
	}


	.right {
		display: flex;
		align-items: center;

		.searchContainer {
			background: #F5F5F5;
			display: flex;
			align-items: center;
			border-radius: 4px;
			border: #D9D9D9 1px solid;
			max-width: 350px;
			padding-left: 10px;

			.searchInput {
				flex: 1;
				border: none;
				padding: 8px 10px 8px 5px;
				font-size: 16px;
				border-radius: 4px 0 0 4px;

				&:focus {
					outline: none;
				}

				&::placeholder {
					color: #C2C4CB;
				}
			}

			.searchLink {
				text-decoration: none;
				color: #fff;
				padding: 3px 8px;
				border-radius: 0 3px 3px 0;
				display: flex;
				align-items: center;
				justify-content: center;
				white-space: nowrap;

				&:hover {
					cursor: pointer;
				}
			}

			.searchIcon {
				display: block;
				width: 20px;
				height: 20px;
			}
		}
	}

	.admin,
	.statistics,
	.chat {
		background-repeat: no-repeat;
		background-position: left center;
		padding-left: 20px;
	}

	.admin {
		background-image: url('@/assets/admin-icon.svg');
	}

	.statistics {
		background-image: url('@/assets/icon-carrier.svg');
	}

	.chat {
		background-image: url('@/assets/chat.svg');
	}
}

#sidemenu {
	display: none;

	@media (max-width: 1400px) {
		display: block;
		flex: auto 1 0;
		position: relative;
	}

	nav {
		width: 200px;
		position: absolute;
		top: 0;
		left: 0;
		z-index: 99;
		background: #F9F9F9;
	}

	.btn {
		display: block;
		width: 50px;
		height: 50px;
		border: none;
		position: relative;
		z-index: 100;
		appearance: none;
		cursor: pointer;
		outline: none;

		span {
			display: block;
			width: 20px;
			height: 2px;
			margin: auto;
			background: grey;
			position: absolute;
			top: 0;
			bottom: 0;
			left: 0;
			right: 0;
			transition: all .4s ease;

			&.top {
				transform: translateY(-8px);
			}

			&.bottom {
				transform: translateY(8px);
			}
		}

		&.active {
			.top {
				transform: rotate(-45deg);
			}

			.mid {
				transform: translateX(-20px) rotate(360deg);
				opacity: 0;
			}

			.bottom {
				transform: rotate(45deg);
			}
		}

	}

	.wrapper {
		padding-top: 50px;

		.list {
			list-style: none;
			padding: 0;
			margin: 0;
		}

		.item {
			.link {
				text-decoration: none;
				line-height: 1.6em;
				font-size: 16px;
				padding: .5em;
				display: block;
				color: #061538;
				transition: .4s ease;

				&:hover {
					background: lightgrey;
					color: dimgrey;
				}
			}
		}
	}

}
</style>
