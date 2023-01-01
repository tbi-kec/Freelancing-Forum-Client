import React from "react";
import profile from '../../assets/profileicon2.png'
import  './ProjectCard.css'
import moment from 'moment'
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

function ProjectCard({project,constant}) {
  const shortname=constant.dept_short.find(item => item.dept=== project.createdBy.department)
  const user =useSelector((state)=>(state.currentUserReducer))
  const navigate=useNavigate();
  const show_modal = () => {
    const modal = document.getElementById(`toggle_model_${project._id}`)
    modal.click()
  }
  const handleNavigate = ()=>{
      navigate(`/profile/${project.createdBy._id}`)
  }
  return (
    <>
      {/* modal- request*/}
      <div className="modal fade "  id="toggle_model_request" tabIndex="-1" role='dialog' aria-labelledby="exampleModalLabel" >
        <div className="modal-dialog modal-dialog-centered modal-xl">
          <div className="modal-content text-center ">
    
          <div className="fs-4 m-5">You are requesting for the <b>{project.title}</b> project</div>
          <div className="text-center">
          <button
              className="btn btn-md m-3 px-4 project-add-submit-btn"
              data-bs-dismiss="modal"
              aria-label="Close"
            >
              OK
            </button>
          </div>
            <input type='button' id='toggle_model_request' hidden data-bs-toggle="modal" data-bs-target="#toggle_model_request" />
          </div>
        </div>
      </div>
 
      {/* modal - confirmation */}
      <div className="modal fade "  id={`toggle_model-${project._id}`} tabIndex="-1" role='dialog' aria-labelledby="exampleModalLabel" >
        <div className="modal-dialog modal-dialog-centered modal-xl">
          <div className="modal-content ">
            <div className="row">
              <div className="col-8 ps-4">
                <h3 className='mt-3 mb-0 fw-bold'>{project?.title}</h3>
                <div className="fw-bold"><span>{shortname.dept}</span><span className=" mx-3">•</span><span>{shortname.short}</span></div>
              </div>
              <div className="col-4">
                <div className="text-end pt-3 pe-4">{moment(project.created_on).fromNow()}</div>
              </div>
            </div>
            <div className='p-3'>
              {project.description}
            </div>
            <div className="row ps-3">
              <div className="skill d-flex justify-content-start gap-4 ">
                {project.skills.map((s,idx)=>(
                    <div className={` skillset px-2 skill-${'beginner'}`} key={idx} >
                      <p>{s}</p>
                </div>
                ))}       
              </div>
            </div>
            <div className=" px-4 mt-3 d-flex justify-content-start">
              <h5 className=" text-end pt-2 ">Posted By : <span data-bs-dismiss="modal" aria-label="close" className="fs-3 " onClick={handleNavigate}>{project.createdBy.first_name} {project.createdBy.last_name} </span></h5>
              <div className="mx-2 text-start">
                <img src={profile} height="50px" width='50px' alt="" />
              </div>
            </div>
            <div className="ms-auto me-5 my-5">
              {user?.user._id !==project.createdBy._id && project.project_status=="created" &&
              <div className="btn btn-success px-5 fw-bold"  data-bs-toggle="modal"
              data-bs-target="#toggle_model_request" >REQUEST</div>
}
            </div>
            <input type='button' id='toggle_model_button' hidden data-bs-toggle="modal" data-bs-target="#toggle_model" />
          </div>
        </div>
      </div>

      {/* card */}
      <div className="card shadow my-4 pointer" onClick={show_modal}>
        <input type="button" hidden id={`toggle_model_${project._id}`} data-bs-toggle="modal" data-bs-target={`#toggle_model-${project._id}`} />
        <div className="card-body px-4">
          <div className="project-title fs-4 my-1">{project.title}</div>
          <div className="project-holder-department my-2 fw-bold">
            <span>{shortname.dept}</span><span className="project-title mx-3">•</span><span>{shortname.short}</span>
          </div>
          <div className="project-dept">
           {project.description}
          </div>
          <div className="text-end project-post-time">{moment(project.created_on).fromNow()}</div>
        </div>
      </div>
    </>

  );
}

export default ProjectCard;
