<template>
	<footer class="footer">
		<div class="container">
			<ul class="footer__list">
				<li class="footer__item">
					<h1 class="footer__title">Категории</h1>
					<categories/>
				</li>
				<li class="footer__item">
					<h1 class="footer__title">Информация</h1>
					<div class="footer__nav">
						<nuxt-link to="/" class="footer__link link">
							О нас
						</nuxt-link>
						<nuxt-link to="/" class="footer__link link">
							Контакты
						</nuxt-link>
						<nuxt-link to="/" class="footer__link link">
							Обратная связь
						</nuxt-link>
					</div>
				</li>
			</ul>
			<div class="footer__bottom">
				<div class="footer__copyright">
					&copy; Все права защищены
				</div>
				<ul class="social-list">
					<li class="social-list__item">
						<nuxt-link to="/" class="social-icon social-icon_vk"/>
					</li>
					<li class="social-list__item">
						<nuxt-link to="/" class="social-icon social-icon_tg"/>
					</li>
					<li class="social-list__item">
						<nuxt-link to="/" class="social-icon social-icon_in"/>
					</li>
				</ul>
			</div>
		</div>
	</footer>
</template>

<script>
import categories from '~/components/categories';

export default {
	name: 'vFooter',
	components: {
		categories,
	}
}
</script>

<style lang="scss">
	@import '@/assets/css/modules/var';

	.footer {
		padding: 20px 0;
		background-color: $black;

		&__title {
			color: $white;
		}

		&__list {
			display: flex;
			justify-content: space-between;
			flex-wrap: wrap;
			padding: 0;
		}

		&__item {}

		&__nav {
			display: flex;
			flex-direction: column;
		}

		&__link {
			& + & {
				margin-top: 15px;
			}
		}

		&__bottom {
			display: flex;
			justify-content: space-between;
			margin-top: 30px;
			padding: 20px 0;
			color: $white;
			border-top: 2px solid $deep-orange;
		}
	}
</style>
