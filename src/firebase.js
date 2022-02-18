import firebase from "firebase/app"
import "firebase/auth"
import "firebase/firestore"
import 'firebase/storage';
import 'firebase/database'

export const app = firebase.initializeApp({
  apiKey: "AIzaSyDHmLm1BL88H2E128sFfmZp-IcowMjS9-Y",
  authDomain: "react-poc-6a917.firebaseapp.com",
  databaseURL: "https://react-poc-6a917-default-rtdb.firebaseio.com",
  projectId: "react-poc-6a917",
  storageBucket: "gs://react-poc-6a917.appspot.com",
  messagingSenderId: "11999727201",
  appId: "1:11999727201:web:5d2a651918730d8c17e420",
  measurementId: "G-PRVHJ8G190"
})



export const auth = app.auth()

export const db = app.firestore();

export const database = app.database();
export const  storage = firebase.storage();

export default app
