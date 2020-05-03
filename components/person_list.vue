<template>
	<ul class="personal-list">
		<li
			v-for="(el, index) in isAuth"
			:key="index"
			class="personal-list__item">
			<nuxt-link to="login" class="link">
				{{el}}
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
					'Выйти',
					'Личный кабинет',
					'Мои заказы',
					'Избранное'
				],
				isNotAuth: [
					'Войти',
					'Регистрация',
					'Мои заказы',
					'Избранное'
				],
			}
		}
	},
	computed: {
		isAuth() {
			return this.auth ? this.personalList.isAuth : this.personalList.isNotAuth;
		}
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
