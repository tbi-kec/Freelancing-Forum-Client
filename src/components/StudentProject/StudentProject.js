import React, { useState } from "react";
import AddProject from "../AddProject/AddProject";
import { useSelector } from "react-redux";

export default function StudentProject({ project, user }) {
  const current = useSelector((state) => state.myDetailsReducer);
  const handleClick = () => {
    const model = document.getElementById("toggle_model_button_study_project");
    model.click();
  };

  return (
    <div className="student-card stud-project">
      <div className="title d-flex align-items-center gap-3">
        <h2>Study-Projects</h2>
        {project.length < 3 && current?.data?._id == user?._id &&
         <div className="add-skill" onClick={handleClick}>
              <i className="fa-solid fa-plus"></i>
          
          </div>
          }
      </div>
      

      {project.length ? (
        <div className=" student-projects mt-4">

          <div className="card-group">
            {project.map((p) => (
              <div className="inner-card" key={p._id}>
                <div className="inner-card-head">
                  <h2>{p?.title}</h2>
                  <p className="date">10/06/2021</p>
                </div>
                <div className="tech-used">
                  {p?.technology.map((e) => (
                    <>
                    <span>{e}</span>
                    <i className="fa pipe"> | </i>
                    </>
                  ))}
                </div>
                <div className="project-overview">
                  <p className="text-dark">{p?.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      ) : (
        <></>
      )}
{/* modal */}
      <div
        className="modal fade "
        data-bs-backdrop="static"
        id="toggle_model_study_project"
        tabIndex="-1"
        role="dialog"
        aria-labelledby="exampleModalLabel"
      >
        <div className="modal-dialog modal-dialog-centered modal-lg modal-md-xl">
          <div className="modal-content text-center">
            <AddProject />
            <input
              type="button"
              id="toggle_model_button_study_project"
              hidden
              data-bs-toggle="modal"
              data-bs-target="#toggle_model_study_project"
            />
          </div>
        </div>
      </div>
{/*  */}
    </div>
  );
}
