<template>
	<div class="shop">
		<div class="Wrapper">
			<v-header/>
			<div class="carousel-block">
				<carousel
					:perPage="1"
					class="carousel">
					<slide v-for="(el, index) in getProducts" :key="index">
						<product
							type="carousel"
							:img="el.img"
							:alt="el.alt"
							:name="el.name"
							:shortDesc="el.shortDesc"/>
					</slide>
				</carousel>
			</div>
			<nuxt/>
		</div>
		<v-footer/>
	</div>
</template>

<script>
import vHeader from '~/components/header';
import product from '~/components/product';
import vFooter from '~/components/footer';

export default {
	name: 'indexPage',
	computed: {
		getProducts() {
			return this.$store.state.products.products;
		}
	},
	components: {
		vHeader,
		product,
		vFooter,
	}
}
</script>

<style lang="scss">
	@import '@/assets/css/modules/var';

	.carousel-block {
		max-width: 1200px;
		margin: 30px auto;
		padding: 20px;
		box-sizing: border-box;
		background-color: rgba($black, .2);
		border-radius: 4em 4em 10em 10em;
		box-shadow: 0 0 10px $white;
		animation: box-shadow 1s linear infinite alternate;
	}

	@keyframes box-shadow {
		from {
			box-shadow: 0 0 10px $white;
		}

		to {
			box-shadow: 0 0 2px $white;
		}
	}

	.VueCarousel-dot {
		background-color: transparent !important;
		position: relative;

		&:after {
			content: '';
			position: absolute;
			top: 50%;
			left: 50%;
			transform: translate(-50%, -50%);
			width: 10px;
			height: 10px;
			border-radius: 50%;
			background-color: rgba($white, .8);
		}

		&:hover {
			&:after {
				background-color: rgba($white, .5);
			}
		}

		&:focus {
			outline: none !important;
		}

		&--active {
			&:after {
				width: 14px;
				height: 14px;
				border: 2px solid $white;
				box-sizing: border-box;
				background-color: transparent;
			}
		}
	}
</style>
