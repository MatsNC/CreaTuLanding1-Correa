import './App.css'
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import 'bootstrap/dist/css/bootstrap.min.css';
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyC1Dyv0BQ7XMaIW6n4GAl9KPtSuRGhV6o4",
  authDomain: "ecommerce-suplementos.firebaseapp.com",
  projectId: "ecommerce-suplementos",
  storageBucket: "ecommerce-suplementos.appspot.com",
  messagingSenderId: "346798159748",
  appId: "1:346798159748:web:72db9ee81fbc8aad218fd1"
};

export const appFirestore = initializeApp(firebaseConfig);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)
