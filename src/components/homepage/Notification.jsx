
import React from 'react'
import'./Notify.css'

export default function Notification({notification}) {
     console.log(notification)
  return (
    <div className='notification-container my-2'>
        <div className="row p-2 ">
            <div className="col-8">
                <h6 className='mt-1 text-light fw-bold'>{notification.p_id.title}</h6>
                <p className='notification-msg text-start'>{notification.message}</p>
            </div>
            <div className="col">
                {notification.notify_type==1?
                <div className='d-flex justify-content-end'>
                    <button className='btn success px-2 py-1 me-2' >Accept</button>
                    <button className='btn danger px-2 py-0 '>Reject</button>
                </div>
                :<div className='d-flex justify-content-end text-danger'>
                <i class="fa-sharp fa-solid fa-xmark"></i>
            </div>
}

            </div>
        </div>
    </div>
  )
}
