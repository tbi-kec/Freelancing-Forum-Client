import React, { useState } from "react";
import "./ProjectAdd.css";
import { Link } from "react-router-dom";
import {useDispatch,useSelector} from 'react-redux'
import { useNavigate } from "react-router-dom";
import { newProject } from "../../actions/project";
import { setAlert } from "../../actions/alert";

function ProjectAdd() {
  const navigate=useNavigate();
  const dispatch=useDispatch();
  const [title, setTitle] = useState();
  const [category, setCategory] = useState();
  const [stipend, setBudget] = useState();
  const [skills, setSkill] = useState([]);
  const [end_date, setDate] = useState();
  const [description, setDescription] = useState("");
  const [currentSkill, setCurrentSkill] = useState("");

  const user=useSelector((state)=>(state.currentUserReducer))
  const myself = useSelector((state)=>(state.myDetailsReducer))
  const handleSkill = () => {
    if(currentSkill !== ""){
        setSkill([...skills, currentSkill]);
        setCurrentSkill("");
    }
  };
  const handleDeleteSkill = (id) => {
    const newSkill = skills.filter((d, idx) => idx !== id);
    setSkill([...newSkill]);
  };

  const handleSubmit = async(e)=>{
    e.preventDefault();
    console.log(user);
    const id=user?.user._id || myself?.data._id;
    dispatch(setAlert("Creating project","info",2500))
    dispatch(newProject({createdBy:id,title,category,stipend,skills,end_date,description},navigate))

  }

  return (
    <div>
      <div className="project-add-back-btn">
        <Link to="/home">
          <div className="d-flex">
            <i className="fa-solid fa-arrow-left back-btn"></i>
          </div>
        </Link>
      </div>
      <div className="container ">
        <div className="project-add-form">
          <div className="project-add-header my-4">
            Enter Your Project Details
          </div>
          <form onSubmit={handleSubmit}>
          <input
            type="text"
            className="form-control my-3 project-add-form-input"
            placeholder="Project Title"
            value={title}
            onChange={e=>setTitle(e.target.value)}
          />
          <select
            class="form-select my-3 project-add-form-input"
            aria-label="Default select example"
            defaultValue={category}

            onChange={e=>setCategory(e.target.value)}
          >
            <option disabled hidden selected >Category</option>
            <option value="1">One</option>
            <option value="2">Two</option>
            <option value="3">Three</option>
          </select>
          <input
            type="number"
            className="form-control my-3 project-add-form-input"
            placeholder="Stipend"
            value={stipend}
            onChange={e=>setBudget(e.target.value)}
          />
          <div className="card project-add-form-input">
            <div className="card-body">
              <div className="row mb-3 d-flex">
                {skills.map((d, idx) => (
                  <div key={idx} className="d-flex m-3 skill-batch">
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
            value={end_date}
            onChange={e=>setDate(e.target.value)}
          />
          <textarea
            placeholder="Description"
            className="form-control my-3 project-add-form-input"
            cols="30"
            rows="4"
            onChange={e=>setDescription(e.target.value)}
          >{description}</textarea>
          <div className="text-end">
          <button className='btn btn-md my-3 project-add-create-btn'>Create</button>
          </div>
          </form>
        </div>
        
      </div>
    </div>
  );
}

export default ProjectAdd;
