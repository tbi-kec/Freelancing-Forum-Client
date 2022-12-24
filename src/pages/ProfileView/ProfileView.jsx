import React,{ useState } from 'react'
import { Link } from 'react-router-dom'
// import './ProfileView.css'
// import '../ProfileForm/ProfileForm.css'
import 'https://kit.fontawesome.com/788214b7f0.js'
import human from '../../assets/human.png'
import profileTop from '../../assets/profilepage.png'
import profile from '../../assets/profileicon2.png'
import tick from '../../assets/verified.png'
import Edit from '../../assets/edit.png'
import active from '../../assets/Color-star.png'
import dull from '../../assets/dull-star.png' 
import ProfileForm from '../ProfileForm/ProfileForm'
import { getElementError } from '@testing-library/react'
const ProjectView = () => {
    const [show,setShow]=useState(true);
    const [edit,setEdit]=useState(-100)
    console.log("hi")
        var Data= {
            Name: "SANJAY S",
            Dept:"Artificial Intelligence",
            Domain:"Web Developer",
            About:"I am a freelance software engineer. I have more than 8 years of experience in programming and designing UI. I worked on front-end and as well as back-end of many high traffic websites and apps.",
            Skills:["HTML","CSS","JS","Python","C++","React.js"],
            Work:[{
                Title:"Driver Drowsiness Project",
                Dept:"Artificial Intelligence",
                Domain:"AI and ML",
                Posted:"LingashKumar",
                Rating:4
            },{
                Title:"Driver Drowsiness Project",
                Dept:"Artificial Intelligence",
                Domain:"AI and ML",
                Posted:"LingashKumar",
                Rating:4
            },
            {
                Title:"Driver Drowsiness Project",
                Dept:"Artificial Intelligence",
                Domain:"AI and ML",
                Posted:"LingashKumar",
                Rating:4
            }],
            Study:[{
                Title:"Driver Drowsiness Project",
                Technologies:["React.js","Bootstrap","Mongo DB","Angular"],
                Discription:"I am a freelance software engineer. I have more than 8 years of experience in programming and designing UI. I worked on front-end and as well as back-end of many high traffic websites and apps.",
                link:"https://github.com/SGSANJAY044",
                Date: new Date("2022-03-25")
            },
            {
                Title:"Driver Drowsiness Project",
                Technologies:["React.js","Bootstrap","Mongo DB","Angular"],
                Discription:"I am a freelance software engineer. I have more than 8 years of experience in programming and designing UI. I worked on front-end and as well as back-end of many high traffic websites and apps.",
                link:"https://github.com/SGSANJAY044",
                Date: new Date("2022-03-25")
            },
            {
                Title:"Driver Drowsiness Project",
                Technologies:["React.js","Bootstrap","Mongo DB","Angular"],
                Discription:"I am a freelance software engineer. I have more than 8 years of experience in programming and designing UI. I worked on front-end and as well as back-end of many high traffic websites and apps.",
                link:"https://github.com/SGSANJAY044",
                Date: new Date("2022-03-25")
            }],
            Project:[{
                Title:"Driver Drowsiness Project",
                Dept:"Artificial Intelligence",
                Domain:"AI and ML",
                Worked:["Rohith","Linga","Sujit"],
            },
            {
                Title:"Driver Drowsiness Project",
                Dept:"Artificial Intelligence",
                Domain:"AI and ML",
                Worked:["Rohith","Linga","Sujit"],
            },
            {
                Title:"Driver Drowsiness Project",
                Dept:"Artificial Intelligence",
                Domain:"AI and ML",
                Worked:["Rohith","Linga","Sujit"],
            }]
        }
    return (
        <div className='outer-container'>
            <div className='Container'style={{transform:`translateY(${edit}vh)`}}>
            <div className="Form p-5">
                <div className="Title">Edit Profile</div>
                <form className='row g-2'>
                        <div className="form-group col-md-12 col-lg-6">
                            <input type="text" placeholder='First Name' className='form-control' />
                        </div>
                        <div className="form-group col-md-12 col-lg-6">
                            <input type="text" placeholder='Last Name' className='form-control' />
                        </div>
                        <div className="form-group col-12">
                            <input type="text" placeholder='Mobile' className='form-control' />
                        </div>
                        <div className="form-group col-12">
                            <input type="email" placeholder='Email Id' className='form-control' />
                        </div>
                        <div className="form-group">
                            <textarea className='form-control' placeholder='Description' cols="10" rows="3">
                               
                            </textarea>
                        </div>
                        <div className="d-grid gap-2 ">
                            <button className="btn shadow">SignUp</button>
                        </div>
                    </form>
            </div>
        </div>
        <div className="row ">
            <div className="col-12 image-container">
                <div className='back'><Link to="/Home">  
                <i class="fa-solid fa-2x fa-arrow-left"></i>
                </Link></div>
                <img src={profileTop} alt="image-top" />
            </div>
            <div className="Profile-Container">
                <div className='row Profile-Conatiner-Top'>
                    <div className='col-3 p-3 Profile-icon'>
                        <img src={profile} alt="Profile-img" />
                    </div>
                    <div className='col-sm-9 Profile-Name-Container'>
                        <div className='row'>
                            <div className='col-sm-9 Profile-Name'>{Data.Name}</div>
                            <div className='col-4 ms-md-auto Edit-panal'>
                                <img src={tick} alt="Verified"/>
                                <div onClick={() => setEdit(0)}>
                                <i class="fa-solid fa-lg fa-pen"></i>
                                </div>
                            </div>
                        </div>
                        <div className=' rating-section'>
                        <div className='Domain-Name'>{Data.Domain}</div>
                        <div className='star-panal'>
                                <img src={active} alt="plus"/>
                                <img src={active} alt="plus"/>
                                <img src={active} alt="plus"/>
                                <img src={active} alt="plus"/>
                                <img src={dull} alt="mius" />
                            </div>
                        </div>
                    </div>
                </div>
                <div className='col p-2 Profile-mid'>
                    <i class="fa fa-2x fa-map-marker" aria-hidden="true"></i>
                    <div>{Data.Dept}</div>
                </div>
                <div className='col p-2 Profile-end'>
                    <div>About</div>
                    <div class="About">{Data.About}</div>
                </div>
            </div>
        </div>
        <div className='col Skills-Container'>
            <div className='Add-skill'><i class="fa fa-3x fa-plus" aria-hidden="true"></i></div>
            <div className='row p-5'>
                <div className='col-9 Skills-Title'>Skills</div>
                <div className='col Skills'>
                    <div className='Skill-Div'>{Data.Skills[0]}</div>
                    <div className='Skill-Div'>{Data.Skills[1]}</div>
                    <div className='Skill-Div'>{Data.Skills[2]}</div>
                    <div className='Skill-Div'>{Data.Skills[3]}</div>
                    <div className='Skill-Div'>{Data.Skills[4]}</div>
                    <div className='Skill-Div'>{Data.Skills[5]}</div>
                </div>
            </div>
        </div>
        <div className='col Work-History'>
            <div className='row p-5'>
                    <div className='col-9 Skills-Title'>Work-History</div>
                    <div className='row'>
                        <div className='col-9 Work-History-section'>
                           <div className='Work-star-panal'>
                                <img src={active} alt="plus"/>
                                <img src={active} alt="plus"/>
                                <img src={active} alt="plus"/>
                                <img src={active} alt="plus"/>
                                <img src={active} alt="mius" />
                            </div>
                            <div className='row'>
                                <div className='col-9 Work-Title'>{Data.Work[0].Title}</div>
                                <div className='col-9 Work-Dept'>
                                    <div>{Data.Work[0].Dept}</div>
                                    <div className='blue-dot'></div>
                                    <div>{Data.Work[0].Domain}</div>
                                </div>
                                <div className='col-9 Work-Posted'>Posted by {Data.Work[0].Posted}</div>
                            </div>
                        </div>
                        <div className='col-9 Work-History-section'>
                           <div className='Work-star-panal'>
                                <img src={active} alt="plus"/>
                                <img src={active} alt="plus"/>
                                <img src={active} alt="plus"/>
                                <img src={dull} alt="plus"/>
                                <img src={dull} alt="mius" />
                            </div>
                            <div className='row'>
                                <div className='col-9 Work-Title'>{Data.Work[0].Title}</div>
                                <div className='col-9 Work-Dept'>
                                    <div>{Data.Work[0].Dept}</div>
                                    <div className='blue-dot'></div>
                                    <div>{Data.Work[0].Domain}</div>
                                </div>
                                <div className='col-9 Work-Posted'>Posted by {Data.Work[0].Posted}</div>
                            </div>
                        </div>
                        <div className='col-9 Work-History-section'>
                           <div className='Work-star-panal'>
                                <img src={active} alt="plus"/>
                                <img src={active} alt="plus"/>
                                <img src={active} alt="plus"/>
                                <img src={active} alt="plus"/>
                                <img src={dull} alt="mius" />
                            </div>
                            <div className='row'>
                                <div className='col-9 Work-Title'>{Data.Work[0].Title}</div>
                                <div className='col-9 Work-Dept'>
                                    <div>{Data.Work[0].Dept}</div>
                                    <div className='blue-dot'></div>
                                    <div>{Data.Work[0].Domain}</div>
                                </div>
                                <div className='col-9 Work-Posted'>Posted by {Data.Work[0].Posted}</div>
                            </div>
                        </div>
                        
                    </div> 
            </div>
        </div>
        <div>{
        show?<div className='col Add_study'>
        <div className='Study_Request'>ADD YOUR STUDY PROJECT TO COMPLETE YOUR PROFILE</div>
        <div>
        <div className="plus_study" onClick={()=> setShow(false)}><i class="fa fa-5x fa-plus" aria-hidden="true"></i></div>
        </div>
    </div>:<div className='col Study-Project-Container'>
            <div className='row p-5'>
                    <div className='col-9 Skills-Title'>Study-Projects</div>
                    <div className='row'>
                        <div className='col-9 Study-History-section'>
                            <div className='row'>
                                <div className='col-9 Study-Title'>
                                    <div>{Data.Study[0].Title}</div>
                                    <div className='Study-Date'>{Data.Study[0].Date.getDate()}/{Data.Study[0].Date.getMonth()}/{Data.Study[0].Date.getFullYear()}</div>
                                </div>
                                <div className='col-9 Work-Dept'>
                                    <div>{Data.Study[0].Technologies[0]}</div>
                                    <div className='blue-line'>|</div>
                                    <div>{Data.Study[0].Technologies[1]}</div>
                                    <div className='blue-line'>|</div>
                                    <div>{Data.Study[0].Technologies[2]}</div>
                                    <div className='blue-line'>|</div>
                                    <div>{Data.Study[0].Technologies[3]}</div>
                                </div>
                                <div className='col-12 Study-dis'>{Data.Study[0].Discription}</div>
                                <div className='Study-link'><a href={Data.Study[0].link}>more</a></div>
                            </div>
                        </div>
                        <div className='col-9 Study-History-section'>
                            <div className='row'>
                                <div className='col-9 Study-Title'>
                                    <div>{Data.Study[0].Title}</div>
                                    <div className='Study-Date'>{Data.Study[0].Date.getDate()}/{Data.Study[0].Date.getMonth()}/{Data.Study[0].Date.getFullYear()}</div>
                                </div>
                                <div className='col-9 Work-Dept'>
                                    <div>{Data.Study[0].Technologies[0]}</div>
                                    <div className='blue-line'>|</div>
                                    <div>{Data.Study[0].Technologies[1]}</div>
                                    <div className='blue-line'>|</div>
                                    <div>{Data.Study[0].Technologies[2]}</div>
                                    <div className='blue-line'>|</div>
                                    <div>{Data.Study[0].Technologies[3]}</div>
                                </div>
                                <div className='col-12 Study-dis'>{Data.Study[0].Discription}</div>
                                <div className='Study-link'><a href={Data.Study[0].link}>more</a></div>
                            </div>
                        </div>
                        <div className='col-9 Study-History-section'>
                            <div className='row'>
                                <div className='col-9 Study-Title'>
                                    <div>{Data.Study[0].Title}</div>
                                    <div className='Study-Date'>{Data.Study[0].Date.getDate()}/{Data.Study[0].Date.getMonth()}/{Data.Study[0].Date.getFullYear()}</div>
                                </div>
                                <div className='col-9 Work-Dept'>
                                    <div>{Data.Study[0].Technologies[0]}</div>
                                    <div className='blue-line'>|</div>
                                    <div>{Data.Study[0].Technologies[1]}</div>
                                    <div className='blue-line'>|</div>
                                    <div>{Data.Study[0].Technologies[2]}</div>
                                    <div className='blue-line'>|</div>
                                    <div>{Data.Study[0].Technologies[3]}</div>
                                </div>
                                <div className='col-12 Study-dis'>{Data.Study[0].Discription}</div>
                                <div className='Study-link'><a href={Data.Study[0].link}>more</a></div>
                            </div>
                        </div>
                    </div> 
            </div>
        </div>
        }
        </div>
        <div className='col Work-History'>
            <div className='row p-5'>
                    <div className='col-9 Skills-Title'>Project-History</div>
                    <div className='row'>
                        <div className='col-9 Work-History-section'>
                            <div className='row'>
                                <div className='col-9 Work-Title'>{Data.Project[0].Title}</div>
                                <div className='col-9 Work-Dept'>
                                    <div>{Data.Project[0].Dept}</div>
                                    <div className='blue-dot'></div>
                                    <div>{Data.Project[0].Domain}</div>
                                </div>
                                <div className='col-9 Work-Posted'>Worked with  {Data.Project[0].Worked[0]},{Data.Project[0].Worked[1]},{Data.Project[0].Worked[2]}</div>
                            </div>
                        </div>
                        <div className='col-9 Work-History-section'>
                            <div className='row'>
                                <div className='col-9 Work-Title'>{Data.Project[0].Title}</div>
                                <div className='col-9 Work-Dept'>
                                    <div>{Data.Project[0].Dept}</div>
                                    <div className='blue-dot'></div>
                                    <div>{Data.Project[0].Domain}</div>
                                </div>
                                <div className='col-9 Work-Posted'>Worked with  {Data.Project[0].Worked[0]},{Data.Project[0].Worked[1]},{Data.Project[0].Worked[2]}</div>
                            </div>
                        </div>
                        <div className='col-9 Work-History-section'>
                            <div className='row'>
                                <div className='col-9 Work-Title'>{Data.Project[0].Title}</div>
                                <div className='col-9 Work-Dept'>
                                    <div>{Data.Project[0].Dept}</div>
                                    <div className='blue-dot'></div>
                                    <div>{Data.Project[0].Domain}</div>
                                </div>
                                <div className='col-9 Work-Posted'>Worked with  {Data.Project[0].Worked[0]},{Data.Project[0].Worked[1]},{Data.Project[0].Worked[2]}</div>
                            </div>
                        </div>
                    </div> 
            </div>
        </div>
        </div>
        )
  }
  
  export default ProjectView