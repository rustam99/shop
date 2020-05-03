<template>
	<div class="input">
		<label
			v-if="label"
			class="input__label"
			for="input">
			{{label}}
		</label>
		<input
			:class="styles.pr"
			class="input__enter"
			id="input"
			type="text">
		<div class="input__icon" :class="icon"></div>
	</div>
</template>

<script>
export default {
	name: 'vInput',
	props: {
		label: String,
		icon: String,
	},
	computed: {
		styles() {
			const styles = {
				pr: 'input__enter_pr',
			}

			return this.icon ? styles : '';
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
			margin-right: 10px;
		}

		&__enter {
			width: calc(100% - 2px);
			padding: 10px 20px;
			border: 1px solid $white;
			box-sizing: border-box;
			color: $white;
			background-color: transparent;
			outline: none;

			&_pr {
				padding-right: 50px;
			}
		}

		&__icon {
			position: absolute;
			right: 20px;
			top: 50%;
			transform: translateY(-50%);

		}
}

</style>
