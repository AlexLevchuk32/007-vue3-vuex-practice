<!-- eslint-disable vue/multi-word-component-names -->
<template>
	<header class="navbar">
		<div class="container">
			<div class="navbar-content">
				<RouterLink class="navbar-logo" to="/">{{ title }}</RouterLink>
				<ul class="navbar-list">
					<li class="navbar-item" v-for="link in links" :key="link.alias">
						<RouterLink class="navbar-link" :to="link.url">{{ link.title }}</RouterLink>
					</li>
				</ul>
			</div>
		</div>
	</header>
</template>

<script>
	import { app, linksArray } from '@/_config';

	export default {
		data() {
			return {
				title: app.title,
				links: linksArray,
			};
		},
	};
</script>

<style lang="scss" scoped></style>
