<!-- eslint-disable vue/multi-word-component-names -->
<template>
	<footer class="footer">
		<div class="container">
			<ul class="navbar-list">
				<li class="navbar-item" v-for="link in links" :key="link.alias">
					<RouterLink class="navbar-link" :to="link.url">{{ link.title }}</RouterLink>
				</li>
			</ul>
		</div>
	</footer>
</template>

<script>
	import { linksArray } from '@/_config';

	export default {
		data() {
			return {
				links: linksArray,
			};
		},
	};
</script>

<style lang="scss" scoped></style>
