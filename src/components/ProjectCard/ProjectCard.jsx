import React from "react";
import profile from '../../assets/profileicon2.png'
import  './ProjectCard.css'
import moment from 'moment'
import { Link } from "react-router-dom";
const show_modal = () => {
  const modal = document.getElementById('toggle_model_button')
  modal.click()
}

function ProjectCard({project,constant}) {
  const shortname=constant.dept_short.find(item => item.dept=== project.createdBy.department)

  return (
    <>
      {/* modal */}
      <div className="modal fade "  id="toggle_model" tabIndex="-1" role='dialog' aria-labelledby="exampleModalLabel" >
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
              <h5 className=" text-end pt-2 ">Posted By <Link to="/profile/1"><span className="fs-3 ">{project.createdBy.first_name} {project.createdBy.last_name} </span></Link></h5>
              <div className="mx-2 text-start">
                <img src={profile} height="50px" width='50px' alt="" />
              </div>
            </div>

            <div className="ms-auto me-5 my-5">
              <div className="btn btn-success px-5 fw-bold" >REQUEST</div>
            </div>

            <input type='button' id='toggle_model_button' hidden data-bs-toggle="modal" data-bs-target="#toggle_model" />

          </div>
        </div>
      </div>

      {/* card */}
      <div className="card shadow my-4" onClick={show_modal}>
        <input type="button" hidden id='toggle_model_button' data-bs-toggle="modal" data-bs-target="#toggle_model" />
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
