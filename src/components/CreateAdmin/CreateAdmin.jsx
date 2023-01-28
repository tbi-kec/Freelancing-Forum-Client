import React,{useState} from 'react'
import { useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { createAdmin } from '../../actions/admin'
import { setAlert } from '../../actions/alert'
import './CreateAdmin.scss'
const CreateAdmin = () => {
  const [first_name,setFirstName]=useState('')
  const [last_name,setLastName]=useState('')
  const [mobile_number,setMobile]=useState()
  const [password,setPassword]=useState()
  const [kongu_email,setKongu]=useState()
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleSubmit = (e)=>{
    e.preventDefault();
    dispatch(setAlert("Create new Admin User","info"))
    dispatch(createAdmin({first_name,last_name,mobile_number,password,kongu_email},navigate));
  }

  return (
    <div className="create-admin-container container my-5">
        <div className="row my-5">
          <div className="col-sm-12 col-md-8 offset-md-2">
              <div className="card">
                <div className="card-body">
                  <h3 className="text-center my-5">Create Admin</h3>
                  <form className='row' onSubmit={handleSubmit}>
                      <div className="form-group mb-3 col-6">
                        <input type="text" className="form-control"  placeholder='First name' value={first_name} onChange={e=>setFirstName(e.target.value)}/>
                      </div>
                      <div className="form-group mb-3 col-6">
                          <input type="text" id="text" className="form-control" placeholder='Last Name' value={last_name} onChange={e=>setLastName(e.target.value)} />
                      </div>
                      <div className="form-group mb-3 col-12">
                          <input type="email" value={kongu_email} placeholder="Kongu Email" className="form-control" onChange={e=>setKongu(e.target.value)}/>
                      </div>
                      <div className="form-group mb-3 col-12">
                        <input type="text" className="form-control" placeholder='Mobile Number' value={mobile_number} onChange={e=>setMobile(e.target.value)}  />
                      </div>
                      <div className="form-group mb-3 col-12">
                        <input type="password" className="form-control" placeholder="Password" value={password} onChange={e=>setPassword(e.target.value)} />
                      </div>
                      <div className="d-flex justify-content-end">
                          <button className="btn btn-success">Create </button>
                      </div>
                  </form>
                </div>
              </div>
          </div>
        </div>
    </div>
  )
}

export default CreateAdmin