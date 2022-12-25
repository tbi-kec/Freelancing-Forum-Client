import React,{useState} from 'react'
import AddProject from '../AddProject/AddProject';

export default function StudentProject() {

    const handleClick = () => {
        const model = document.getElementById('toggle_model_button')
        model.click();
      }

    const [studyProject,setStudyProject]=useState([])

  return (
    <>
        { studyProject.length==0 ?
               
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

<div className="modal fade " data-bs-backdrop="static" id="toggle_model" tabindex="-1" role='dialog' aria-labelledby="exampleModalLabel" >
            <div className="modal-dialog modal-dialog-centered modal-lg">
                <div className="modal-content text-center">
                    <AddProject/>           
                    <input type='button' id='toggle_model_button' hidden  data-bs-toggle="modal" data-bs-target="#toggle_model" />
                </div>
            </div>
        </div>


    </>
  )
}
