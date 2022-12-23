import React,{useState} from "react";
import Navbar from "../../components/Navbar/Navbar";
import './Home.css'
import profile from '../../assets/profileicon2.png'
import DeptTitleCard from '../../components/homepage/DeptTitleCard'
import Notification from '../../components/homepage/Notification'
import ProjectCard from "../../components/ProjectCard/ProjectCard";
import ProfileCard from "../../components/ProfileCard/ProfileCard";
import {Link} from 'react-router-dom'
import { useSelector } from "react-redux";
import { useEffect } from "react";



function Home() {
  const [navToggler, setNavToggler]=useState(true)
  const project = useSelector((state)=>(state.projectReducer))
  // const [projects,setProjects]=useState()
  // useEffect(()=>{
  //     setProjects(project?.data)
  // },[project])
  const handleToggle = (e) =>{
    e.preventDefault()
    if(e.target.id==='project'){
      setNavToggler(true)
      e.target.classList.add('active-toggle')
      document.getElementById('talent').classList.remove('active-toggle')
    }else{
      setNavToggler(false)
      e.target.classList.add('active-toggle')
      document.getElementById('project').classList.remove('active-toggle')
    }
  }

  return (
    <div>
      <Navbar />
      <div className="container mt-3">
        <div className='row dashboard-content' >
          <div className="col-lg-8 all-dept-container pt-4 pb-4 px-4">
            <div className="row">
              <div className="col-sm-6 mt-2 ">
              <Link to="user/1">
                <DeptTitleCard title='AI And ML' />
              </Link>
              </div>
              <div className="col-sm-6 mt-2">
                <DeptTitleCard title='Mechanical' />
              </div>

              <div className="col-sm-6  mt-2">
                <DeptTitleCard title='Robotics' />
              </div>
              <div className="col-sm-6  mt-2">
                <DeptTitleCard title='IT' />
              </div>
              <div className="col-sm-6  mt-2">
                <DeptTitleCard title='CSE' />
              </div>
              <div className="col-sm-6  mt-2">
                <DeptTitleCard title='Automobile' />
              </div>
              <div className="col-sm-6 mt-2">
                <DeptTitleCard title='Civil' />
              </div>
              <div className="col-sm-6 mt-2">
                <DeptTitleCard title='EEE' />
              </div>

              <div className="col-sm-6 mt-2">
                <DeptTitleCard title='ECE' />
              </div>
              <div className="col-sm-6 mt-2">
                <DeptTitleCard title='Automobile' />
              </div>
            </div>
          </div>

          <div className="col-lg-4 profile-right ">
            <div className="">
              <div className="col p-card p-3">
                <Link to="/profile/view" className="row">
                  <div className="col-4 px-0 p-img">
                    <img src={profile} className='p-2' alt="img" height='100%' width='100%' />
                  </div>
                  <div className="col-8 p-name pt-4 px-0">
                    <h3>SANJAY S</h3>
                    <p>Web Developer</p>
                  </div>
                </Link>
                <div className="row">
                  <div className="skill d-flex justify-content-around">
                  <div className={` skillset px-2  mt-2 skill-${'beginner'}`} >
                  <p>HTML</p>
                </div>
                <div className={`skillset px-2 mt-2  skill-intermediate`} >
                  <p>CSS</p>
                </div>
                <div className={`skillset px-2  mt-2  skill-${'intermediate'}`} >
                  <p>JavaScript</p>
                </div>
                <div className={`skillset px-2  mt-2  skill-${'beginner'}`} >
                  <p>JavaScript</p>
                </div>
                <div className={`skillset px-2  mt-2  skill-${'expert'}`} >
                  <p>JavaScript</p>
                </div>
                  </div>
                </div>

              </div>
              <div className="current-project my-2">
                <div className="current-project-header my-2">
                  <h4 className='mb-0 ms-2'>Current Project</h4>
                  <hr className='mt-1 ms-2' />
                </div>
                <div className="current-project-title mt-1">
                  <p className='mb-0 ms-2'>Current Project</p>
                  <hr className='mt-1 ms-2 mb-1' />
                </div>
                <div className="current-project-title mt-1">
                  <p className='mb-0 ms-2'>Current Project</p>
                  <hr className='mt-1 ms-2 mb-1' />
                </div>
                <div className="current-project-title mt-1">
                  <p className='mb-0 ms-2'>Current Project</p>
                  <hr className='mt-1 ms-2 mb-1' />
                </div>
                <div className="current-project-title mt-1">
                  <p className='mb-0 ms-2'>Current Project</p>
                  <hr className='mt-1 ms-2 mb-1' />
                </div>
                <div className="current-project-title mt-1">
                  <p className='mb-0 ms-2'>Current Project</p>
                  <hr className='mt-1 ms-2 mb-1' />
                </div>
              </div>
              <div className="notification py-2 px-1">

                <Notification />
                <Notification />

              </div>
            </div>

          </div>

        </div>
      </div>
      <div className="container pb-5">
        {/* nav */}
        <div className="card shadow my-4">
          <div className="card-body">
            <div className="d-flex fs-6 fw-bold">
              <div className="mx-4 fs-5 active-toggle" id="project" onClick={handleToggle}>Projects</div>
              <div className="mx-4 fs-5" id="talent" onClick={handleToggle}>Talents</div>
            </div>
          </div>
        </div>
        {/* content  */}
        {navToggler ?
        <div>
         {project.data?.map(p=>(
          <ProjectCard project={p} key={p._id}/>
         ))}
        </div>  :
        <div className="my-5">
        <ProfileCard />
        <ProfileCard />
        </div>
        }
      </div>
    </div>
  )
}

export default Home;
