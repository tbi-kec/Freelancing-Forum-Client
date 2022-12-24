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
  const users = useSelector((state)=>(state.userReducer))
  const myself=useSelector((state)=>(state.myDetailsReducer))
  const constants=useSelector((state)=>(state.constantReducer));
  // const [projects,setProjects]=useState()
  // useEffect(()=>{
  //     setProjects(project?.data)
  // },[project])

  const [onbord_project,setOnBoardProject] = useState([]);
  const [notification,setNotification]=useState([]);
  useEffect(()=>{
    if(myself.data && myself?.data?.onbord_project?.length!=0){
      setOnBoardProject([...myself.data.onbord_project])
    }
    if(myself.data && myself?.data?.notification?.length!=0){
      setNotification([...myself.data.notification])
    }
  },[myself])
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
                    <h3>{myself.data?.first_name}-{myself.data?.last_name}</h3>
                    <p>{myself.data?.domain[0]}</p>
                  </div>
                </Link>
                <div className="row">
                  <div className="skill d-flex justify-content-around">
                    {myself.data?.skills.map(s=>(
                      <div className={`skillset px-2  mt-2 skill-${s.level}`} key={s._id} >
                          <p>{s.name}</p>
                    </div>
                    ))}
          
                  </div>
                </div>

              </div>
              <div className="current-project my-2">
                 {onbord_project?.length!==0 ?
                <>
                      {onbord_project(o=>{
                  <div className="current-project-header my-2" key={o._id}>
                     <h4 className='mb-0 ms-2'>{o.name}</h4>
                       <hr className='mt-1 ms-2' />
                    </div>
                    })}
                     </>
                    
                 :<h4 className="p-3">No Projects</h4>
              } 
              
              </div>
              <div className="notification py-2 px-1">

              {notification.length!==0 ?
                <>
                      {notification(n=>{
                          <Notification notification={n} key={n._id} />
                    })}
                     </>
                    
                 :<h4 className="p-3">No Notifications</h4>
              } 

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
        {users.data?.map(u=>(
          <ProfileCard user={u} key={u._id} constant={constants.data}/>
        ))}
        </div>
        }
      </div>
    </div>
  )
}

export default Home;
