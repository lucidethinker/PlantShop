import React from 'react'
import { Routes, Route ,Navigate } from 'react-router-dom'

import Home from '../pages/Home'
import Shop from '../pages/Shop'
import Cart from '../pages/Cart'
import Productdetails from '../pages/Productdetails'
import Checkout from '../pages/Checkout'
import Login from '../pages/Login'
import Signup from '../pages/Signup'
import ProtectedRoute from './ProtectedRoute'


import AddProducts from '../admin/AddProducts'
import AllProducts from '../admin/AllProducts'






const Routers = () => {
  return <Routes>
    <Route path="/" element={<Navigate to ='home'/>}/>
    <Route path="home" element={<Home />} />
    <Route path="shop" element={<Shop />} />
    <Route path='shop/:id' element ={<Productdetails />} />
    <Route path="cart" element={<Cart />} />

    <Route path="/*" element={<ProtectedRoute/>}>
      <Route path="checkout" element={<Checkout />} />
      <Route path="dashboard/all-products" element={<AllProducts />} />
      <Route path="dashboard/add-products" element={<AddProducts />} />
      


    </Route>
  
    <Route path="login" element={<Login />} />
    <Route path="signup" element={<Signup />} />
  </Routes>
}

export default Routers