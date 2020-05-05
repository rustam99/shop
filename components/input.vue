<template>
	<div class="input">
		<template v-if="type === 'default'">
			<label
				v-if="label"
				class="input__label input__label_mr"
				for="input">
				{{label}}
			</label>
			<input
				:placeholder="placeholder"
				:class="[styles.pr, styles.br]"
				class="input__enter"
				id="input"
				type="text">
			<div class="input__icon" :class="iconStyle"></div>
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
		type: {
			type: String,
			default: 'default',
		},
		mod: String,
		label: String,
		placeholder: String,
		icon: {
			type: [Object, String],
		},
	},
	computed: {
		styles() {
			const styles = {};

			if (this.icon) styles.pr = 'input__enter_pr';
			if (this.mod === 'bordered') styles.br = 'input__enter_bordered'

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
		}
	}
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

			&_bordered {
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
	}

	input[type="checkbox"]:checked + .input__checkbox:after {
		display: block;
	}
</style>
