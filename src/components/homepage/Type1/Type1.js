import React from 'react'
import MaterialIcon from 'material-icons-react';
import './Type1.scss'
const Type1 = () => {
  return (
       <div className="type1-container">
      <div className='top-row'>
          <div className="icon-container">
            <MaterialIcon icon="sms" size="34px" color='#5378F8'/>
             <p className='p-0 m-1'><span className='fw-bold'>From</span> : Linga</p>
            </div>
         
      </div>
      <div className="message-container">
          <p className='p-0 m-0 mx-5'>
               Project title
          </p>
      </div>
      <div className="time-container">
        <div className='mx-4'>
          <button className="btn btn-sm btn-success mx-4">Accept</button>
          <button className="btn btn-sm btn-danger">Reject</button>
        </div>
          <div>
            <p className='p-2'>in 7 days</p>
          </div>
      </div>
    </div>
  )
}

export default Type1