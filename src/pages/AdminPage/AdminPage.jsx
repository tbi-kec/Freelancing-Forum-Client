import React, { useLayoutEffect, useState } from 'react'
import AdminNavbar from '../../components/AdminNavbar/AdminNavbar'
import AdminSideBar from '../../components/AdminSideBar/AdminSideBar'
import {useSelector} from 'react-redux'
import { useEffect } from 'react'
import { Outlet } from 'react-router-dom'
const AdminPage = () => {
 const [toggle,setToggle]=useState(true)
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
