import React,{useState} from 'react'
import { useSelector } from 'react-redux';
import { Link } from "react-router-dom";
import AddProject from '../../components/AddProject/AddProject';
import Banner from '../../components/Banner/Banner'
import ProfileBio from '../../components/ProfileBio/ProfileBio'
import ProjectHistory from '../../components/ProjectHistory/ProjectHistory';
import Skills from '../../components/Skills/Skills'
import StudentProject from '../../components/StudentProject/StudentProject';
import WorkHistory from '../../components/WorkHistory/WorkHistory';
import './StudentProfile.css'

export default function StudentProfile() {
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

        
        <WorkHistory/>

        <StudentProject/>

        <ProjectHistory/>

    </div>
  )
}

