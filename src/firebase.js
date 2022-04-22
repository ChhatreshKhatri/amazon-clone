import firebase from "firebase";
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyABPtIvAMHK24vzrjjOoAnjbyPL1ThzOOY",
  authDomain: "clone-a2550.firebaseapp.com",
  projectId: "clone-a2550",
  storageBucket: "clone-a2550.appspot.com",
  messagingSenderId: "306629824361",
  appId: "1:306629824361:web:8b54447ea6a4802857b7f8",
  measurementId: "G-QLB1DS767R"
};

  const firebaseApp = firebase.initializeApp(firebaseConfig);

  const db = firebaseApp.firestore();
  const auth = firebase.auth();
  
  export { db, auth };
