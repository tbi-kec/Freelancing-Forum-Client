import React from 'react'
import './Page404.css'
import RightImage from '../../assets/graph.png'
import LeftImage from '../../assets/left_graph.png'
import KecLogo from '../../assets/keclogo.png'
const Page404 = () => {
  return (
    <div>


      <div className='login-container'>
        <div className="container">
          <div className="row text-center  h-100 py-5 my-5">
            <div className="left-side-container col-sm-12   col-lg-6" style={{ backgroundImage: `url(${LeftImage})`, height: '500px' }}>
                <div className="h-100">
                <img src={KecLogo} height='100' alt="" />
                </div>
            </div>
            <div className="right-side-container  col-sm-12  col-lg-6 p-3" style={{ backgroundImage: `url(${RightImage})`,height: '500px' }}>


              <div className='header h-100 text-white'>
                <span className='fs-1 '> <span className='text-danger'>40</span>4 ... </span><br />  
                <span className='fs-5 ps-2'>  Page Not Found </span>
              </div>


            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Page404
