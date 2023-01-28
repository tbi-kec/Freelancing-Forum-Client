import React from 'react'
import { useState } from 'react';

function NotificationRejectionModal(props) {
    const [message,setMessage]=useState("")

    const handleRejectUser = (e)=>{
        e.preventDefault();
        // dispatch(setAlert("Rejecting freelancer","info"))
        // dispatch(acceptOrRejectUser({u_id:id,status:"rejected",message},navigate))
    
      }
  return (
    <div>
      {/* model */}
      <div className="modal fade " id={`rejection-${props.id}`} tabIndex="-1" role='dialog' aria-labelledby="exampleModalLabel" >
        <div className="modal-dialog modal-dialog-centered modal-lg">
          <div className="modal-content p-5">
            <label className="form-label">Reason for rejection</label>
            <textarea name="" value={message} className="form-control my-3" onChange={e=>setMessage(e.target.value)}></textarea>
            <button onClick={e=>props.reject(e)} data-bs-dismiss="modal" aria-label="Close" className="btn btn-danger">Reject</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default NotificationRejectionModal
