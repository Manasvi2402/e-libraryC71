import firebase from 'firebase';
require("@firebase/firestore")
const firebaseConfig = {
    apiKey: "AIzaSyA4w16Gzavzd-HqGsAsa6J6S9Thc2W5YD8",
    authDomain: "e-library-eab89.firebaseapp.com",
    databaseURL: "https://e-library-eab89-default-rtdb.firebaseio.com",
    projectId: "e-library-eab89",
    storageBucket: "e-library-eab89.appspot.com",
    messagingSenderId: "275423707166",
    appId: "1:275423707166:web:0e5cb94d06cde7ff1dae0f"
  };
  firebase.initializeApp(firebaseConfig);
  export default firebase.firestore();