import React, { useEffect } from 'react'
import './Loading.css'

const Loading = () => {
  useEffect(()=>{
    handleClick()
  },[])
   const handleClick = () => {
    document.getElementById('trigger_btn').click();
  };

  //        document.getElementById('modal_close').click(); close modal trigger button

  return (
    <>
      {/* Modal  */}
      <input type="button" id="trigger_btn"  data-bs-toggle="modal" data-bs-target="#PreloaderModal" hidden />
      <input type="button" id="modal_close" data-bs-dismiss="modal" data-bs-target="#PreloaderModal" aria-label="Close" hidden />
      <div className="modal fade"  id="PreloaderModal" tabindex="-1" aria-labelledby="PreloaderModalLabel" aria-hidden="true">
        <div className="modal-dialog" data-bs-focus="false">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="PreloaderModalLabel">Modal title</h1>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">
              ...
            </div>
            <div className="modal-footer">
             
            </div>
          </div>
        </div>
      </div>
      </>
)
}

export default Loading
