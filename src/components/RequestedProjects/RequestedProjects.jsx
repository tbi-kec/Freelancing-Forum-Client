import React, { useState } from 'react'
import { useEffect } from 'react'
import { useSelector } from 'react-redux'
import {Link} from 'react-router-dom'
import './RequestedProjects.scss'
import RequestModal from "../../components/AdminModals/RequestModal";

const RequestedProjects = () => {
  const project = useSelector((state) => (state.adminReducer))
  const [projects, setProjects] = useState(null)
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

  const acceptRequest = (e)=>{
    setResponded(true);
    e.preventDefault();
  

  }
  /*
  project name
  client
  freelancer
  admin requested date
  accept/reject
  */
 console.log(projects);
  return (
    <>
      {/* request model */}
      {
        projects.map((p, i) => {
          return (
            <RequestModal id={p._id} />
          )
        })}
      <div className='container mt-5 text-center'>
        <table class="table table-hover table-stripped">
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
            {projects == null || projects.length == 0 ?
              <tr >
                <td className='py-5 fw-bold' colSpan="6">No Projects Request Found</td>
              </tr> : 
              projects.map((p, i) => (
                <tr key={p._id}>
                  <th scope="row">{i + 1}</th>
                  <td><Link to={`/project/show/${p._id}`}  className="text-dark ">{p.title}</Link></td>
                  <td><Link to={`/profile/${p.createdBy._id}`} className="text-dark ">{p.createdBy.first_name} {p.createdBy.last_name}</Link></td>
                  <td><Link to={`/profile/${p.developer._id}`} className="text-dark ">{p.developer.first_name} {p.developer.last_name}</Link></td>
                  <td>Need to change backend</td>
                  <td>
                  {!responded &&
                    <button className='btn btn-success' onClick={acceptRequest}>Accept</button>
                  }
                    <button className='btn btn-danger' data-bs-toggle="modal" data-bs-target={`#toggle_model_project_request-${p._id}`}>Reject</button>
                  </td>
                </tr>
              ))}
          </tbody>
        </table>

      </div>
    </>
  )
}

export default RequestedProjects
