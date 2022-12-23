import React,{useState} from 'react';
import { Link } from "react-router-dom";

import './AddProject.css'

export default function AddProject() {

    
  const [title, setTitle] = useState();
  const [date, setDate] = useState();
  const [fileLink, setFileLink] = useState();
  const [technologies, setTechnologies] = useState();
  const [skill, setSkill] = useState([]);
 
  const [Description, setDescription] = useState();
  const [currentSkill, setCurrentSkill] = useState();

  
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
    <>
        <div className="add-projects">
            <div>

            <div className="container ">
                <div className="project-add-form">
                <div className="project-add-header my-4">
                    Add Project
                </div>

                <form action="">
                <input
                    type="text"
                    className="form-control my-3 project-add-form-input"
                    placeholder="Project Title"
                />
                 <input
                    type="date"
                    className="form-control my-3 project-add-form-input"
                    placeholder="Date"
                />
                
                <input
                    type="text"
                    className="form-control my-3 project-add-form-input"
                    placeholder="Attach file link"
                />
                <div className="card project-add-form-input">
                    <div className="card-body">
                    <div className="row mb-3 tech-add">
                        {skill.map((d, idx) => (
                        <div key={idx} className="width-tech">
                            <div className="px-2 py-1 tech">{d} <i
                                onClick={() => handleDeleteSkill(idx)}
                                className="text-danger fa-solid fa-xmark"
                            ></i></div>
                            
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
                            <input type="text" className="form-control" placeholder="Technologies used" onChange={(e)=>setCurrentSkill(e.target.value)} value={currentSkill} />
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
               
                <textarea
                    placeholder="Description"
                    className="form-control my-3 project-add-form-input"
                    cols="30"
                    rows="4"
                ></textarea>
                <div className="text-end">
                <button type="button" class="btn btn-danger" data-bs-dismiss="modal">Close</button>
                <button className='btn btn-md my-3 project-add-submit-btn'>Submit</button>
                </div>
                </form>
                </div>
                
            </div>
            
            </div>

        </div>
    </>
  )
}

