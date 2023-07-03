// import dependencies
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

// creates a root and specifies the root element in order to render the app
const root = ReactDOM.createRoot(document.getElementById('root'));

// renders the app within the root element
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
reportWebVitals();
