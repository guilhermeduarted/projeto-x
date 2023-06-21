// Import the functions you need from the SDKs you need
import firebase from "firebase/app";
import "firebase/firebase-database";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBCUlC-SjXLxw2P4ssFMFY-qieChbwj-zo",
  authDomain: "task-b295e.firebaseapp.com",
  projectId: "task-b295e",
  storageBucket: "task-b295e.appspot.com",
  messagingSenderId: "497155879484",
  appId: "1:497155879484:web:21435535441337bb8f4939"
};

// Initialize Firebase
if(!firebase.app.linght){
    firebase.initializeApp(firebaseConfig);

}


export default firebase;