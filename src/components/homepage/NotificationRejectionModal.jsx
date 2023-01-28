import React from 'react'
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { responseToNotification } from '../../actions/myDetails';
import { setAlert } from '../../actions/alert';
function NotificationRejectionModal({notification}) {
    const [message,setMessage]=useState("")
    const navigate=useNavigate()
    const dispatch=useDispatch();
    const handleReject =(e)=>{
    e.preventDefault()
    dispatch(setAlert("Rejecting project","info"))
    dispatch(responseToNotification({status:"rejected",message,p_id:notification.p_id._id,n_id:notification._id},navigate))
     
}

  return (
    <div>
      {/* model */}
      <div className="modal fade " id={`rejection-${notification._id}`} tabIndex="-1" role='dialog' aria-labelledby="exampleModalLabel" >
        <div className="modal-dialog modal-dialog-centered modal-lg">
          <div className="modal-content p-5">
            <label className="form-label">Reason for rejection</label>
            <textarea name="" value={message} className="form-control my-3" onChange={e=>setMessage(e.target.value)}></textarea>
            <button onClick={handleReject} data-bs-dismiss="modal" aria-label="Close" className="btn btn-danger">Reject</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default NotificationRejectionModal
