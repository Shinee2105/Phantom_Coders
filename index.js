import React from 'react';
import ReactDOM from 'react-dom/client';  // Updated import for React 18
import App from './App';
import './index.css';  // Import global styles (if any)

const root = ReactDOM.createRoot(document.getElementById('root'));  // Initialize the root
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
