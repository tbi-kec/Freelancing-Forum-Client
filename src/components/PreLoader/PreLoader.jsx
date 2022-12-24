import React from 'react'
import './PreLoader.css'
import KecLogo from '../../assets/keclogo.png'
import { useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import decode from 'jwt-decode'
import { useEffect } from 'react'
function PreLoader() {
  const navigate=useNavigate();
  const dispatch=useDispatch();

  const handleLogout =()=>{
    localStorage.removeItem("freelance")
    setTimeout(()=>{
    navigate('/Home')
  },3000)
  }
    useEffect(()=>{


        const result = JSON.parse(localStorage.getItem("freelance"))
        const token=result?.token;
      if(!result){
              setTimeout(()=>{
                  navigate('/login')
              },3000)
                }
        if(token){
                const decodedToken = decode(token)
                
                if(decodedToken.exp *1000  < new Date().getTime()){
                    handleLogout()
                    return
                }
            
               
                
        }
      },[]);
  return (
    <div className='preloader'>
        <div className='text-center'>
            <img className='my-2 animate__animated animate__pulse animate__infinite ' src={KecLogo} height='70' width='70' alt="" />
            <p className='animate__animated animate__pulse '>Transform YourSelf</p>
        </div>

    </div>
  )
}

export default PreLoader