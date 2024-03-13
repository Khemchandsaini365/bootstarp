import React, { useEffect, useState } from 'react'
import Navbar from './components/Navbar'
import ProductCard from './components/ProductCard'
import ShoppingCart from './components/ShoppingCart';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Home from './components/Home';

const App = () => {

  return (
    

      <Router>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/cart' element={<ShoppingCart />} />
        </Routes>
      </Router>

  )
}

export default App