<template>
	<div class="content">
		<div class="container">
			<div class="popular-items">
				<h1 class="popular-items__title">Популярные товары</h1>
				<product-list :list="getProducts"/>
			</div>
			<div class="new-items">
				<h1 class="new-items__title">Новые товары</h1>
				<product-list :list="getProducts"/>
			</div>
		</div>
	</div>
</template>

<script>
import productList from '~/components/product_list';

export default {
	name: 'indexPage',
	layout: 'indexPage',
	computed: {
		getProducts() {
			return this.$store.state.products.products;
		}
	},
	components: {
		productList,
	}
}
</script>

<style lang="scss">
	@import '@/assets/css/modules/var';

	.popular-items,
	.new-items {
		padding: 20px 0;

		&__title {
			text-align: center;
			color: $black;
		}
	}
</style>
