
import React from 'react'
import'./Notify.css'

export default function Notification({notification}) {
     console.log(notification)
  return (
    <div className='notification-container my-2'>
        <div className="row p-2 ">
            <div className="col-8">
                <h6 className='mt-1 text-light'>{notification.message}</h6>
            </div>
            <div className="col">
                {notification.message=='pending-user'?
                <div className='d-flex justify-content-end'>
                    <button className='btn success px-2 py-1 me-2' >Accept</button>
                    <button className='btn danger px-2 py-0 '>Reject</button>
                </div>
                :""
}

            </div>
        </div>
    </div>
  )
}
