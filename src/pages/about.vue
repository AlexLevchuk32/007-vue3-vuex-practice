<!-- eslint-disable vue/multi-word-component-names -->
<script>
	export default {
		data() {
			return {
				userId: 1,
			};
		},
		computed: {
			getUsers() {
				return this.$store.getters.getUsers;
			},
			getUsersLength() {
				return this.$store.getters.getUsersLength;
			},
			getUserById() {
				return this.$store.getters.getUserById(this.userId) || 'user not found';
			},
		},
	};
</script>

<template>
	<h1>Программисты</h1>
	<ul>
		<li v-for="user in getUsers" :key="user.id">
			<p>{{ user.id }}</p>
			<p>{{ user.name }}</p>
			<p>{{ user.admin ? 'programmer' : 'admin' }}</p>
		</li>
	</ul>

	<br />
	<br />
	<p>{{ getUsersLength }}</p>

	<br />
	<br />
	<p>Введите id пользователя</p>
	<input v-model="userId" type="number" />
	<h3>Пользователь с id = {{ userId }} {{ getUserById }}</h3>
</template>
