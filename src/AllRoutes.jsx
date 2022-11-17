import React from 'react'
import { Route,Routes } from 'react-router-dom'
import Login from './pages/Login/Login'
import Register from './pages/Register/Register'
const AllRoutes = () => {
  return (
    <Routes>
      <Route path='/' element={<Register/>} />
    </Routes>
  )
}

export default AllRoutes