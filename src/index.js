import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/app';
import reportWebVitals from './reportWebVitals';
import { FirebaseAppProvider, AuthCheck } from 'reactfire';
import Startup from './components/startup';

const firebaseConfig = {
  apiKey: "AIzaSyBaD5KRyWPhsJ6TQWAh8j5v3zt1yQAT440",
  authDomain: "hiilari-920d8.firebaseapp.com",
  projectId: "hiilari-920d8",
  storageBucket: "hiilari-920d8.appspot.com",
  messagingSenderId: "254765600959",
  appId: "1:254765600959:web:6dfdfe766ff0628f75360a",
  measurementId: "G-QCBLPQPZTD"
};

ReactDOM.render(
  <React.StrictMode>
    <FirebaseAppProvider firebaseConfig={firebaseConfig}>
      <AuthCheck fallback={<Startup />}>
        <App />
      </AuthCheck> 
      
    </FirebaseAppProvider>
    
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
