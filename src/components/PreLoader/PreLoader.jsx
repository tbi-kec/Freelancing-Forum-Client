import React from 'react'
import './PreLoader.css'
import KecLogo from '../../assets/keclogo.png'
import WhiteImg from '../../assets/left_graph.png'
import { useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import decode from 'jwt-decode'
import { useEffect } from 'react'
function PreLoader() {
  const navigate=useNavigate();
  const handleLogout =()=>{
    localStorage.removeItem("freelance")
    setTimeout(()=>{
    navigate('/home')
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
                setTimeout(()=>{
                       navigate(`/profile/${result.user._id}`)
                },3000)
             
        }
      },[]);

  return (
    <div className='preloader text-center'>
        <div className='text-center' >
            <img className='my-2 animate__animated animate__pulse animate__infinite ' src={KecLogo} height='70' width='70' alt="" />
            <p className='animate__animated animate__pulse text-black text-light'>Transform YourSelf</p>
        </div><br />
  
    </div>
  )
}

export default PreLoader