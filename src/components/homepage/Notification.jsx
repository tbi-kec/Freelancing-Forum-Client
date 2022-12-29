import React from 'react'
import'./Notify.css'
import { useNavigate } from 'react-router-dom';
import { useDispatch,useSelector } from 'react-redux';
import { responseToNotification } from '../../actions/myDetails';
import { deleteNotification } from '../../actions/myDetails';

export default function Notification({notification}) {
  
    const navigate =useNavigate()
    const dispatch =useDispatch();
    const user = useSelector((state)=>(state.currentUserReducer));
  
    const handleAccept = (e)=>{
    e.preventDefault();
    dispatch(responseToNotification({status:"accepted",p_id:notification.p_id._id},navigate))

}  
const handleReject =(e)=>{
  e.preventDefault()
  dispatch(responseToNotification({status:"rejected",p_id:notification.p_id._id},navigate))
}
const deleteNotificationButton=(e)=>{
    e.preventDefault();
    console.log("clicked");
    const id =user?.user?._id;
    dispatch(deleteNotification({u_id:id,n_id:notification?._id},navigate))
}
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
                    <button className='btn success px-2 py-1 me-2' onClick={handleAccept} >Accept</button>
                    <button className='btn danger px-2 py-0 ' onClick={handleReject}>Reject</button>
                </div>
                :<div className='d-flex justify-content-end  text-white' >
                <button onClick={deleteNotificationButton} className="btn btn-light">
                <i className="fa-sharp fa-solid fa-xmark "></i>
                </button>
            </div>
}

            </div>
        </div>
    </div>
  )
}
