import React from 'react'
import {useSelector} from 'react-redux'
import './Loading.scss'
const Loading = () => {
 const loading = useSelector((state)=>(state.loadingReducer))

 
return (
    <div className={loading.loading ?'loading-container':""}>
      {loading.loading && 
              <div className="row">
                <div className="col-6">
                    <div className="card shadow" style={{width:"18rem"}}>
                        <div className="card-body text-center">
                            <p>PLEASE WAIT</p>
                            <div class="spinner-border  text-success" role="status">
                              <span class="visually-hidden">Loading...</span>
                            </div>
                        </div>
                              </div>
                          </div>
                        </div>
      }
    </div>
  )
}

export default Loading


