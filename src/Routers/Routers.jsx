import React from 'react'
import { Routes, Route } from 'react-router-dom'

import Home from '../pages/Home'
import Shop from '../pages/Shop'
import Cart from '../pages/Cart'
import Productdetails from '../pages/Productdetails'
import Login from '../pages/Login'
import Signup from '../pages/Signup'
import Checkout from '../pages/Checkout'





const Routers = () => {
  return <Routes>
    <Route path="home" element={<Home />} />
    <Route path="shop" element={<Shop />} />
    <Route path='shop/:id' element={<Productdetails />} />
    <Route path="cart" element={<Cart />} />
    <Route path="checkout" element={<Checkout />} />
    <Route path="login" element={<Login />} />
    <Route path="signup" element={<Signup />} />
  </Routes>
}

export default Routers