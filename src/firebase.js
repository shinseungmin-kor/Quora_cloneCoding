import firebase from 'firebase';

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB-KvF_U3unAg8PXOplhh7URjHp5ZEDkIk",
  authDomain: "quora-clone-23bff.firebaseapp.com",
  projectId: "quora-clone-23bff",
  storageBucket: "quora-clone-23bff.appspot.com",
  messagingSenderId: "62923836540",
  appId: "1:62923836540:web:d8d1647d34532f89460df9",
  measurementId: "G-FW4GFEEQF8"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const auth = firebase.auth()

const provider = new firebase.auth.GoogleAuthProvider()

const db = firebaseApp.firestore()

export {auth, provider}

export default db