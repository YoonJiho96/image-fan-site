import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import IllustrationPage from './page/IllustrationPage';
import './App.css';

function App() {
  return (
    <Router>
      <Navbar />
      <Footer />
      <Routes>
        <Route path="/gallery" element={<IllustrationPage />} />
      </Routes>
    </Router>
  );
}

export default App;
