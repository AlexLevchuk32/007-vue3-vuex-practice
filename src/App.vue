<!-- eslint-disable vue/no-reserved-component-names -->
<template>
	<div class="wrapper">
		<Header />
		<!-- <Header :title="title" :links="linksArray" /> -->
		<!-- :links - название пропа -->
		<!-- linksArray - то, что мы передаем -->
		<div class="wrapper-content">
			<div class="container">
				<RouterView />
				<!-- Посмотреть весь список параметров Роутера -->
				<!-- <p>{{ this.$router }}</p> -->
			</div>
		</div>
		<Footer />
	</div>
</template>

<script>
	import Header from './components/Header.vue';
	import Footer from './components/Footer.vue';

	export default {
		components: {
			// eslint-disable-next-line vue/no-reserved-component-names
			Header,
			// eslint-disable-next-line vue/no-reserved-component-names
			Footer,
		},
	};
</script>

<style lang="scss" scoped></style>
