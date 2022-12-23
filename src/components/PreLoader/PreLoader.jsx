

import React from 'react'
import './PreLoader.css'
import KecLogo from '../../assets/keclogo.png'

function PreLoader() {
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