<template>
	<div class="login overflow">
		<h1 class="login__title title">Вход</h1>
		<div class="login__box box">
			<div class="login__form">
				<h2 class="login__subtitle">Вход в аккаунт</h2>
				<div class="login__field">
					<v-input mod="bordered" placeholder="Email" icon="login-icon login-icon_letter"/>
				</div>
				<div class="login__field">
					<v-input mod="bordered" placeholder="Password" icon="login-icon login-icon_lock_closedr"/>
				</div>
				<div class="login__field">
					<v-input type="checkbox" label="Запомнить логин"/>
				</div>
				<div class="login__field">
					<button class="login__button button button_primary">Войти</button>
				</div>
				<div class="login__field">
					<span class="mr-10">Забыли</span>
					<nuxt-link class="link link_indigo" to="/">Логин</nuxt-link>
					<span class="separator">/</span>
					<nuxt-link class="link link_indigo" to="/">Пароли</nuxt-link>
				</div>
			</div>
			<div class="login__info">
				<div class="login__info-block">
					<div class="login__icon">
						<div class="login-icon login-icon_key"></div>
					</div>
					<div class="login__desc">
						<div class="login__text">Нету аккаунта</div>
						<nuxt-link class="login__link link link_indigo" to="signUp">Зарегистрируйтесь</nuxt-link>
					</div>
				</div>
				<div class="login__info-block">
					<div class="login__icon">
						<div class="login-icon login-icon_lock_opened"></div>
					</div>
					<div class="login__desc">
						<div class="login__text">Забыли аккаунт</div>
						<nuxt-link class="link link_indigo" to="/">Логин</nuxt-link>
						<span class="separator">/</span>
						<nuxt-link class="link link_indigo" to="/">Пароли</nuxt-link>
					</div>
				</div>
				<div class="login__info-block">
					<div class="login__icon">
						<div class="login-icon login-icon_circle"></div>
					</div>
					<div class="login__desc">
						<div class="login__text">Есть вопросы</div>
						<nuxt-link class="login__link link link_indigo" to="/">Сообщите нам</nuxt-link>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
import vInput from '~/components/input';

export default {
	name: 'login',
	components: {
		vInput,
	}
}
</script>

<style lang="scss">
@import '@/assets/css/modules/var';

.login {
	text-align: center;

	&__title {}

	&__box {
		display: flex;
		justify-content: space-between;
		text-align: left;
		position: relative;

		&:after {
			content: '';
			position: absolute;
			top: 0;
			bottom: 0;
			left: 50%;
			width: 1px;
			background-color: $white;
		}
	}

	&__form {
		width: 40%;
	}

	&__subtitle {
		margin-top: 0;
		color: $white;
	}

	&__field {
		max-width: 400px;
		color: $white;

		& + & {
			margin-top: 20px;
		}
	}

	&__button {}

	&__info {
		width: 40%;
	}

	&__info-block {
		display: flex;
		align-items: center;

		& + & {
			margin-top: 20px;
		}
	}

	&__text {
		color: $white;
		margin-bottom: 5px;
	}

	&__link {}

	&__icon {
		display: flex;
		justify-content: center;
		align-items: center;
		width: 30px;
		height: 30px;
		margin-right: 15px;
		border-radius: 50%;
		background-color: $black;
	}
}
</style>
