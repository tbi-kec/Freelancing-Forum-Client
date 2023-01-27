import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux'
import moment from 'moment';
const ProgressProjects = () => {
  const project = useSelector((state) => (state.projectReducer));
  const [projects, setProjects] = useState(null);
 
  useEffect(() => {
    if (project && project.data !== null){
        const getData = () => {
          const data = project.data.filter(p => p.project_status === 'assigned' || p.project_status === 'partial' || p.project_status === 'testing')
            setProjects([...data])
     }
          getData();
    }
  }, [project])
  if (projects == null) {
    return <h1>Loading...</h1>
  }
  
  return (
    <div>
      <div className='container mt-5 text-center'>
        <table class="table  table-stripped">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Project Name</th>
              <th scope="col">Client</th>
              <th scope="col">Freelancer</th>
              <th scope="col">Current Status</th>
              <th scope="col">End Date</th>
            </tr>
          </thead>
          <tbody>
            {projects === null || projects.length === 0 ?
              <tr >
                <td className='py-5 fw-bold' colSpan="6">No Projects is On Progress </td>
              </tr> : 
              projects.map((p, i) => (
                <tr key={p._id}>
                  <th scope="row">{i + 1}</th>
                  <td><Link to={`/project/show/${p._id}`} >{p.title}</Link></td>
                  <td><Link to={`/profile/${p.createdBy._id}`}>{p.createdBy.first_name} {p.createdBy.last_name}</Link></td>
                  <td><Link to={`/profile/${p.developer._id}`}>{p.developer.first_name} {p.developer.last_name}</Link></td>
                  <td>{p.project_status}</td>
                  <td>{moment(p.end_date).calendar()}</td>
                </tr>
              ))}
          </tbody>
        </table>

      </div>
    </div>
  )
}

export default ProgressProjects
