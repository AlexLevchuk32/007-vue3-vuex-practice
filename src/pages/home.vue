<!-- eslint-disable vue/multi-word-component-names -->

<script>
	export default {
		data() {
			return {
				userId: 1,
			};
		},
		methods: {
			handelLoginClick() {
				this.$store.dispatch('setUser');
			},
		},
		computed: {
			isUserLogged() {
				return this.$store.getters.isUserLogged;
			},
			user() {
				return this.$store.getters.getUser;
			},
			getAllUsers() {
				return this.$store.getters.getAllUsers;
			},
			getUsersLength() {
				return this.$store.getters.getUsersLength;
			},
		},
	};
</script>

<template>
	<br />
	<br />

	<div v-if="isUserLogged">User is logged {{ user }}</div>
	<div v-else>
		<button @click="handelLoginClick" class="btn btnPrimary">Login</button>
	</div>

	<br />
	<br />

	<h1>Все пользователи</h1>
	<ul>
		<li v-for="user in getAllUsers" :key="user.id">
			<p>{{ user.id }}</p>
			<p>{{ user.name }}</p>
			<p>{{ user.admin ? 'programmer' : 'admin' }}</p>
		</li>
	</ul>

	<p>{{ getUsersLength }}</p>
</template>
