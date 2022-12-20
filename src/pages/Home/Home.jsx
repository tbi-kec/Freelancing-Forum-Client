import React,{useState} from "react";
import Navbar from "../../components/Navbar/Navbar";
import './Home.css'
import ProjectCard from "../../components/ProjectCard/ProjectCard";
import ProfileCard from "../../components/ProfileCard/ProfileCard";



function Home() {
  const [navToggler, setNavToggler]=useState(true)

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
      <div className="container pb-5">
        {/* nav */}
        <div className="card shadow my-4">
          <div className="card-body">
            <div className="d-flex fs-6 fw-bold">
              <div className="mx-4 active-toggle" id="project" onClick={handleToggle}>Projects</div>
              <div className="mx-4" id="talent" onClick={handleToggle}>Talents</div>
            </div>
          </div>
        </div>
        {/* content  */}
        {navToggler ?
        <div>
         <ProjectCard />
         <ProjectCard />
        </div>  :
        <div className="my-5">
        <ProfileCard />
        <ProfileCard />
        </div>
        }
      </div>
    </div>
  );
}

export default Home;
