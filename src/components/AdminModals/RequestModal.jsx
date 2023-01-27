import React,{useState} from 'react'
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { setAlert } from '../../actions/alert';
import { respondToRequest } from '../../actions/admin';
const RequestModal=(props) =>{
  const navigate = useNavigate()
  const dispatch=useDispatch()
  const [reason,setReason]=useState("");
   const handleReject = (e, id) => {
      e.preventDefault();
      props.handleResponse();
      dispatch(setAlert("Rejecting Project", "info", 2000))
      dispatch(respondToRequest({ status: "created", p_id: id ,message:reason}, navigate))
   
  }
  return (

    <div>
      {/* model */}
      <div className="modal fade " id={`toggle_model_project_request-${props.id}`} tabIndex="-1" role='dialog' aria-labelledby="exampleModalLabel" >
        <div className="modal-dialog modal-dialog-centered modal-lg">
          <div className="modal-content p-5">
            <label className="form-label">Reason for rejection</label>
            <textarea name="" value={reason} className="form-control my-3" onChange={e=>setReason(e.target.value)}></textarea>
            <button onClick={e=>handleReject(e,props.id)} data-bs-dismiss="modal" aria-label="Close" className="btn btn-danger">Reject</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default RequestModal
