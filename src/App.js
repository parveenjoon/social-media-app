import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import ItemDetail from './components/ItemDetail';
import './App.css';

const App = () => (
  <Router>
    <div className="App">
      <header className="App-header">
        <h1>Social Media App</h1>
      </header>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/item/:id" element={<ItemDetail />} />
      </Routes>
    </div>
  </Router>
);

export default App;
