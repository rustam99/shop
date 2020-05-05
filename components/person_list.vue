<template>
	<ul class="personal-list">
		<li
			v-for="(el, index) in isAuth"
			:key="index"
			class="personal-list__item">
			<nuxt-link :to="el.url" class="link">
				{{el.name}}
			</nuxt-link>
		</li>
	</ul>
</template>

<script>
export default {
	name: 'peronList',
	props: {
		auth: Boolean,
	},
	data() {
		return {
			personalList: {
				isAuth: [
					{
						name: 'Выйти',
						url: '/'
					},
					{
						name: 'Личный кабинет',
						url: '/'
					},
					{
						name: 'Мои заказы',
						url: '/'
					},
					{
						name: 'Избранное',
						url: '/'
					},
				],
				isNotAuth: [
					{
						name: 'Войти',
						url: 'login',
					},
					{
						name: 'Регистрация',
						url: 'signUp',
					},
					{
						name: 'Мои заказы',
						url: '/',
					},
					{
						name: 'Избранное',
						url: '/',
					},
				],
			}
		}
	},
	computed: {
		isAuth() {
			return this.auth ? this.personalList.isAuth : this.personalList.isNotAuth;
		},
	}
}
</script>

<style lang="scss">
	@import '@/assets/css/modules/var';

	.personal-list {
		position: absolute;
		top: 100%;
		margin-top: 20px;
		right: 0;
		width: 145px;
		padding: 20px;
		box-sizing: border-box;
		background-color: $black;
		z-index: 100;

		&__item {
			& + & {
				margin-top: 15px;
			}
		}
	}
</style>
