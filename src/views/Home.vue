<template>
	<div class="home">
		<BlogPost :post="welcomeScreen" />
		<BlogPost v-for="(post, index) in samplesBlogPosts" :post="post" :key="index"/>
	</div>
</template>

<script>
import BlogPost from '../components/BlogPost.vue'
export default {
	name: "Home",
	components: {
		BlogPost,
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
			samplesBlogCards: [
				{ blogTitle: "Blog Card Title#1", blogCoverPhoto: "stock-1", blogDate: "May 1, 2021" },
				{ blogTitle: "Blog Card Title#2", blogCoverPhoto: "stock-2", blogDate: "May 1, 2021" },
				{ blogTitle: "Blog Card Title#3", blogCoverPhoto: "stock-3", blogDate: "May 1, 2021" },
				{ blogTitle: "Blog Card Title#4", blogCoverPhoto: "stock-4", blogDate: "May 1, 2021" },
			]
		}
	}
};
</script>
