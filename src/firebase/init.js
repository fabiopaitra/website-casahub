import firebase from 'firebase'
import firestore from 'firebase/firestore'

// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyD8kr29A3kX_B6AmguKnoXyw5-Q0Ro5h7g",
  authDomain: "casahub-c3ed1.firebaseapp.com",
  databaseURL: "https://casahub-c3ed1.firebaseio.com",
  projectId: "casahub-c3ed1",
  storageBucket: "casahub-c3ed1.appspot.com",
  messagingSenderId: "435219660741",
  appId: "1:435219660741:web:591773d26a801bd657d5ac",
  measurementId: "G-HCFKJGLXQH"
};
// Initialize Firebase
const firebaseApp = firebase.initializeApp(firebaseConfig);
const fireBaseAnalytics = firebase.analytics();

// export firestore database
export default firebaseApp.firestore()
