import React from 'react'
import { useSelector } from 'react-redux'
import { Navigate, Outlet } from 'react-router-dom'
const UnProtectedRoutes = () => {
    const user = useSelector((state)=>(state.currentUserReducer))

  return (
    <div>
        {user ? <Navigate to='/' /> : <Outlet />}
    </div>
  )
}

export default UnProtectedRoutes;