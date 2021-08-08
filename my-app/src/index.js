import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import firebase from "firebase";




const firebaseApp  = firebase.initializeApp({
              apiKey: "AIzaSyC4uLmFlgtpVGPHzbyyAQG022TOqcKwPbM",
              authDomain: "evernote-5d70a.firebaseapp.com",
              projectId: "evernote-5d70a",
              storageBucket: "evernote-5d70a.appspot.com",
              messagingSenderId: "24085685941",
              appId: "1:24085685941:web:12f8a484987491d3e440fc",
              measurementId: "G-ER97J9S05M"
});

const db = firebaseApp.firestore();
export default db;



ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
