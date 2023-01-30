import React from 'react'
import {Outlet,Navigate} from 'react-router-dom'
const AdminProtected = () => {
   const result =JSON.parse(localStorage.getItem("freelance"))
    var user;
    if(result!==null){
      user=result?.user
    }
  return (
    <div>
      {user?.isAdmin===true ? <Outlet/> : <Navigate to='/'/> }
    </div>
  )
}

export default AdminProtected

