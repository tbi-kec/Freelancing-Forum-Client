import React, { useState } from 'react'
import AdminNavbar from '../../components/AdminNavbar/AdminNavbar'
import AdminSideBar from '../../components/AdminSideBar/AdminSideBar'
import { Outlet } from 'react-router-dom'
const AdminPage = () => {
 const [toggle,setToggle]=useState(false)
 const handleToggle = ()=>{
  setToggle(!toggle)
 }
  return (
    <div>
      {toggle &&<AdminSideBar handleToggle={handleToggle} />}
      <AdminNavbar toggle={toggle} handleToggle={handleToggle} />
      <Outlet />
    </div>
  )
}

export default AdminPage
