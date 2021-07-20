<template>
	<div class="home">
		<BlogPost :post="welcomeScreen" />
		<BlogPost v-for="(post, index) in samplesBlogPosts" :post="post" :key="index"/>
		<div class="blog-card-wrap">
			<div>View More Recent Blogs</div>
			<div class="blog-cards">
				<BlogCard v-for="(post, index) in samplesBlogCards" :key="index" :post="post"/>
			</div>
		</div>
		<div class="updates">
			<div class="container">
				<h2>Never miss a post. Register to your free account today</h2>
				<router-link class="router-button" to="#">
					Register for Blog-KDQ <Arrow class="arrow arrow-light"/>
				</router-link>
			</div>
		</div>
	</div>
</template>

<script>
import BlogPost from '../components/BlogPost.vue'
import BlogCard from '../components/BlogCard.vue'
import Arrow from '../assets/Icons/arrow-right-light.svg'
export default {
	name: "Home",
	components: {
		BlogPost,
		BlogCard,
		Arrow,
	},
	data() {
		return {
			welcomeScreen: {
				title: "Welcome!",
				blogPost:
					"Weekly blog articles with all things programming including HTML, CSS, JavaScript and more. Register today to never miss a post!",
				welcomeScreen: true,
				photo: "coding",
			},
			samplesBlogPosts : [
				{
					title: "This is a Filter Title",
					blogHTML: "This is a filter blog post title!",
					blogCoverPhoto: "beautiful-stories",
				},
				{
					title: "This is a Filter Title",
					blogHTML: "This is a filter blog post title!",
					blogCoverPhoto: "beautiful-stories",
				}
			],
		}
	},
	computed: {
		samplesBlogCards() {
			return this.$store.state.samplesBlogCards
		}
	}
};
</script>

<style lang="scss" scoped>
	.blog-card-wrap {
		font-weight: 300;
		font-style: 28px;
		margin-bottom: 32px;
	}

	.updates {
		.container {
			padding: 100px 25px;
			display: flex;
			flex-direction: column;
			align-items: center;
			@media (min-width: 800px) {
				padding: 125px 25px;
				flex-direction: row;
			}

			.router-button {
				display: flex;
				font-style: 14px;
				text-decoration: none;
				@media (min-width: 800px) {
					margin-left: auto;
				}
			}

			h2 {
				font-weight: 500;
				font-style: 32px;
				max-width: 425px;
				width: 100%;
				text-align: center;
				text-transform: uppercase;
				@media (min-width: 800px) {
					text-align: initial;
					font-style: 40px;
				}
			}
		}
	}
</style>
