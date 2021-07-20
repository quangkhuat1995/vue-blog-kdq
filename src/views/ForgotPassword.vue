<template>
	<div class="reset-password">
		<Modal v-if="modalActive" v-on="closeModal" :modalMessage="modalMessage"/>
		<Loading v-if="isLoading"/>
		<div class="form-wrap">
			<form class="reset">
				<p class="login-register">
					Back to
					<router-link class="router-link" :to="{ name: 'login' }">
						Login
					</router-link>
				</p>
				<h2>Reset Password</h2>
				<p>Forgot your password? Enter your email to reset it</p>
				<div class="inputs">
					<div class="input">
						<input type="text" placeholder="Email" v-model="email">
						<Email class="icon" />
					</div>
				</div>
				<button @click.prevent="resetPassword">Reset</button>
				<div class="angle"></div>
			</form>
			<div class="background"></div>
		</div>
	</div>
</template>

<script>
import Email from '../assets/Icons/envelope-regular.svg'
import Modal from '../components/Modal.vue'
import Loading from '../components/Loading.vue'
import firebase from 'firebase/app'
import 'firebase/auth'

export default {
	name: "ForgotPassword",
	components:{
		Email,
		Modal,
		Loading,
	},
	data() {
		return {
			email: null,
			modalActive : null,
			modalMessage: "",
			isLoading: null
		}
	},
	methods: {
		closeModal() {
			this.modalActive = !this.modalActive
			this.modalMessage = ""
		},
		resetPassword() {
			this.isLoading = true
			firebase.auth()
				.sendPasswordResetEmail(this.email)
				.then(() => {
					this.modalMessage = "Your password has been sent to the email"
					this.modalActive = true
					this.isLoading = false
				})
				.catch((err) => {
					this.modalMessage = err.modalMessage
					this.modalActive = true
					this.isLoading = false
				})
		},
	}
}
</script>

<style lang="scss" scoped>
	.reset-password {
		position: "relative";
		.form-wrap {
			.reset {
				h2 {
					margin-bottom: 8px;
				}
				p {
					text-align: center;
					margin-bottom: 32px;
				}
			}
		}
	}
</style>