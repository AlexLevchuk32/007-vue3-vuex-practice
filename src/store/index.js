import { createStore } from 'vuex';

export const store = createStore({
	state: {
		user: null,
		users: [
			{ id: 1, name: 'Alex', programmer: true },
			{ id: 2, name: 'Kolya', programmer: false },
			{ id: 3, name: 'Dennis', programmer: true },
		],
	},

	mutations: {
		setUser(state, user) {
			console.log('called mutaiton setUser');
			// console.log(user);
			state.user = user;
		},
	},
	actions: {
		setUser({ commit }) {
			setTimeout(() => {
				const fakeUser = {
					id: 12345678,
					name: 'Fake USer',
					admin: false,
				};

				console.log('called action setUser');
				console.log('---');

				commit('setUser', fakeUser);
			}, 2000);
		},
	},

	getters: {
		isUserLogged(state) {
			return state.user ? true : false;
		},
		getUser(state) {
			return state.user;
		},
		getAllUsers(state) {
			return state.users;
		},
		getUsers(state) {
			return state.users.filter((user) => user.programmer);
		},
		getUserById: (state) => (id) => {
			return state.users.find((user) => user.id === id);
		},
		getUsersLength(state, getters) {
			const sufix = 'Кол-во пользователей';
			return `${sufix}: ${getters.getAllUsers.length}`;
		},
	},
});
