import firebase from 'firebase/app'
import 'firebase/firestore'

const firebaseConfig = {
	apiKey: process.env.API_KEY,
	authDomain: process.env.AUTH_DOMAIN,
	projectId: process.env.PROJECT_ID,
	storageBucket: process.env.STORAGE_BUCKET,
	messagingSenderId: process.env.MESSAGING_SENDER_ID,
	appId: process.env.APP_ID,
};

const firebaseApp = firebase.initializeApp(firebaseConfig)
export const timestamp = firebase.firestore.FieldValue.serverTimestamp

export default firebaseApp.firestore()