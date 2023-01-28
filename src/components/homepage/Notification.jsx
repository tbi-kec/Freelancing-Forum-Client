import React from 'react'
import'./Notify.css'
import { useNavigate } from 'react-router-dom';
import { useDispatch,useSelector } from 'react-redux';
import { responseToNotification } from '../../actions/myDetails';
import { deleteNotification } from '../../actions/myDetails';
import MaterialIcon from 'material-icons-react';
import moment from "moment"
import NotificationRejectionModal from './NotificationRejectionModal';
export default function Notification({notification}) {
  
    const navigate =useNavigate()
    const dispatch =useDispatch();
    const user = useSelector((state)=>(state.currentUserReducer));
  
    const handleAccept = (e)=>{
    e.preventDefault();
    dispatch(responseToNotification({status:"accepted",p_id:notification.p_id._id,n_id:notification._id},navigate))

}  
const handleReject =(e)=>{
  e.preventDefault()
//   dispatch(responseToNotification({status:"rejected",p_id:notification.p_id._id,n_id:notification._id},navigate))
    console.log("Reject clicked")
}

const deleteNotificationButton=(e)=>{
    e.preventDefault();
    console.log("clicked");
    const id =user?.user?._id;
    dispatch(deleteNotification({u_id:id,n_id:notification?._id},navigate))
}

  return (
    <div className='notification-container m-2 pb-4'>
         <NotificationRejectionModal id={notification?._id} reject={handleReject}/>
       
            <div className="row d-flex align-items-center" key={notification?._id}>
            <div className="col-3 d-flex justify-content-center">
            {notification?.notify_type===0 && <MaterialIcon icon="sms" size="56px" color='#5378F8'/>}
            {notification?.notify_type==1 && <MaterialIcon icon="work" size="56px" color='#5378F8'/> }
            </div>
            <div className="col-9">
                <div className="row d-flex align-items-center">
                    <div className="col-10">
                        <div className='fw-bold'>From {notification.notify_from}</div>
                    </div>
                    <div className="col-2">
                        <button onClick={deleteNotificationButton} className="btn">
                        <i className="fa-sharp fa-solid fa-xmark text-danger "></i>
                        </button>
                    </div>
                </div>
                <div className='' style={{fontSize:"12px"}}>( Aug 1 - July 2 )</div>
                <div className='fw-bold'>{notification?.p_id.title}</div>
                <div style={{fontSize:"14px"}}>{notification?.message}</div>
                <div className="row my-2">
                    {notification?.notify_type==1 &&<div className="col-6">
                        <button className='btn btn-success px-2 py-0 me-2' onClick={handleAccept} >Accept</button>
                        <button className='btn btn-danger px-2 py-0 '  data-bs-toggle="modal" data-bs-target={`#rejection-${notification?._id}`} >Reject</button>
                        </div>
                     }
                    <div className="col-6 text-end px-4">
                        <span className='' style={{fontSize:"12px"}} >{moment(notification?.created_on).fromNow()}</span>
                    </div>
                </div>
    
            </div>
        </div>
      
        
        {/* <div className="row p-2 ">
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
        </div> */}
    </div>
  )
}
