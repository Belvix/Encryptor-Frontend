import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import IndexPage from './components/IndexPage';
import Encryptor from './components/Encryptor';
import Decryptor from './components/Decryptor';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<IndexPage />} />
          <Route path="/encryptor" element={<Encryptor />} />
          <Route path="/decryptor" element={<Decryptor />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;