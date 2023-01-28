import React from 'react'
import './Type0.scss'
import { useNavigate } from 'react-router-dom';
import { useDispatch,useSelector } from 'react-redux';
import { deleteNotification } from '../../../actions/myDetails';
import moment from 'moment';
import MaterialIcon from 'material-icons-react';
const Type0 = ({notification}) => {
  const dispatch=useDispatch();
 const user = useSelector((state)=>(state.currentUserReducer));
  const navigate=useNavigate()
    const deleteNotificationButton=(e)=>{
      e.preventDefault();
      const id =user?.user?._id;
      dispatch(deleteNotification({u_id:id,n_id:notification?._id},navigate))
}
  return (
    <div className="type0-container">
      <div className='top-row'>
          <div className="icon-container">
            <MaterialIcon icon="sms" size="34px" color='#5378F8'/>
             <p className='p-0 m-1'><span className='fw-bold'>From</span> : {notification.notify_from}</p>
            </div>
          <div className='delete-btn' onClick={deleteNotificationButton}>
                  <i className="fa-sharp fa-solid fa-xmark text-danger "></i>
          </div>
      </div>
      <div className="message-container">
          <p className='px-1 m-1'>
                {notification.message}
          </p>
      </div>
      <div className="time-container d-flex justify-content-end p-1">
        <p>{moment(notification.created_on).fromNow()}</p>
      </div>
    </div>
  )
}

export default Type0
         