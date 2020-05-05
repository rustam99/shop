<template>
	<div class="shop">
		<div class="Wrapper" @click="rootFunc">
			<v-header
				:isOpenCategories="isOpenCategories"
				:isOpenPersonalList="isOpenPersonalList"
				@change="headerControls"/>
			<div class="content">
				<div class="container">
					<nuxt/>
				</div>
			</div>
		</div>
		<v-footer/>
	</div>
</template>

<script>
import vHeader from '~/components/header';
import vFooter from '~/components/footer';
import {hideCategories, hidePersonalList} from '@/assets/js/header';

export default {
	data() {
		return {
			isOpenCategories: false,
			isOpenPersonalList: false,
		}
	},
	methods: {
		headerControls(e) {
			if (e === 'list') {
				this.isOpenPersonalList = !this.isOpenPersonalList;
			} else if (e === 'categories') {
				this.isOpenCategories = !this.isOpenCategories;
			}
		},
		rootFunc(e) {
			const self = e.target;

			if (this.isOpenCategories) {
				hideCategories.call(this, self);
			}

			if (this.isOpenPersonalList) {
				hidePersonalList.call(this, self);
			}
		}
	},
	components: {
		vHeader,
		vFooter
	}
}
</script>
