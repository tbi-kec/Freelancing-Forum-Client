import React from 'react'
import './PreLoader.css'
import KecLogo from '../../assets/logo.png'

import { useNavigate } from 'react-router-dom'

import decode from 'jwt-decode'
import { useEffect } from 'react'
function PreLoader() {
  const navigate = useNavigate();
 
  useEffect(() => {
    const result = JSON.parse(localStorage.getItem("freelance"))
    const token = result?.token;
   

    if (!result) {
      setTimeout(() => {
        navigate('/login')
      }, 3000)
    }
    if (token) {
      const decodedToken = decode(token)

      if (decodedToken.exp * 1000 < new Date().getTime()) {
         const handleLogout = () => {
            localStorage.removeItem("freelance")
            setTimeout(() => {
              navigate('/home')
            }, 3000)
        }
        handleLogout()
        return
      }
      setTimeout(() => {
        if(result?.user?.isAdmin===true)
          navigate('/admin')
        else if(result?.user?.admin_verify===false)
          navigate(`/profile/${result?.user?._id}`)
        else navigate(`/home`)
      }, 3000)

    }
  }, [navigate]);

  return (
    <>
      <div className='preloader text-center'>
        <div className='text-center' >
          <img className='my-2 animate__animated animate__pulse animate__infinite ' src={KecLogo} height='70' width='70' alt="" />
          <p className='animate__animated animate__pulse  text-light'>Transform YourSelf</p>
        </div><br />

      </div>
    </>

  )
}

export default PreLoader