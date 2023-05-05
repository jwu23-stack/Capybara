import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/App.js';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from "react-router-dom";
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// TODO: Move these values to a file that's not checked in for security
const firebaseConfig = {
  apiKey: "AIzaSyBilDzyLdKGh8zuH-Crnl_4Jyj9QdQZLXs",
  authDomain: "sharer-21a0a.firebaseapp.com",
  databaseURL: "https://sharer-21a0a-default-rtdb.firebaseio.com",
  projectId: "sharer-21a0a",
  storageBucket: "sharer-21a0a.appspot.com",
  messagingSenderId: "753912898108",
  appId: "1:753912898108:web:f324520aa8196b75775939",
  measurementId: "G-8TBL7QQQXB"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

const auth = getAuth(app);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();