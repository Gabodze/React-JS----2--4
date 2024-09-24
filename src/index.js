import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Header from './Header'; 
import Footer from './Footer'; 
import App from './App';
import reportWebVitals from './reportWebVitals';

// Create a root for rendering the React app
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

  <React.StrictMode>
    <Header />  
    <App />     
    <Footer />  
  </React.StrictMode>
);


reportWebVitals();
