//import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './Header';
import Home from '../pages/Home'; // vérifier si la casse est correcte ici
import About from '../pages/About';

const AppRouter = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/apropos" element={<About />} />
      </Routes>
    </Router>
  );
};

export default AppRouter;