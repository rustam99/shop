<template>
	<div class="product" :class="`product_${type}`">
		<template v-if="type === 'default'">
			<div class="product__img">
				<img class="product__image" src="/img/misc/products/2145.png" alt="asd">
			</div>
			<div class="product__desc">
				<div class="product__text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque fugit</div>
				<div class="product__price">123р</div>
			</div>
			<div class="product__controls">
				<button class="product__button button">В корзину</button>
				<button class="product__button button">В избраное</button>
			</div>
		</template>
		<template v-if="type === 'carousel'">
			<div class="product__img">
				<img class="product__image" :src="img" :alt="alt">
			</div>
			<div class="product__desc">
				<h1 class="product__title">{{name}}</h1>
				<div class="product__text">{{shortDesc}}</div>
				<button class="product__button button">Подробнее</button>
			</div>
		</template>
	</div>
</template>

<script>
export default {
	name: 'product',
	props: {
		type: {
			type: String,
			default: 'default',
		},
		img: String,
		alt: String,
		name: String,
		shortDesc: String,
		desc: String,
	}
}
</script>

<style lang="scss">
	@import '@/assets/css/modules/var';

	.product {
		&_default {
			padding: 10px;
			border-radius: .5em;
			background-color: rgba($black, .2);
			overflow: hidden;
			cursor: pointer;

			.product__img {
				margin: 0 auto;
			}

			.product__desc {
				margin-top: 20px;
				text-align: center;
			}

			&:hover {
				box-shadow: 0 0 10px $white;
			}
		}

		&_carousel {
			display: flex;
			justify-content: space-between;
			align-items: center;

			.product__img {
				max-width: 60%;
			}

			.product__desc {
				max-width: 40%;
			}
		}

		&__img {}

		&__image {}

		&__desc {
			color: $white;
		}

		&__title {
			font-size: 48px;
		}

		&__text {
			line-height: 27px;
		}

		&__controls {
			display: flex;
			justify-content: space-between;
		}

		&__button {
			margin-top: 20px;
		}

		&__price {
			margin-top: 10px;
			color: rgba($white, .8);
			font-weight: bold;
		}
}
</style>
