import firebase from 'firebase';

const firebaseConfig = {
  apiKey : "AIzaSyD3JMPYOPlX-6zLpqK-URd4dAVPQMxyRAQ",
  authDomain : "portfolio-52001.firebaseapp.com",
  projectId : "portfolio-52001",
  storageBucket: "portfolio-52001.appspot.com",
  messagingSenderId : "888424064859",
  appId: "1:888424064859:web:d4f2886d8631de722f9c7e",
  measurementId : "G-BS3X0SYK01",
}

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();

export default db;

/*
const firebaseConfig = {
  apiKey: process.env.apiKey,
  authDomain: process.env.authDomain,
  projectId: process.env.projectId,
  storageBucket: process.env.storageBucket,
  messagingSenderId: process.env.messagingSenderId,
  appId: process.env.appId,
  measurementId: process.env.measurementId
};
*/