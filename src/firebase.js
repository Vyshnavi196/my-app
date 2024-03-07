
import firebase from "firebase/compat/app"
import 'firebase/compat/firestore';
import 'firebase/compat/auth';


const firebaseConfig = {
    apiKey: "AIzaSyA5zJcTVpRnxWsyFShaBVhT4BhgNQmoUnk",
    authDomain: "auth-90c54.firebaseapp.com",
    projectId: "auth-90c54",
    storageBucket: "auth-90c54.appspot.com",
    messagingSenderId: "541315298305",
    appId: "1:541315298305:web:2548c4fc525d5e3522bc00"
  };
  
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  const db = firebase.firestore();
  const auth = firebase.auth();

  export {auth};
  export default db;