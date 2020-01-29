import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
	apiKey: "AIzaSyCV6Ef8lBzeEybVIghUoQ9qgIzOoMpm7rI",
	authDomain: "warisa-db.firebaseapp.com",
	databaseURL: "https://warisa-db.firebaseio.com",
	projectId: "warisa-db",
	storageBucket: "warisa-db.appspot.com",
	messagingSenderId: "694030800692",
	appId: "1:694030800692:web:bce312fa571a0e665d3761",
	measurementId: "G-Y8CTQRG847"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
