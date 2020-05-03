<template>
	<ul class="product-list">
		<li
			v-for="(el, index) in list"
			:key="index"
			class="product-list__item">
			<product/>
		</li>
	</ul>
</template>

<script>
import product from '~/components/product';

export default {
	name: 'productList',
	props: {
		list: Array,
	},
	components: {
		product,
	}
}
</script>

<style lang="scss">
	.product-list {
		display: flex;
		justify-content: center;
		flex-wrap: wrap;
		margin: 0 -10px;

		&__item {
			flex-basis: 285px;
			margin: 0 10px 10px;
		}
}
</style>
