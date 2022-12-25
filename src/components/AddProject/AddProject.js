import React,{useState} from 'react';
import { Link } from "react-router-dom";
import { useSelector,useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import './AddProject.css'
import { setAlert } from '../../actions/alert';
import { newStudyProject } from '../../actions/myDetails';
export default function AddProject() {

  const user = useSelector((state)=>(state.currentUserReducer))
  const dispatch=useDispatch();
  const navigate = useNavigate();
  const [title, setTitle] = useState();
  const [date, setDate] = useState();
  const [link, setLink] = useState();
  const [technology, setTechnologies] = useState([]);
  const [description, setDescription] = useState();
  const [currentTechnology, setCurrentTechnology] = useState();


  const handleTechnology = () => {
    if(currentTechnology != ""){
        setTechnologies([...technology, currentTechnology]);
        setCurrentTechnology("");
    }
  };
  const handleDeleteTechnology = (id) => {
    const newTechnology = technology.filter((d, idx) => idx != id);
    setTechnologies([...newTechnology]);
  };
  const handleSubmit = async(e)=>{
   
    e.preventDefault();
    const id =user?.user._id;
    dispatch(setAlert("Creating Study Project","info"))
    dispatch(newStudyProject({created_by:id,title,date,link,technology,description},navigate))
  }

  return (
    
        <div className="add-projects">
            <div>

            <div className="container ">
                <div className="project-add-form">
                <div className="project-add-header my-4">
                    Add Project
                </div>

                <form onSubmit={handleSubmit} >
                <input
                    type="text"
                    className="form-control my-3 project-add-form-input"
                    placeholder="Project Title"
                    value={title}
                    onChange={(e)=>setTitle(e.target.value)}
                />
                 <input
                    type="date"
                    className="form-control my-3 project-add-form-input"
                    placeholder="Date"
                    value={date}
                    onChange={(e)=>setDate(e.target.value)}
                />
                
                <input
                    type="text"
                    className="form-control my-3 project-add-form-input"
                    placeholder="Github or Drive Link"
                    value={link}
                    onChange={(e)=>setLink(e.target.value)}
                />
                <div className="card project-add-form-input">
                    <div className="card-body">
                    <div className="row mb-3 tech-add">
                        {technology.map((d, idx) => (
                        <div key={idx} className="width-tech">
                            <div className="px-2 py-1 tech">{d} <i
                                onClick={() => handleDeleteTechnology(idx)}
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
                            <input type="text" className="form-control" placeholder="Technologies used" onChange={(e)=>setCurrentTechnology(e.target.value)} value={currentTechnology} />
                        </div>
                        </div>
                        <div className="col-1">
                        <i
                            className="text-success fa-solid fa-plus "
                            onClick={handleTechnology}
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
                    value={description}
                    onChange={(e)=>setDescription(e.target.value)}
                ></textarea>
                <div className="text-end-profile">
                {/* <button type="button" class="btn btn-danger" data-bs-dismiss="modal">Close</button> */}
                <button className='btn btn-md my-3 project-add-submit-btn'>Submit</button>
                </div>
                </form>
                </div>
                
            </div>
            
            </div>

        </div>
    
  )
}

