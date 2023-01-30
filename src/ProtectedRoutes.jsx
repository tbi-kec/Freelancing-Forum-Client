import React from 'react'
import { Navigate, Outlet } from 'react-router-dom'

const ProtectedRoutes = () => {
    const result =JSON.parse(localStorage.getItem("freelance"))
   
    var user;
    
    if(result!=null){
      user=result?.user
    }
   

  return (
    <div>
      {user!=null ? <Outlet /> : <Navigate to='/'/> }
    </div>
  )
}

export default ProtectedRoutes