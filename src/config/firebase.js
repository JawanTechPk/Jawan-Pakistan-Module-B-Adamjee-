import firebase from "firebase";
import "firebase/auth";

var firebaseConfig = {
  apiKey: "AIzaSyBZRrcveo-G8e2jigGw5unxAVcPvFLDycU",
  authDomain: "staff-management-5488a.firebaseapp.com",
  databaseURL: "https://staff-management-5488a.firebaseio.com",
  projectId: "staff-management-5488a",
  storageBucket: "staff-management-5488a.appspot.com",
  messagingSenderId: "320739248630",
  appId: "1:320739248630:web:d93e9966502de9315d5fd7",
  measurementId: "G-LR5BV1MQ8G",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase;
