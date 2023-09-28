// Import React and ReactDOM
import React from 'react';
import ReactDOM from 'react-dom/client';

// Import the main App component
import App from './App.jsx';

// Use ReactDOM to render the App component into the 'root' element
// First, create a React root using createRoot and target the 'root' element
ReactDOM.createRoot(document.getElementById('root')).render(
  // Wrap the App component with React.StrictMode for additional checks in development
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);