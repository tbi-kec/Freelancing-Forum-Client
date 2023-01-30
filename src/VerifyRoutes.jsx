import React from 'react'
import { Outlet,Navigate } from 'react-router-dom'
const VerifyRoutes = () => {
    const result = JSON.parse(localStorage.getItem("freelance"))
    
  return (
    <div>
        {result.user.admin_verify===false && result?.user?.user_type==="freelancer" ? <Navigate to={`/profile/${result.user._id}`}/> : <Outlet />}
    </div>
  )
}

export default VerifyRoutes