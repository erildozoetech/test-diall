import { initializeApp } from 'firebase/app';
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyAxE5ap4Cuw1f--zi6FtIzMDLjx4JtxAto",
  authDomain: "test-diall.firebaseapp.com",
  projectId: "test-diall",
  storageBucket: "test-diall.appspot.com",
  messagingSenderId: "102020011602",
  appId: "1:102020011602:web:bc26c760fdbfa36dd0718b",
  measurementId: "G-D17P5Y90CN"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const FirebaseAuth = getAuth(app);
export default getFirestore();