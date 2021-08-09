import Vue from 'vue';
import VueRouter from 'vue-router';
import firebase from 'firebase/app';
import 'firebase/auth';
import Home from '../views/Home.vue';
import Blogs from '../views/Blogs.vue';
import Login from '../views/Login.vue';
import Register from '../views/Register.vue';
import ForgotPassword from '../views/ForgotPassword.vue';
import Profile from '../views/Profile.vue';
import Admin from '../views/Admin.vue';
import CreatePost from '../views/CreatePost.vue';
import BlogPreview from '../views/BlogPreview.vue';
import ViewBlog from '../views/ViewBlog.vue';
import EditBlog from '../views/EditBlog.vue';

Vue.use(VueRouter);

const routes = [
	{
		path: '/',
		name: 'Home',
		component: Home,
		meta: {
			title: 'Home',
			requiresAuth: false,
		},
	},
	{
		path: '/blogs',
		name: 'Blogs',
		component: Blogs,
		meta: {
			title: 'Blogs',
			requiresAuth: false,
		},
	},
	{
		path: '/login',
		name: 'Login',
		component: Login,
		meta: {
			title: 'Login',
			requiresAuth: false,
		},
	},
	{
		path: '/register',
		name: 'Register',
		component: Register,
		meta: {
			title: 'Register',
			requiresAuth: false,
		},
	},
	{
		path: '/forgot-password',
		name: 'ForgotPassword',
		component: ForgotPassword,
		meta: {
			title: 'ForgotPassword',
			requiresAuth: false,
		},
	},
	{
		path: '/profile',
		name: 'Profile',
		component: Profile,
		meta: {
			title: 'Profile',
			requiresAuth: true,
		},
	},
	{
		path: '/admin',
		name: 'Admin',
		component: Admin,
		meta: {
			title: 'Admin',
			requiresAuth: true,
			requiresAdmin: true,
		},
	},
	{
		path: '/create-post',
		name: 'CreatePost',
		component: CreatePost,
		meta: {
			title: 'Create Post',
			requiresAuth: true,
			requiresAdmin: true,
		},
	},
	{
		path: '/blog-preview',
		name: 'BlogPreview',
		component: BlogPreview,
		meta: {
			title: 'Preview',
			requiresAuth: true,
			requiresAdmin: true,
		},
	},
	{
		path: '/view-blog/:blogId',
		name: 'ViewBlog',
		component: ViewBlog,
		meta: {
			title: 'View Blog',
			requiresAuth: false,
		},
	},
	{
		path: '/edit-blog/:blogId',
		name: 'EditBlog',
		component: EditBlog,
		meta: {
			title: 'Edit Blog',
			requiresAuth: true,
			requiresAdmin: true,
		},
	},
];

const router = new VueRouter({
	mode: 'history',
	base: process.env.BASE_URL,
	routes,
});

router.beforeEach((to, from, next) => {
	document.title = `${to.meta.title} | KDQ BLog`;
	next();
});
router.beforeEach(async (to, from, next) => {
	let user = firebase.auth().currentUser;
	// let admin = null;
	if (user) {
		let token = await user.getIdTokenResult();
		console.log('🚀 token', token);
		// admin = token.claims.admin;
	}
	return next();

	// if (to.matched.some(res => res.meta.requiresAuth)) {
	// 	if (user) {
	// 		if (to.matched.some(res => res.meta.requiresAdmin)) {
	// 			if (admin) {
	// 				return next();
	// 			}
	// 			return next({ name: 'Home' });
	// 		}
	// 		return next();
	// 	}
	// 	return next({ name: 'Home' });
	// }
	// return next();
});

export default router;
