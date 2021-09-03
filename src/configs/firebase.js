// import * as app from 'firebase/app';
// import {doc, setDoc} from 'firebase/firestore';
// import {getStorage} from 'firebase/storage';
// import {getAuth, signInWithEmailAndPassword } from 'firebase/auth';

// const config = {
//   apiKey: "AIzaSyBchVkcai8SMwBSDB4jJ69A45tpArOFi6g",
//   authDomain: "kroxa-shop-8fad2.firebaseapp.com",
//   projectId: "kroxa-shop-8fad2",
//   storageBucket: "kroxa-shop-8fad2.appspot.com",
//   messagingSenderId: "483772053712",
//   appId: "1:483772053712:web:5f66c024ed939b049b86d5",
//   measurementId: "G-V13GZHNH9J"
// };
// app.initializeApp(config);

// const firestore = {doc, setDoc};
// const storage = getStorage(app);
// const auth = {getAuth, signInWithEmailAndPassword}
// // firestore.enablePersistence({ experimentalTabSynchronization: true })

// export {
//   auth,
//   firestore,
//   storage,
//   app as default
// };

import firebase from "firebase";
import "firebase/analytics";
import "firebase/auth";
import "firebase/firestore";

const config = {
  apiKey: "AIzaSyBchVkcai8SMwBSDB4jJ69A45tpArOFi6g",
  authDomain: "kroxa-shop-8fad2.firebaseapp.com",
  projectId: "kroxa-shop-8fad2",
  storageBucket: "kroxa-shop-8fad2.appspot.com",
  messagingSenderId: "483772053712",
  appId: "1:483772053712:web:5f66c024ed939b049b86d5",
  measurementId: "G-V13GZHNH9J",
};

const app = firebase.initializeApp(config);
const db = firebase.firestore();

const auth = firebase.auth();
export { app as default, db, auth };
