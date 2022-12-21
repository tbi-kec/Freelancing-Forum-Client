import React,{useState} from 'react'
import './ProfileCreation.scss'
import human from '../../assets/human.png'
import profileTop from '../../assets/profile.png'
import profile from '../../assets/profileicon.png'

const ProfileCreation = () => {
      const dept = [
      "Civil Engineering",
      "Mechanical Engineering",
      "Mechatronics Engineering",
      "Automobile Engineering",
      "Chemical Engineering",
      "Food Technology",
      "Electrical and Electronics Engineering",
      "Electronics and Instrumentation Engineering",
      "Electronics and Communication Engineering",
      "Computer Science and Engineering",
      "Information Technology",
      "Computer Science and Design",
      "Artificial Intelligence (AIML & AIDS)",
      "Management Studies",
      "Computer Application",
      "Computer Technology - UG",
      "Computer Technology - PG",
      "Mathematics",
      "Physics",
      "Chemistry",
      "English"
    ];
    const domains = [
        "Web Developer",
        "App Developer",
        "Full Stack Developer"
    ]
    const [skills,setskills]=useState([{name:"js",level:"expert"}])
    const [name,setName]=useState("")
    const [level,setLevel]=useState("")
    const handleSkill = ()=>{
            setskills([...skills,{"name":name,"level":level}])
            setName("")
            setLevel("")
    }   
    const handleDelete =(id)=>{
        console.log(id);
        console.log(skills[id]);
        const newSkills = skills.filter((s,idx)=>idx!=id)
        console.log(newSkills)
        setskills([...newSkills])
    }
  return (
    <div className='profile-creation-container'>
        <div className="row">
            <div className="col-12 image-container">
                <img src={profileTop} alt="image-top" />
            </div>
        </div>
        <div className="container profile-form-container my-3">
            <div className="row">
                <div className="col-3 image-container">
                    <img src={profile} alt="profile-image" />
                </div>
                <div className="col-6 profile-form">
                    <form >
                        <div className="form-group">
                            <select name="Department"  placeholder='Department' className="form-select">
                                <option value="" diabled hidden selected>Department</option>
                                {dept.map(d=>(
                                    <option value={d} key={d}>{d}</option>
                                ))}
                            </select>
                        </div>
                        <div className="form-group ">
                            <input type="email" placeholder='Perosnal Email Id' className='form-control' />
                        </div>
                        <div className="card">
                            <div className="card-body">
                                <hr />
                                <div className="row skills-list mb-3">
                                    {skills.map((s,idx)=>(
                                        <div className={` skill-${s.level} col-2 skill-container m-2`} key={idx}>
                                        <div>
                                            {s.name}
                                        </div>
                                        <div>
                                            <i onClick={()=>handleDelete(idx)} className="text-danger fa-solid fa-xmark"></i>
                                        </div>    
                                        </div>
                                    ))}
                                </div>
                                <div className="row" style={{display:"flex",alignItems:"center"}}>
                                    <div className="col-6">
                                             <div className="form-group ">
                                                <input type="text" value={name} onChange={e=>setName(e.target.value)} placeholder='Skill' className='form-control' />
                                            </div>
                                    </div>
                                    <div className="col-5">
                                         <div className="form-group">
                                            <select name="domain" defaultValue={level}  className="form-select" onChange={e=>setLevel(e.target.value)}>
                                                <option value="" diabled hidden selected>Level</option>
                                                <option value="beginner" style={{background:"#81F664"}} className='form-option' >Beginner</option>
                                                <option value="intermediate" style={{background:"#F5E878"}} className=' py-3 form-option' >Intermediate</option>
                                                <option value="expert" style={{background:"#64CAF6"}} className=' py-3 form-option' >Expert</option>
                                            </select>
                                        </div>
                                    </div>
                                    <div className="col-1">
                                        <i className="text-success fa-solid fa-plus" onClick={handleSkill} />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="form-group">
                            <select name="domain"   className="form-select">
                                <option value="" diabled hidden selected>Domain Name</option>
                                {domains.map((d,idx)=>(
                                    <option key={idx} value={d}>{d}</option>
                                ))}
                            </select>
                        </div>
                        <div className="form-group">
                            <textarea className='form-control' placeholder='Description' cols="10" rows="3">
                               
                            </textarea>
                        </div>
                        <div className='create-button-container'>
                             <button className='create-button btn btn-md my-3 '>Create</button>
                        </div>
                    </form>
                </div>
                <div className="col-3">

                </div>

            </div>
        </div>
    </div>
  )
}

export default ProfileCreation