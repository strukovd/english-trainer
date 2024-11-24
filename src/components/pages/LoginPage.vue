<template>
	<div>Страница входа</div>
	<!-- <v-snackbar v-model="snackbar.show" multi-line :color="snackbar.color" center>
		<div class="d-flex justify-center">{{ snackbar.msg }}</div>
	</v-snackbar>
	<v-container class="card-container">
		<v-card class="login-card">
			<v-row class="card-content">
				<v-col cols="6" class="logo-section">
					<img class="logo" alt="Логотип" src="@/assets/images/logo.svg"/>
					<h2 class="caption">Административная панель</h2>
				</v-col>
				<v-col cols="6" class="inputs-section">
					<v-text-field @keyup.enter="login" v-model="username" class="input" label="Логин"></v-text-field>
					<v-text-field @keyup.enter="login" v-model="password" type="password" class="input" label="Пароль"></v-text-field>
					<v-btn @click="login" class="btn" block color="primary">Войти</v-btn>
				</v-col>
			</v-row>
		</v-card>
	</v-container> -->
</template>


<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
	name: 'LoginPage',
	data() {
		return {
			username: '',
			password: '',
			snackbar: {
				show: false,
				msg: '',
				color: ''
			}
		};
	},
	methods: {
		login() {
			const { username, password } = this;
			this.$http.post('/auth/login', { username, password })
				.then(({ data }) => {
					localStorage.setItem('token', data.accessToken);
					this.$router.push('/');
				})
				.catch((error) => {
					this.snackbar.show = true;
					this.snackbar.color = `red`;
					this.snackbar.msg = error.response.data?.error || error.message;
				});
		}

	},
});
</script>


<style lang="scss">
.card-container {
	display: flex;
	justify-content: center;

	.login-card {
		margin:25vh auto auto;
		width:700px;
		background-color:#f9f9f9;

		.card-content {
			padding:2em;

			.logo-section {
				border-right: 1px solid #f3f3f3;

				.logo {
					padding:0 1em;
					margin-bottom:.6em;
					max-height: 150px;
				}
				.caption {
					color: #2b7099;
					text-align: center;
				}
			}

			.inputs-section {

				.btn {
					height: auto;
					padding: 1.3em 0;
				}
			}
		}


	}
}
</style>
