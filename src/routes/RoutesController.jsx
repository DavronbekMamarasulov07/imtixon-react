import React from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import NotFound from './not-found/NotFound'
import Home from './home/Home'
import Auth from './auth/Auth'
import Login from './auth/login/Login'
import Register from './auth/register/Register'

import Cart from './cart/Cart'  
import Likes from './likes/Likes'
import SingleProducts from './single_page/SingleProducts'
import Profile from './profile/Profile'
import Products from './profile/products/Products'
import Users from './profile/users/Users'

const RoutesController = () => {
  return (
    <Routes>

        <Route path="" element={<Home />}/>
        
        <Route path="auth" element={<Auth />}>
          <Route index path="" element={<Login />}/>
          <Route path="register" element={<Register />}/>
        </Route>

        <Route path="profile" element={<Profile />}>
            <Route path="" element={<Products/>} />
            <Route  path='profile/users' element={<Navigate to="users"/>}/>
            <Route path="users" element={<Users/>} />

        </Route>
        <Route path='cart' element={<Cart />} />
        <Route path='likes' element={<Likes />} />
        <Route path='single-products/:id' element={<SingleProducts />}/>
        <Route path="cart" element={<Cart />}/>
        <Route  path='not-found' element={<NotFound/>}/>
        <Route path='*' element={<Navigate to='not-found'/>}/> 
    </Routes>
  )
}

export default RoutesController
