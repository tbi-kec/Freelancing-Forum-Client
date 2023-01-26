import React,{useState} from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom';
import { acceptOrRejectUser } from '../../actions/admin';
import { setAlert } from '../../actions/alert';
function UserAprprovalModal({id,name}) {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [message,setMessage]=useState("")

  const handleRejectUser = (e)=>{
    e.preventDefault();
    dispatch(setAlert("Rejecting freelancer","info"))
    dispatch(acceptOrRejectUser({u_id:id,status:"rejected",message},navigate))

  }
  
  return (
    <>
      {/* model */}
      <div className="modal fade " id={`toggle_model_user_approval-${id}`} tabIndex="-1" role='dialog' aria-labelledby="exampleModalLabel" >
        <div className="modal-dialog modal-dialog-centered modal-lg">
          <div className="modal-content p-5">
           <h5>Reason for rejecting freelancer</h5>
             <textarea className='form-control'  onChange={e=>setMessage(e.target.value)} value={message}>
             </textarea>
            <button onClick={handleRejectUser} data-bs-dismiss="modal" aria-label="close" className="btn btn-danger my-3">Reject {name}</button>
          </div>
        </div>
      </div>
    </>
  )
}

export default UserAprprovalModal
