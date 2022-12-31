import React from 'react'
import profile from '../../assets/profileicon2.png'
import ProgressBar from '../../components/ProgressBar/ProgressBar'
import { useParams, useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'
import moment from 'moment'
import { Link } from 'react-router-dom'
function ProjectShow() {
  const {id}=useParams();
  const navigate=useNavigate();
  const project=useSelector((state)=>(state.projectReducer))
  return (

    <div>   
        {project?.data?.filter(p=> p._id == id)?.map(p=>(    
               <div className="container my-3 ">
            <div className="row ">
              <div className="col-12 ps-4">
                <h3 className='mt-3 mb-0 fw-bold mb-3'>{p.title}</h3>
                <div className="fw-bold"><span>{p.createdBy.department}</span><span className=" mx-3">•</span><span>IT</span></div>
              </div>
            </div>
            <div className='p-3'>
             {p.description}
            </div>
            <div className='p-3'>
                <b>Deadline:</b> {moment(p.end_date).fromNow()}
            </div>
            <div className='p-3'>
                <b>Stipend:</b> {p.stipend}
            </div>
            <div className="row ps-3">
                <div className='fs-5 fw-bold my-4'>Skills Required</div>
              <div className="skill d-flex justify-content-start gap-4 ">
                {p.skills.map((e,i)=>{
                  return(
                    <div className="skillset px-2 skill-beginner text-light" >{e}</div>
                  )
                })}
              </div>
            </div>
            <div className=" px-4 mt-3 d-flex justify-content-start">
              <h5 className=" text-end pt-2 ">Posted By : <span data-bs-dismiss="modal" aria-label="close" className="fs-3 ">
                <Link to={`/profile/${p.createdBy._id}`}>{p.createdBy.first_name} - {p.createdBy.last_name}</Link></span></h5>
              <div className="mx-2 text-start">
                <img src={profile} height="50px" width='50px' alt="" />
              </div>
            </div>
            {/* <div className='p-3'>
                <div className='fs-4 mt-4 fw-bold'>Applicant</div>
          
            </div> */}
            <div className='p-3'>
            <div className='fs-4 mt-4 fw-bold'>Progress</div>
             { console.log(p.project_status)}
                <ProgressBar status={p.project_status} />
            </div>
          </div>
  ))}
          </div>

   
  )
}

export default ProjectShow