// src/App.js

import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; // Import Routes

import AuthPage from "./Pages/AuthPage/AuthPage"

function App() {
  return (
    <Router>
      <div className="App">
        <Routes> {/* Use Routes to wrap your Route components */}
          <Route path="/" element={<AuthPage />} /> {/* Use element prop */}
          {/* Add more routes for other pages if needed */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
