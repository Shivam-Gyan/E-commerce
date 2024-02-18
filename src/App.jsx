import React, { useEffect, useState } from 'react'
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate
}
  from 'react-router-dom'
import { ToastContainer } from 'react-toastify';
import { authServices } from './firebase/authentication/authService'

import {
  Cart,
  Dashboard,
  Home,
  NoPage,
  Order,
  Login,
  Signup

} from './pages'
import Layout from './components/Layout/Layout'
import ContextWrapper from './context/ContextWrapper'
import ProductInfo from './pages/productInfo/ProductInfo';
import Users from './pages/admin/adminPages/Users'
import Products from './pages/admin/adminPages/Products'
import OtherInfo from './pages/admin/adminPages/OtherInfo';
import Orders from './pages/admin/adminPages/Orders'

const App = () => {

  return (
    <ContextWrapper>
      <ToastContainer />
      <Router>
        <Routes>
          <Route path='/' element={<Layout />}>
            <Route path='/' element={<Home />} />
            <Route path='/login' element={<Login />} />
            <Route path='/signup' element={<Signup />} />
            <Route path='/order' element={
              <ProtectedUser>
                <Order />
              </ProtectedUser>} />
            <Route path='/Cart' element={<Cart />} />

            <Route path='/dashboard/' element={
              <ProtectedAdmin>
                <Dashboard></Dashboard>
              </ProtectedAdmin>
            }>
              <Route path='/dashboard/Users' element={<Users />} />
              <Route path='/dashboard/Orders' element={<Orders />} />
              <Route path='/dashboard/products' element={<Products />} />
              <Route path='/dashboard/Other-info' element={<OtherInfo />} />
            </Route>

            <Route path="/productinfo/:id" element={<ProductInfo />} />
            <Route path='/*' element={<NoPage />} />
          </Route>
        </Routes>
      </Router>
    </ContextWrapper>
  )
}

export default App



// Admin Checking

const ProtectedAdmin = ({ children }) => {
  const user = JSON.parse(localStorage.getItem('user'))
  if (user?.email === "shivamgupta12a@gmail.com") { return children; }
  else { return <Navigate to={'/login'} />; }
}

// 
const ProtectedUser = ({ children }) => {
  const user = JSON.parse(localStorage.getItem('user'))
  if (user) { return children; }
  else { return <Navigate to={'/login'} />; }
}