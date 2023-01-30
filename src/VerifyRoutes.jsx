import React from 'react'
<<<<<<< HEAD
import {Navigate } from 'react-router-dom'
=======
import { Outlet,Navigate } from 'react-router-dom'
import Na from './components/AdminChart/canvasjs.min'
>>>>>>> 38948aecbcca367be9cde1b849081adaaf560301
const VerifyRoutes = () => {
    const result = JSON.parse(localStorage.getItem("freelance"))
    
  return (
    <div>
<<<<<<< HEAD
        {(result.user.admin_verify===false && result?.user?.user_type==="freelancer") ? <Navigate to={`/profile/${result.user._id}`}/> : <Navigate to='/home' />}
=======
        {result.user.admin_verify===false && result?.user?.user_type==="freelancer" ? <Navigate to={`/profile/${result.user._id}`}/> : <Navigate to='/home'/>}
>>>>>>> 38948aecbcca367be9cde1b849081adaaf560301
    </div>
  )
}

export default VerifyRoutes