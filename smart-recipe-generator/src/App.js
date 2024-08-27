// src/App.js

import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import HomePage from './pages/HomePage';
import SavedRecipes from './pages/SavedRecipes';

function App() {
  return (
    <Router>
      <div className="App">
          <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/saved-recipes" element={<SavedRecipes />} />
          </Routes>
      </div>
  </Router>
  );
}

export default App;
