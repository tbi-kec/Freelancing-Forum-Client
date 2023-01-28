import React from 'react'
import './Type0.scss'
import MaterialIcon from 'material-icons-react';
const Type0 = () => {
  return (
    <div className="type0-container">
      <div className='top-row'>
          <div className="icon-container">
            <MaterialIcon icon="sms" size="34px" color='#5378F8'/>
             <p className='p-0 m-1'><span className='fw-bold'>From</span> : Linga</p>
            </div>
          <div className='delete-btn'>
                  <i className="fa-sharp fa-solid fa-xmark text-danger "></i>
          </div>
      </div>
      <div className="message-container">
          <p className='px-1 m-1'>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quis officia laudantium tempore possimus debitis? Earum commodi dicta, illo incidunt quisquam, cupiditate quo, error praesentium eum delectus placeat nemo quis possimus.
          </p>
      </div>
      <div className="time-container d-flex justify-content-end p-1">
        <p>in 7 days</p>
      </div>
    </div>
  )
}

export default Type0
         