import firebase from "firebase";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCzc9H7j7Kjy5znOqqS1sh3XYnwnDdUgKk",
    authDomain: "facebook-clone-118d2.firebaseapp.com",
    projectId: "facebook-clone-118d2",
    storageBucket: "facebook-clone-118d2.appspot.com",
    messagingSenderId: "738808842092",
    appId: "1:738808842092:web:dbafbf100c418c23e25549",
    measurementId: "G-JS85555XSG"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();
  const provider = new firebase.auth.GoogleAuthProvider();

  export { auth, provider };
  export default db;