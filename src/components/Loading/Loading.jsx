import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'

const Loading = () => {
  // const loadingData = useSelector((state) => (state.loadingReducer));
  // const { loading } = loadingData.initialState;
  useEffect(() => {
    if (false) {
      document.getElementById('trigger_btn').click();
    } else {
      document.getElementById('modal_close').click();
    }

  }, []);

  //        document.getElementById('modal_close').click(); close modal trigger button

  return (
    <>
      {/* Modal  */}
      <input type="button" id="trigger_btn" data-bs-toggle="modal" data-bs-target="#PreloaderModal" hidden />
      <input type="button" id="modal_close" data-bs-dismiss="modal" data-bs-target="#PreloaderModal" aria-label="Close" hidden />
      <div className="modal text-center fade"  id="PreloaderModal" data-bs-backdrop="static" data-bs-keyboard="false"  tabIndex="-1" aria-labelledby="PreloaderModalLabel" aria-hidden="true">
        <div className="modal-dialog modal-sm modal-dialog-centered" data-bs-focus="false">
          <div className="modal-content p-4" style={{backgroundColor:"rgba(245,246,256,0.4);"}}>
            <div className="modal-body">
              <div class="spinner-border text-primary" role="status">
                <span class="visually-hidden">Loading...</span>
              </div>
              <div class="spinner-border text-secondary" role="status">
                <span class="visually-hidden">Loading...</span>
              </div>
              <div class="spinner-border text-success" role="status">
                <span class="visually-hidden">Loading...</span>
              </div>
              <div class="spinner-border text-danger" role="status">
                <span class="visually-hidden">Loading...</span>
              </div>
              <div class="spinner-border text-warning" role="status">
                <span class="visually-hidden">Loading...</span>
              </div>
              <div class="spinner-border text-info" role="status">
                <span class="visually-hidden">Loading...</span>
              </div>
              <div class="spinner-border text-light" role="status">
                <span class="visually-hidden">Loading...</span>
              </div>
              <div class="spinner-border text-dark" role="status">
                <span class="visually-hidden">Loading...</span>
              </div>
            </div>
           
                <p>Loading..............</p>
           
          </div>
        </div>
      </div>
    </>
  )
}

export default Loading
