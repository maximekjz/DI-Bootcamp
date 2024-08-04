import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// import App from './AppEx1';
import AppEx2 from './AppEx2';
import AppEx3 from './AppEx3';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <AppEx3 />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
