import React,{useState} from 'react'
import { useSelector } from 'react-redux';
import { Link } from "react-router-dom";
import AddProject from '../../components/AddProject/AddProject';
import Banner from '../../components/Banner/Banner'
import ProfileBio from '../../components/ProfileBio/ProfileBio'
import Skills from '../../components/Skills/Skills'
import './StudentProfile.css'

export default function StudentProfile() {
    const [studyProject,setStudyProject]=useState([])
    const [title, setTitle] = useState();
    const [category, setCategory] = useState();
    const [budget, setBudget] = useState();
    const [skill, setSkill] = useState([]);
    const [date, setDate] = useState();
    const [Description, setDescription] = useState();
    const [currentSkill, setCurrentSkill] = useState("");
    const users=useSelector((state)=>(state.userReducer))
    const handleSkill = () => {
        if(currentSkill != ""){
            setSkill([...skill, currentSkill]);
            setCurrentSkill("");
        }
      };

      const handleClick = () => {
        const model = document.getElementById('toggle_model_button')
        model.click();
      }

  return (
    <div className='student-profile'>
        <div className="back">
        <Link to="/Home">
            <i class="fa-sharp fa-solid fa-arrow-left"></i>
        </Link>
        </div>
        <Banner/>
        
        <ProfileBio/>

        <Skills/>



        <div className="modal fade " data-bs-backdrop="static" id="toggle_model" tabindex="-1" role='dialog' aria-labelledby="exampleModalLabel" >
                <div className="modal-dialog modal-dialog-centered modal-lg">
                    <div className="modal-content text-center">
                        <AddProject/>           
                        <input type='button' id='toggle_model_button' hidden  data-bs-toggle="modal" data-bs-target="#toggle_model" />
                    </div>
                </div>
            </div>

        <div className="student-card work-history">
            <div className="title">
                <h2>
                Work - History
                </h2>
            </div>
            <div className="card-group">
                <div className="inner-card">
                    <div className="inner-card-head">
                        <h2>Driver Drowsiness Project</h2>
                    </div>
                    <div className="domain">
                       <span>Aritificial Inetlligence</span>
                       <i class="fa-solid fa-C  "></i>
                       <span>AI and ML</span>
                    </div>
                    <div className="posted-by">
                        Posted by LingashKumar
                    </div>
                </div>

                <div className="inner-card">
                    <div className="inner-card-head">
                        <h2>Driver Drowsiness Project</h2>
                    </div>
                    <div className="domain">
                       <span>Aritificial Inetlligence</span>
                       <i class="fa-solid fa-circle"></i>
                       <span>AI and ML</span>
                    </div>
                    <div className="posted-by">
                        Posted by LingashKumar
                    </div>
                </div>

                <div className="inner-card">
                    <div className="inner-card-head">
                        <h2>Driver Drowsiness Project</h2>
                    </div>
                    <div className="domain">
                       <span>Aritificial Inetlligence</span>
                       <i class="fa-solid fa-circle"></i>
                       <span>AI and ML</span>
                    </div>
                    <div className="posted-by">
                        Posted by LingashKumar
                    </div>
                </div>
            </div>
        </div>


        { studyProject.length!=0 ?
               
                        <>
                         <div className="student-card add-project">
                            <div className="content-add w-100">
                                ADD YOUR STUDY PROJECT TO COMPLETE YOUR PROFILE
                            </div>
                                <div className="add-skill-div" onClick={handleClick}>
                                    <div className='add-skill'>
                                    <i class="fa-solid fa-plus"></i>
                                </div>    
                            </div>
                        </div>          
                        </>
                   :
                    <div className="student-card student-projects">
                        <div className="title">
                            <h2>
                            Study-Projects
                            </h2>
                        </div>
                        <div className="card-group">
                            <div className="inner-card">
                                <div className="inner-card-head">
                                    <h2>Driver Drowsiness Project</h2>
                                    <p className="date">10/06/2021</p>
                                </div>
                                <div className="tech-used">
                                <span>React Js</span>
                                <i class="fa pipe"> | </i>
                                <span>Mongo DB</span>
                                <i class="fa pipe"> | </i>
                                <span>Mongo DB</span>
                                </div>
                                <div className="project-overview">
                                <p className='text-dark'>
                                I am a freelance software engineer. I have more than 8 years of experience in programming and designing UI. I worked on front-end and as well as back-end of many high traffic websites and apps.
                                </p>
                                </div>
                            </div>   
                        </div>
                    </div>
                }
        

        <div className="student-card project-history">
            <div className="title">
                
                Project - History
            </div>
            <div className="card-group">
                <div className="inner-card">
                    <div className="inner-card-head">
                        <h2>Driver Drowsiness Project</h2>
                    </div>
                    <div className="domain">
                       <span>Aritificial Inetlligence</span>
                       <i class="fa-solid fa-circle"></i>
                       <span>AI and ML</span>
                    </div>
                    <div className="posted-by">
                        Worked with  Rohith,Linga,Sujith
                    </div>
                </div>
            </div>
        </div>

    </div>
  )
}

