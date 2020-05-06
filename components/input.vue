<style>
/* Инструкция

	Режимы использования:
		1) type -> указывает тип инпута, по умолчанию default (text), существуют:
			1.1) * кроме checkbox, radio
			1.2) checkbox
		2) mod -> применяет готовые стили:
			2.2) radiused (border-radius)
		3) placeholder -> делает placeholder
		4) classNames -> применяет кастомные классы на инпут
		5) label -> создает label, в обыных инпутах слева, в чекбоксе справа
		6) icon -> создает див под иконку, нужно вписать класс с бэграундом:
			6.1) просто передать строку с классом
			6.2) передать объект, где под cursor - вид курсора (будет эмит нажатия), icon - класс иконки
		7) req -> создает звездочку (обязательный для заполнения)
		8) minlength и maxlength создает правила для валидации:
			8.1 для email и tel своя валидация
		9) errorMsg -> создает кастомное сообщение об ошибке
*/
</style>

<template>
	<div class="input" :class="required">
		<template v-if="type !== 'checkbox'">
			<label
				v-if="label"
				class="input__label input__label_mr"
				for="input">
				{{label}}
			</label>
			<input
				@input="keyUp"
				@blur="checkValidity"
				:placeholder="placeholder"
				:class="[styles.pr, styles.rd, classNames]"
				:type="type || 'text'"
				:required="required"
				class="input__enter"
				id="input">
			<div v-if="icon" class="input__icon" :class="iconStyle"></div>
			<transition name="slide">
				<div v-if="invalidText" class="input__note">{{invalidText}}</div>
			</transition>
		</template>
		<template v-else-if="type === 'checkbox'">
			<label class="input__row cursor-pointer">
				<input class="hidden" type="checkbox">
				<div class="input__checkbox"></div>
				<div class="input__label input__label_ml">{{label}}</div>
			</label>
		</template>
	</div>
</template>

<script>
export default {
	name: 'vInput',
	props: {
		type: String,
		mod: String,
		placeholder: String,
		classNames: String,
		label: String,
		icon: {
			type: [Object, String],
		},
		req: {
			type: Boolean,
			default: false,
		},
		minlength: Number,
		maxlength: Number,
		errorMsg: String,
	},
	data() {
		return {
			invalidText: '',
			valid: false,
		}
	},
	methods: {
		keyUp(e) {
			const self = e.target;
			const type = self.type;

			if (type !== 'email' && type !== 'tel' &&
				!checkText(this.minlength, this.maxlength, self.value, this.errorMsg)) {
				if (this.minlength || this.maxlength) {
					this.invalidText = '';
					this.valid = true;
				}
			} else if (type !== 'email' && type !== 'tel' && checkText(this.minlength, this.maxlength, self.value, this.errorMsg)) {
				this.valid = false;

				if (!self.value.length) {
					this.invalidText = '';
				}
			}

			if (type === 'email' && checkEmail(self.value)) {
				this.invalidText = '';
				this.valid = true;
			} else if (type === 'email' && !checkEmail(self.value)) {
				this.valid = false;

				if (!self.value.length) {
					this.invalidText = '';
				}
			}

			if (type === 'tel' && checkPhone(self.value)) {
				this.invalidText = '';
				this.valid = true;
			} else if (type === 'tel' && !checkPhone(self.value)) {
				this.valid = false;

				if (!self.value.length) {
					this.invalidText = '';
				}
			}

			this.$emit('input', {
				val: self.value,
				valid: this.valid
			});
		},
		checkValidity(e) {
			const self = e.target;
			const type = self.type;

			if (type !== 'email' && type !== 'tel') {
				if (this.minlength || this.maxlength) {
					const text = checkText(this.minlength, this.maxlength, self.value, this.errorMsg);

					if (text && self.value.length) {
						this.invalidText = text;
					}
				}
			} else if (type === 'email' && !checkEmail(self.value) && self.value.length) {
				this.invalidText = this.errorMsg || 'Введите верный email';
			} else if (type === 'tel' && !checkPhone(self.value) && self.value.length) {
				this.invalidText = this.errorMsg || 'Введите телефон в нужном формате +7 888 88 88';
			}
		}
	},
	computed: {
		styles() {
			const styles = {};

			if (this.icon) styles.pr = 'input__enter_pr';
			if (this.mod === 'radiused') styles.rd = 'input__enter_radiused';

			return styles;
		},
		iconStyle() {
			const icon = [];

			if (typeof this.icon === 'string') {
				icon.push(this.icon);
			} else if (typeof this.icon === 'object') {
				if (!this.icon.cursor) {
					icon.push('input__icon_default');
				} else {
					icon.push('input__icon_' + this.icon.cursor);
				}

				icon.push(this.icon.icon);
			}

			return icon;
		},
		required() {
			return this.req ? 'input_required': '';
		},
	}
}

function checkText(min, max, val, msg) {
	if (min && max) {
		if (val.length < min || val.length > max) {
			return msg || `Введите количетсво символов от ${min} до ${max}`;
		}
	} else if (min) {
		if (val.length < min) {
			return msg || `Введите количетсво символов от ${min}`;
		}
	} else if (max) {
		if (val.length > max) {
			return msg || `Введите количетсво символов до ${max}`;
		}
	}

	return false;
}

function checkEmail(val) {
	const re = /\S+@\S+\.\S+/;

	return re.test(val);
}

function checkPhone(val) {
	const re = /^(\+7|7|8)?[\s\-]?\(?[489][0-9]{2}\)?[\s\-]?[0-9]{3}[\s\-]?[0-9]{2}[\s\-]?[0-9]{2}$/;

	return re.test(val);
}
</script>

<style lang="scss">
	@import '@/assets/css/modules/var';

	.input {
		display: flex;
		align-items: center;
		position: relative;

		&__label {
			color: $white;

			&_mr {
				margin-right: 10px;
			}

			&_ml {
				margin-left: 10px;
			}
		}

		&__enter {
			width: 100%;
			padding: 10px 20px;
			border: 1px solid $white;
			box-sizing: border-box;
			font-size: .9em;
			color: $white;
			background-color: transparent;
			outline: none;

			&_pr {
				padding-right: 50px;
			}

			&_radiused {
				border-radius: 2em;
			}

			&::placeholder {
				color: $dark-gray;
			}
		}

		&__icon {
			position: absolute;
			right: 20px;
			top: 50%;
			transform: translateY(-50%);

			&_default {
				cursor: default;
			}

			&_pointer {
				cursor: pointer;
			}
		}

		&__row {
			display: flex;
			align-items: center;
		}

		&__checkbox {
			width: 16px;
			height: 16px;
			border: 1px solid $white;
			position: relative;

			&:after {
				content: '';
				position: absolute;
				top: 50%;
				left: 50%;
				transform: translate(-50%, -50%);
				width: 50%;
				height: 50%;
				background-color: $white;
				display: none;
			}
		}

		&__note {
			position: absolute;
			top: 100%;
			left: 0;
			width: 100%;
			padding: 10px 20px;
			box-sizing: border-box;
			text-align: center;
			color: $white;
			border-radius: 0 0 1em 1em;
			background-color: rgba($black, .8);
			z-index: 100;
		}

		&_required {
			position: relative;

			&:before {
				content: '*';
				position: absolute;
				top: 50%;
				left: 0;
				transform: translateY(-50%);
				color: $dark-gray;
			}
		}
	}

	input[type="checkbox"]:checked + .input__checkbox:after {
		display: block;
	}

	.slide-enter-active,
	.slide-leave-active {
		transition: all .3s;
	}

	.slide-enter {
		transform: translateY(-10%);
	}

	.slide-leave-to {
		transform: translateY(0);
	}

	.slide-enter,
	.slide-leave-to {
		opacity: 0;
	}
</style>
