import firebase from "firebase";
require("@firebase/firestore");

var firebaseConfig = {
  apiKey: "AIzaSyCImFIngeJoi0HqidGOmsTK0wMuRDPM1JI",
  authDomain: "e-ride-stage-df0b9.firebaseapp.com",
  projectId: "e-ride-stage-df0b9",
  storageBucket: "e-ride-stage-df0b9.appspot.com",
  messagingSenderId: "1060955148589",
  appId: "1:1060955148589:web:5cb999759ad13160d7c3a4"
};

firebase.initializeApp(firebaseConfig);

export default firebase.firestore();
