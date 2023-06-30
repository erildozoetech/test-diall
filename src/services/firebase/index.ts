import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';

export const firebaseConfig = {
  apiKey: "AIzaSyAxE5ap4Cuw1f--zi6FtIzMDLjx4JtxAto",
  authDomain: "test-diall.firebaseapp.com",
  projectId: "test-diall",
  storageBucket: "test-diall.appspot.com",
  messagingSenderId: "102020011602",
  appId: "1:102020011602:web:bc26c760fdbfa36dd0718b",
  measurementId: "G-D17P5Y90CN"
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}
