import Vue from 'vue';
import Vuex from 'vuex';
import firebase from 'firebase/app';
import 'firebase/auth';
import db from '../firebase/firebaseInit';

Vue.use(Vuex);

export default new Vuex.Store({
	state: {
		blogHTML: 'Write your blog title here...',
		blogTitle: '',
		blogPhotoName: '',
		blogPhotoFileURL: null,
		blogPhotoPreview: false,
		editPost: false,
		samplesBlogCards: [
			{ blogTitle: 'Blog Card Title#1', blogCoverPhoto: 'stock-1', blogDate: 'May 1, 2021' },
			{ blogTitle: 'Blog Card Title#2', blogCoverPhoto: 'stock-2', blogDate: 'May 1, 2021' },
			{ blogTitle: 'Blog Card Title#3', blogCoverPhoto: 'stock-3', blogDate: 'May 1, 2021' },
			{ blogTitle: 'Blog Card Title#4', blogCoverPhoto: 'stock-4', blogDate: 'May 1, 2021' },
		],
		user: null,
		profileAdmin: null,
		profileEmail: null,
		profileFirstName: null,
		profileLastName: null,
		profileUsername: null,
		profileId: null,
		profileInitials: null,
	},
	mutations: {
		newBlogPost(state, payload) {
			state.blogHTML = payload;
		},
		updateBlogTitle(state, payload) {
			state.blogTitle = payload;
		},
		fileNameChange(state, payload) {
			state.blogPhotoName = payload;
		},
		createFileURL(state, payload) {
			state.blogPhotoFileURL = payload;
		},
		openPhotoPreview(state) {
			state.blogPhotoPreview = !state.blogPhotoPreview;
		},
		toggleEditPost(state, payload) {
			state.editPost = payload;
		},
		updateUser(state, payload) {
			state.user = payload;
		},
		setProfileInfo(state, payload) {
			state.profileId = payload.id;
			state.profileEmail = payload.data().email;
			state.profileFirstName = payload.data().firstName;
			state.profileLastName = payload.data().lastName;
			state.profileUsername = payload.data().username;
		},
		setProfileInitials(state) {
			state.profileInitials =
				state.profileFirstName.match(/(\b\S)?/g).join('') + state.profileLastName.match(/(\b\S)?/g).join('');
		},
		changeFirstName(state, payload) {
			state.profileFirstName = payload;
		},
		changeLastName(state, payload) {
			state.profileLastName = payload;
		},
		changeUsername(state, payload) {
			state.profileUsername = payload;
		},
	},
	actions: {
		async getCurrentUser({ commit }) {
			const dataBase = await db.collection('users').doc(firebase.auth().currentUser.uid);
			const dbResults = await dataBase.get();
			commit('setProfileInfo', dbResults);
			commit('setProfileInitials');
		},
		async updateUserSettings({ commit, state }) {
			const dataBase = await db.collection('users').doc(state.profileId);
			await dataBase.update({
				firstName: state.profileFirstName,
				lastName: state.profileLastName,
				username: state.profileUsername,
			});
			commit('setProfileInitials');
		},
	},
	modules: {},
});
