import React from 'react'

function RequestModal(props) {
  return (
    <div>
      {/* model */}
      <div className="modal fade " id={`toggle_model_project_request-${props.id}`} tabIndex="-1" role='dialog' aria-labelledby="exampleModalLabel" >
        <div className="modal-dialog modal-dialog-centered modal-xl">
          <div className="modal-content p-5">
            <label className="form-label">Reason for rejection</label>
            <input type="text" className="form-control" />
            <button className="btn btn-danger">Reject</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default RequestModal
