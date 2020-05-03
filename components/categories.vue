<template>
	<div class="categories" :class="isTypeClick">
		<ul class="categories__list">
			<li
				v-for="(el, index) in getCategories"
				:key="index"
				class="categories__item">
				<nuxt-link
					to="/"
					class="link">
					{{el.name}}
				</nuxt-link>
			</li>
		</ul>
	</div>
</template>

<script>
export default {
	name: 'categories',
	props: {
		type: {
			type: String,
			default: 'default',
		}
	},
	computed: {
		getCategories() {
			return this.$store.state.categories.categories;
		},
		isTypeClick() {
			return this.type === 'click' ? 'categories_absolute': '';
		}
	}
}
</script>

<style lang="scss">
	@import '@/assets/css/modules/var';

	.categories {
		&__list {
			display: flex;
			flex-wrap: wrap;
			align-items: flex-start;
			max-width: 800px;
			padding: 0;
			margin: 0 -15px;
		}

		&__item {
			margin: 0 15px 15px;
			flex-basis: 235px;
		}

		&_absolute {
			position: absolute;
			top: 100%;
			margin-top: 20px;
			width: 100%;
			padding: 20px;
			background-color: $black;
			z-index: 100;

			.categories__list {
				max-width: none;
			}
		}
}
</style>
