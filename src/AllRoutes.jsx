import React from 'react'
import { Route,Routes } from 'react-router-dom'
import Login from './pages/Login/Login'
import Register from './pages/Register/Register'
import ProfileCreation from './pages/ProfileCreation/ProfileCreation'
const AllRoutes = () => {
  return (
    <Routes>
      <Route path='/Login' element={<Login/>} />
      <Route path='/Register' element={<Register/>} />
      <Route path='/Profile/Create' element={<ProfileCreation/>} />
    </Routes>
  )
}

export default AllRoutes