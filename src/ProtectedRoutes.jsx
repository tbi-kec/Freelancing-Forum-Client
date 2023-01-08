import React from 'react'
import { useSelector } from 'react-redux'
import { Navigate, Outlet } from 'react-router-dom'
const ProtectedRoutes = () => {
    const user = useSelector((state)=>(state.currentUserReducer))
  return (
    <div>
        {user!=null && ((user?.user_type=='client' && user?.admin_verify==false) || (user?.user_type=='freelancer' && user?.admin_verify==true)) ? <Outlet /> : <Navigate to='/login'/>}
    </div>
  )
}

export default ProtectedRoutes