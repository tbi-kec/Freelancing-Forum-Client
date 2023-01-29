import React from 'react'
import'./Notify.css'
import Type0 from './Type0/Type0';
import Type1 from './Type1/Type1';
export default function Notification({notification}) {

  return (
    <div className='notification-container  '>
       {notification.notify_type===1 ? <Type1 notification={notification} /> : <Type0 notification={notification}/>}
    </div>
  )
}
