import React, { useState } from 'react'
import AdminNavbar from '../../components/AdminNavbar/AdminNavbar'
import AdminSideBar from '../../components/AdminSideBar/AdminSideBar'
import { Outlet, useLocation } from 'react-router-dom'
import Adminchart from '../../components/AdminChart/AdminChart'
const AdminPage = () => {
 const [toggle,setToggle]=useState(false)
 const url=useLocation().pathname
 console.log(url);
 const handleToggle = ()=>{
  setToggle(!toggle)
 }
 
  return (
    <div>
      <AdminSideBar handleToggle={handleToggle} />
      <AdminNavbar toggle={toggle} handleToggle={handleToggle} />
      {(url==="/admin/" || url==="/admin") &&
        <Adminchart />
      }
      <Outlet />
    </div>
  )
}

export default AdminPage
