import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
	state: {
		editPost: false,
		samplesBlogCards: [
			{ blogTitle: 'Blog Card Title#1', blogCoverPhoto: 'stock-1', blogDate: 'May 1, 2021' },
			{ blogTitle: 'Blog Card Title#2', blogCoverPhoto: 'stock-2', blogDate: 'May 1, 2021' },
			{ blogTitle: 'Blog Card Title#3', blogCoverPhoto: 'stock-3', blogDate: 'May 1, 2021' },
			{ blogTitle: 'Blog Card Title#4', blogCoverPhoto: 'stock-4', blogDate: 'May 1, 2021' },
		],
	},
	mutations: {
		toggleEditPost(state, payload) {
			state.editPost = payload;
		},
	},
	actions: {},
	modules: {},
});
