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
    if(technology.length==0){
        dispatch(setAlert("Skills is required","warning"));
        return;
    }
    const id =user?.user._id;
    console.log(id)
    dispatch(setAlert("Creating Study Project","info"))
    dispatch(newStudyProject({createdBy:id,title,date,link,technology,description},navigate))
    document.getElementById("close_btn").click();
  }

  return (
    
        <div className="add-projects">
            <div>

            <div className="container ">
                <div className="project-add-form">
                <div className="project-add-header d-flex flex-start">
                    Add Your Project
                </div>

                <form onSubmit={handleSubmit} >
                <input type="button" id="close_btn" data-bs-dismiss="modal" aria-label="Close" hidden/>
                <input
                    type="text"
                    className="form-control my-3 project-add-form-input"
                    placeholder="Project Title"
                    value={title}
                    onChange={(e)=>setTitle(e.target.value)}
                    required
                />
                 <input
                    type="date"
                    className="form-control my-3 project-add-form-input"
                    placeholder="Date"
                    value={date}
                    onChange={(e)=>setDate(e.target.value)}
                    required
                />
                
                <input
                    type="text"
                    className="form-control my-3 project-add-form-input"
                    placeholder="Github or Drive Link"
                    value={link}
                    onChange={(e)=>setLink(e.target.value)}
                    required
                />
                <div className="card project-add-form-input">
                    <div className="card-body">
                    <div className="row mb-3 tech-add">
                        {technology.map((d, idx) => (
                        <div key={idx} className="width-tech mx-2">
                                <div>
                                     {d}
                                </div>
                                <div>
                                     <i onClick={() => handleDeleteTechnology(idx)} className="text-light fa-solid fa-xmark" />
                                </div>
                            
                            
                        </div>
                        ))}
                    </div>
                    <hr />
                    <div
                        className="row d-flex align-items-center"
    
                    >
                        <div className="col-sm-8 col-md-11">
                            <div className="form-group">
                                <input type="text" className="form-control" placeholder="Technologies used" onChange={(e)=>setCurrentTechnology(e.target.value)} value={currentTechnology} />
                            </div>
                        </div>
                        <div className="col-sm-4 col-md-1">
                        <i
                            className="text-success fa-solid fa-plus "
                            onClick={handleTechnology}
                        />
                        </div>
                    </div>
                    </div>
                </div>
               
                <textarea
                    placeholder="Tell us about your project"
                    className="form-control my-3 project-add-form-input"
                    cols="30"
                    rows="4"
                    value={description}
                    onChange={(e)=>setDescription(e.target.value)}
                    required
                    minLength={10}
                ></textarea>
                <div className="text-end-profile">
                <button type="button" class="btn btn-danger" data-bs-dismiss="modal"  aria-label="Close">Close</button>
                <button className='btn btn-md my-3 project-add-submit-btn' >Submit</button>
                </div>
                </form>
                </div>
                
            </div>
            
            </div>

        </div>
    
  )
}

