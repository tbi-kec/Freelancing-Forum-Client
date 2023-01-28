import React from 'react'
import MaterialIcon from 'material-icons-react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { responseToNotification } from '../../../actions/myDetails';
import NotificationRejectionModal from '../NotificationRejectionModal';
import './Type1.scss'
import moment from 'moment';
const Type1 = ({notification}) => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const handleAccept = (e)=>{
    e.preventDefault();
    dispatch(responseToNotification({status:"accepted",p_id:notification.p_id._id,n_id:notification._id},navigate))
  }  


  return (
       <div className="type1-container">
        <NotificationRejectionModal notification={notification} />
      <div className='top-row'>
          <div className="icon-container">
            <MaterialIcon icon="sms" size="34px" color='#5378F8'/>
             <p className='p-0 m-1'><span className='fw-bold'>From</span> : {notification.notify_from}</p>
            </div>
         
      </div>
      <div className="message-container">
          <p className='p-0 m-0 mx-5'>
               {notification.p_id.title}
          </p>
      </div>
      <div className="time-container">
        <div className='mx-4'>
          <button className="btn btn-sm btn-success mx-4" onClick={handleAccept}>Accept</button>
          <button data-bs-toggle="modal" data-bs-target={`#rejection-${notification?._id}`} className="btn btn-sm btn-danger">Reject</button>
        </div>
          <div>
            <p className='p-2'>{moment(notification.created_on).fromNow()}</p>
          </div>
      </div>
      
    </div>

  )
}

export default Type1