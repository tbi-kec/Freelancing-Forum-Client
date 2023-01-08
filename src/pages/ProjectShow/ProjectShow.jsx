import React from 'react'
import profile from '../../assets/profileicon2.png'
import ProgressBar from '../../components/ProgressBar/ProgressBar'
import { useParams, useNavigate } from 'react-router-dom'
import { setAlert } from "../../actions/alert";
import { requestAdmin } from '../../actions/myDetails'
import { useSelector, useDispatch } from 'react-redux'
import moment from 'moment'
import { Link } from 'react-router-dom'
function ProjectShow() {
  const {id}=useParams();
  const navigate=useNavigate();
  const project=useSelector((state)=>(state.projectReducer))
  const dispatch=useDispatch();
  console.log(project);
  const user=useSelector((state)=>(state.myDetailsReducer))

  const handleAccept = (e,d_id) =>{
      e.preventDefault()
      setAlert("Requesting Admin", "info", 3000);
      dispatch(requestAdmin({ d_id, p_id:id }));
  }
  
  return (
    <div>   
        {project?.data?.filter(p=> p._id == id)?.map(p=>(    
               <div className="container my-3 " key={p._id}>
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
                <b>Stipend:</b> ₹{p.stipend}
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
            {(p.project_status==='created') ?
            <div className='p-3'>
                <div className='fs-4 mt-4 fw-bold'>Applicant</div>
                <div className='container my-3'>
                {p.requested.map((u,i)=>{
                  return(
                    <div className='card shadow'>
                      <div className="card-body px-5 d-flex justify-content-around">
                      <Link to={`/profile/${u._id}`} className='text-dark' >
                        <div className='fs-4'>{u.first_name}-{u.last_name}</div>
                      </Link>
                        <button className='btn btn-outline-primary' onClick={(e)=>handleAccept(e,u._id)} >Accept</button>
                      </div>
                    </div>
                  )
                })}
                </div>
            </div>
            :
            <div className='p-3'>
            <div className='fs-4 mt-4 fw-bold'>Progress</div>
                <ProgressBar c_id={p.createdBy._id} d_id={p.developer._id} p_id={p._id} status={p.project_status} key={project._id} />
            </div>
            }
          </div>
  ))}
          </div>

   
  )
}

export default ProjectShow