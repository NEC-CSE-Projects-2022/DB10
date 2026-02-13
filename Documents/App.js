// App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import About from './components/About';
import Register from './components/Register';
import Login from './components/Login';
import Faq from './components/Faq';
import Home from './components/Home'
import Orders from './components/Orders'
import Contact from './components/Contact';
import AddBook from './components/AddBook';
// import Admin from './components/Admin'

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/books" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/faq" element={<Faq />} />
        <Route path="/orders" element={<Orders />} />
        <Route path="/addbook" element={<AddBook />} />
        {/* <Route path="/admin" element={<Admin />} /> */}
      </Routes>
    </Router>
  );
}

export default App;
