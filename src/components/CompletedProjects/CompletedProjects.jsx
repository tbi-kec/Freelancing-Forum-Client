import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import moment from 'moment';
import { Link } from 'react-router-dom';
const CompletedProjects = () => {
  const project = useSelector((state) => (state.adminReducer));
  const [projects, setProjects] = useState(null);
  const getData = () => {
    const data = project.data.filter(p => p.project_status === 'completed');
    setProjects([...data]);
  }
  useEffect(() => {
    if (project && project.data)
      getData();
  }, [project])

  // if (projects == null || projects.length==0)
  //   return <h1>Loading ...</h1>

  /*
    title
    client
    freelancer name
    end date
    completed on
   */
  return (
    <div className='container mt-5 text-center'>
      <table class="table table-hover table-stripped">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Project Name</th>
            <th scope="col">Client</th>
            <th scope="col">Freelancer</th>
            <th scope="col">Drive Link</th>
            <th scope="col">End Date</th>
            <th scope="col">Completed On</th>
          </tr>
        </thead>
        <tbody>
        { projects === null || projects.length===0 ?
        <tr >
          <td className='py-5 fw-bold' colSpan="6">No Projects Found</td>
        </tr>:
            projects.map((p, i) => (
            <tr key={p._id}>
              <th scope="row">{i + 1}</th>
              <td><Link to={`/project/show/${p._id}`}>{p.title}</Link></td>
              <td><Link to={`/profile/${p.createdBy._id}`}>{p.createdBy.first_name} {p.createdBy.last_name}</Link></td>
              <td><Link to={`/profile/${p.developer._id}`}>{p.developer.first_name} {p.developer.last_name}</Link></td>
              <td><a href={p?.drive_link} target="_blank" rel="noreferrer noopener">View</a></td>
              <td>{moment(p.end_date).calendar()}</td>
              <td>{moment(p.completed_on).calendar()}</td>
            </tr>
          ))
          }
        </tbody>
      </table>

    </div>
  )
}

export default CompletedProjects
