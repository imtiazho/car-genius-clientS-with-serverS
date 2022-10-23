import { getAuth } from "firebase/auth";
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// const firebaseConfig = {
//   apiKey: "AIzaSyCCWL6ncy7jbK8CaX3MR8xYUxp2ppWBoCY",
//   authDomain: "car-project-service-center.firebaseapp.com",
//   projectId: "car-project-service-center",
//   storageBucket: "car-project-service-center.appspot.com",
//   messagingSenderId: "1054592716919",
//   appId: "1:1054592716919:web:a25da1f45d0b4514bff672"
// };
const firebaseConfig = {
  apiKey: process.env.REACT_APP_apiKey,
  authDomain: process.env.REACT_APP_authDomain,
  projectId: process.env.REACT_APP_projectId,
  storageBucket: process.env.REACT_APP_storageBucket,
  messagingSenderId: process.env.REACT_APP_messagingSenderId,
  appId: process.env.REACT_APP_appId,
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;