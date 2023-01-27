import React, { useState } from 'react'
import { useEffect } from 'react'
import { useSelector,useDispatch } from 'react-redux'
import {Link,useNavigate} from 'react-router-dom'
import './RequestedProjects.scss'
import RequestModal from "../../components/AdminModals/RequestModal";
import { setAlert } from '../../actions/alert'
import { respondToRequest } from '../../actions/admin'
const RequestedProjects = () => {
  const navigate = useNavigate();
  const dispatch=useDispatch()
  const project = useSelector((state) => (state.adminReducer))
  const [projects, setProjects] = useState([])
  const [responded, setResponded] = useState(false)

  const setData = () => {
    const data = project.data.filter(p => p.project_status == 'pending-admin');
    setProjects([...data])
  }
  useEffect(() => {
    if (project && project.data != null) {
      setData();
    }
  }, [project])

  if (projects == null) {
    return <h1>Loading ...</h1>
  }


  const handleAccpet = (e, id) => {
    e.preventDefault();
    setResponded(true)
    dispatch(setAlert("Accepting Project", "info", 2000))
    dispatch(respondToRequest({ status: "accepted", p_id: id }, navigate))
    
  }
  const handleResponse= ()=>{
    setResponded(false)
  }
  if(responded){
    return <h1>Loading</h1>
  }

  return (
      <div className='container mt-5 text-center'>
        <table className="table table-stripped">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Project Name</th>
              <th scope="col">Client</th>
              <th scope="col">Freelancer</th>
              <th scope="col">Requested for Admin</th>
              <th scope="col">Action</th>
            </tr>
          </thead>
          <tbody>
            {projects == null || projects?.length == 0 ?
              <tr >
                <td className='py-5 fw-bold' colSpan="6">No Projects Request Found</td>
              </tr> : 
              projects.map((p, i) => (
                <tr key={p._id}>
                  <th scope="row">{i + 1}</th>
                  <td><Link to={`/project/show/${p._id}`}  className="text-dark ">{p.title}</Link></td>
                  <td><Link to={`/profile/${p.createdBy._id}`} className="text-dark ">{p.createdBy.first_name} {p.createdBy.last_name}</Link></td>
                  <td><Link to={`/profile/${p.developer._id}`} className="text-dark ">{p.developer.first_name} {p.developer.last_name}<span className="badge bg-primary mx-3">{p.developer?.onbord_project?.length}</span></Link></td>
                  <td>Need to change backend</td>
                  <td>
                    <button className='btn btn-success mx-3'disabled={responded} onClick={e=>handleAccpet(e,p._id)}>Accept</button>
                    <button className='btn btn-danger mx-3' disabled={responded} onClick={()=>setResponded(true)}  data-bs-toggle="modal" data-bs-target={`#toggle_model_project_request-${p._id}`}>Reject</button>
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
         {
        projects.map((p, i) => {
          return (
            <RequestModal handleResponse={handleResponse} key={p._id} id={p._id} />
          )
        })}
      </div>
   
  )
}

export default RequestedProjects
