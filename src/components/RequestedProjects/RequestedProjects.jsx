import React, { useState } from 'react'
import { useEffect } from 'react'
import { useSelector } from 'react-redux'
import './RequestedProjects.scss'
import RequestModal from "../../components/AdminModals/RequestModal";

const RequestedProjects = () => {
  const project = useSelector((state) => (state.adminReducer))
  const [projects, setProjects] = useState(null)
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
  /*
  project name
  client
  freelancer
  admin requested date
  accept/reject
  */
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
                  <td>{p.title}</td>
                  <td>{p.createdBy.first_name} {p.createdBy.last_name}</td>
                  <td>{p.developer.first_name} {p.developer.last_name}</td>
                  <td>Need to change backend</td>
                  <td>
                    <button className='btn btn-success'>Accept</button>
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
