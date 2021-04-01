import firebase from "firebase";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyArJ3LKhu8XF38zVeuYJ1-eAIrlKEbmsNY",
  authDomain: "fir-clone-f64a5.firebaseapp.com",
  databaseURL: "https://fir-clone-f64a5-default-rtdb.firebaseio.com",
  projectId: "fir-clone-f64a5",
  storageBucket: "fir-clone-f64a5.appspot.com",
  messagingSenderId: "857017958477",
  appId: "1:857017958477:web:17f618a21369c1e5085c04",
  measurementId: "G-QG9KQ1VPSX",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();

const auth = firebase.auth();

export { db, auth };
