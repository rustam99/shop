<template>
	<header class="header">
		<div class="container">
			<div class="header__box">
				<nuxt-link to="/" exact class="logo">
					<img src="/img/interface/logo.png" alt="logo">
				</nuxt-link>
				<div class="header__nav">
					<div
						@click="toggleCategories"
						:class="isArrowActive"
						class="header__tab header__tab_indent arrow js-toggleCategories">
						Категории
					</div>
					<nuxt-link to="/we" active-class="header__link_active" class="header__link">О нас</nuxt-link>
					<nuxt-link to="/e" active-class="header__link_active" class="header__link">Контакты</nuxt-link>
				</div>
				<v-input class="header__search" :icon="icons.search"/>
				<nav class="header__nav">
					<div
						@click="togglePersonalList"
						class="header__tab icon icon_personal js-toggleList">
					</div>
					<nuxt-link to="/" class="header__link header__link_relative icon icon_favorites">
						<div class="header__amount">1</div>
					</nuxt-link>
					<nuxt-link to="/" class="header__link header__link_relative icon icon_cart">
						<div class="header__amount">23</div>
					</nuxt-link>
				</nav>
				<transition name="fade">
					<person-list v-if="isOpenPersonalList" :auth="isAuth"/>
				</transition>
				<transition name="fade">
					<categories v-if="isOpenCategories" type="click"/>
				</transition>
			</div>
		</div>
	</header>
</template>

<script>
import categories from '@/components/categories';
import personList from '@/components/person_list';
import vInput from '@/components/input';

export default {
	name: 'vHeader',
	props: {
		isOpenCategories: Boolean,
		isOpenPersonalList: Boolean,
	},
	data() {
		return {
			isAuth: false,
			icons: {
				search: {
					cursor: 'pointer',
					icon: 'icon icon_search'
				}
			}
		}
	},
	methods: {
		toggleCategories() {
			this.$emit('change', 'categories');
		},
		togglePersonalList() {
			this.$emit('change', 'list');
		}
	},
	computed: {
		isArrowActive() {
			return this.isOpenCategories ? 'arrow_active': '';
		}
	},
	components: {
		categories,
		personList,
		vInput,
	}
}
</script>

<style lang="scss">
	@import '@/assets/css/modules/var';

	.header {
		padding: 20px 0;

		&__box {
			display: flex;
			justify-content: space-between;
			align-items: center;
			position: relative;
		}

		&__nav {
			align-self: flex-end;
		}

		&__tab {
			cursor: pointer;

			&_indent {
				margin-right: 20px;
			}
		}

		&__link,
		&__tab {
			display: inline-block;
			vertical-align: middle;
			margin-left: 30px;
			color: $white;
			text-transform: uppercase;

			&:first-child {
				margin-left: 0;
			}

			&:hover {
				color: $blue;

				.header__amount {
					border-color: $blue;
				}
			}

			&_active {
				color: $light-blue;
			}

			&_relative {
				position: relative;
			}
		}

		&__search {
			width: 35%;
		}

		&__amount {
			display: flex;
			justify-content: center;
			align-items: center;
			position: absolute;
			bottom: 100%;
			left: 100%;
			width: 25px;
			height: 25px;
			padding: 5px;
			box-sizing: border-box;
			border: 2px solid $white;
			border-radius: 50%;
			font-size: .8em;
		}
	}

	.fade-enter-active,
	.fade-leave-active {
		transition: all .2s;
	}

	.fade-enter,
	.fade-leave-to {
		opacity: 0;
	}
</style>
