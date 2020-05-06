<template>
	<div class="sign-up overflow">
		<h1 class="sign-up__title title">Регистрация</h1>
		<div class="sign-up__box box">
			<div
				v-for="(el, index) in inputs"
				:key="index"
				class="sign-up__field">
				<v-input
					@input="checkValid($event, index)"
					:classNames="el.classNames"
					:placeholder="el.placeholder"
					:minlength="el.minlength"
					:maxlength="el.maxlength"
					:type="el.type"
					:errorMsg="el.errorMsg"
					:req="el.req"/>
			</div>
			<div class="sign-up__field mt-20">
				<v-input classNames="sign-up__input" type="checkbox" label="Соглашаюсь с тем то с тем то"/>
			</div>
			<button :class="disabled" class="sign-up__button button button_primary button_rect">Создать аккаунт</button>
			<div class="sign-up__note">
				Уже есть аккаунт? <nuxt-link class="link link_indigo" to="login">Войти</nuxt-link>
			</div>
		</div>
	</div>
</template>

<script>
import vInput from '~/components/input';

export default {
	name: 'signUp',
	data() {
		return {
			inputs: [
				{
					placeholder: 'Имя',
					classNames: 'sign-up__input',
					type: 'text',
					minlength: 5,
					maxlength: 25,
					req: true,
				},
				{
					placeholder: 'E-mail',
					classNames: 'sign-up__input',
					type: 'email',
					minlength: 0,
					maxlength: 0,
					req: true,
				},
				{
					placeholder: 'Телефон',
					classNames: 'sign-up__input',
					type: 'tel',
					minlength: 0,
					maxlength: 0,
					req: false,
				},
				{
					placeholder: 'Пароль',
					classNames: 'sign-up__input',
					type: 'password',
					minlength: 8,
					req: true,
				},
				{
					placeholder: 'Повторите пароль',
					classNames: 'sign-up__input',
					type: 'password',
					minlength: 8,
					req: true,
					errorMsg: 'Пароли должны совподать',
				}
			],
			validArr: [0, 0, 0, 0, 0],
		}
	},
	methods: {
		checkValid(e, index) {
			if (e.valid) {
				this.$set(this.validArr, index, 1);
			} else {
				this.$set(this.validArr, index, 0);
			}
		}
	},
	computed: {
		disabled() {
			return this.validArr.includes(0) ? 'sign-up__button_disabled': '';
		}
	},
	components: {
		vInput,
	}
}
</script>

<style lang="scss">
@import '@/assets/css/modules/var';
@import '@/assets/css/modules/mixin';

.sign-up {
	text-align: center;

	&__title {}

	&__box {
		max-width: 600px;
		@include margin-x(auto);
	}

	&__field {
		margin-top: 15px;

		&:first-child {
			margin-top: 0;
		}
	}

	&__input {
		@include border-bottom($white);
		border-bottom-width: 2px;
		font-size: 1em;

		&::placeholder {
			letter-spacing: .1em;
		}
	}

	&__button {
		margin-top: 20px;
		font-size: 1.5em;
		text-transform: uppercase;
		letter-spacing: .1em;

		&_disabled {
			pointer-events: none;
			border-color: $gray;
			color: $gray;
		}
	}

	&__note {
		margin-top: 15px;
		color: $white;
	}
}
</style>
