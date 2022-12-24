import React from 'react'
import { useSelector } from 'react-redux'
import { Navigate, Outlet } from 'react-router-dom'
const ProtectedRoutes = () => {
    const user = useSelector((state)=>(state.currentUserReducer))
  return (
    <div>
        {user!=null ? <Outlet /> : <Navigate to='/login'/>}
    </div>
  )
}

export default ProtectedRoutes