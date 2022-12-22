import React, { useState } from "react";
import "./ProjectAdd.css";
import { Link } from "react-router-dom";  

function ProjectAdd() {
  const [title, setTitle] = useState();
  const [category, setCategory] = useState();
  const [budget, setBudget] = useState();
  const [skill, setSkill] = useState([]);
  const [date, setDate] = useState();
  const [Description, setDescription] = useState();
  const [currentSkill, setCurrentSkill] = useState("");


  const handleSkill = () => {
    if(currentSkill != ""){
        setSkill([...skill, currentSkill]);
        setCurrentSkill("");
    }
  };
  const handleDeleteSkill = (id) => {
    const newSkill = skill.filter((d, idx) => idx != id);
    setSkill([...newSkill]);
  };

  return (
    <div>
      <div className="project-add-back-btn">
        <Link to="/">
          <div className="d-flex">
            <i class="fa-solid fa-arrow-left back-btn"></i>
          </div>
        </Link>
      </div>
      <div className="container ">
        <div className="project-add-form">
          <div className="project-add-header my-4">
            Enter Your Project Details
          </div>
          <input
            type="text"
            className="form-control my-3 project-add-form-input"
            placeholder="Project Title"
          />
          <select
            class="form-select my-3 project-add-form-input"
            aria-label="Default select example"
          >
            <option selected>Category</option>
            <option value="1">One</option>
            <option value="2">Two</option>
            <option value="3">Three</option>
          </select>
          <input
            type="number"
            className="form-control my-3 project-add-form-input"
            placeholder="Budget"
          />
          <div className="card project-add-form-input">
            <div className="card-body">
              <div className="row mb-3">
                {skill.map((d, idx) => (
                  <div key={idx} className="d-flex m-3">
                    <div className="mx-2">{d}</div>
                    <div>
                      <i
                        onClick={() => handleDeleteSkill(idx)}
                        className="text-danger fa-solid fa-xmark"
                      ></i>
                    </div>
                  </div>
                ))}
              </div>
              <hr />
              <div
                className="row"
                style={{ display: "flex", alignItems: "center" }}
              >
                <div className="col-11">
                  <div className="form-group">
                     <input type="text" className="form-control" placeholder="Skill" onChange={(e)=>setCurrentSkill(e.target.value)} value={currentSkill} />
                  </div>
                </div>
                <div className="col-1">
                  <i
                    className="text-success fa-solid fa-plus "
                    onClick={handleSkill}
                  />
                </div>
              </div>
            </div>
          </div>
          <input
            type="date"
            className="form-control my-3 project-add-form-input"
            placeholder="Date"
          />
          <textarea
            placeholder="Description"
            className="form-control my-3 project-add-form-input"
            cols="30"
            rows="4"
          ></textarea>
          <div className="text-end">
          <button className='btn btn-md my-3 project-add-create-btn'>Create</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProjectAdd;
