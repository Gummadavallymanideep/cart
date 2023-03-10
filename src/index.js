import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from "./serviceWorker";
// import * as firebase from "firebase";
import { initializeApp } from "firebase/app";
import "firebase/firestore";
// import { getFirestore, collection, getDocs } from 'firebase/firestore/lite';

const firebaseConfig = {
    apiKey: "AIzaSyAQL6yFFpLiDcvLovdcAk305iSPWSHQUBU",
    authDomain: "cart-1ef1a.firebaseapp.com",
    projectId: "cart-1ef1a",
    storageBucket: "cart-1ef1a.appspot.com",
    messagingSenderId: "682712438829",
    appId: "1:682712438829:web:86777c4d1ab325c08e40a4"
};
// firebase.initializeApp(firebaseConfig);
const app = initializeApp(firebaseConfig);
// const db = getFirestore(app);

// async function getCities(db){
//     const citiesCol = collection(db, 'cities');
//     const citySnapshot = collection(citiesCol);
//     const cityList = citySnapshot.docs.map(doc => doc.data());
//     return cityList;
// }

ReactDOM.render(<App />, document.getElementById("root"));
  
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
