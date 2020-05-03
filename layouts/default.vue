<template>
	<div class="shop">
		<div class="Wrapper">
			<v-header/>
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

export default {
	components: {
		vHeader,
		vFooter
	}
}
</script>
