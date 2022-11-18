import React from 'react'
import './ProfileCreation.css'
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
                                <div className="row">
                                    <div className="col-8">
                                             <div className="form-group ">
                                                <input type="text" placeholder='Skill' className='form-control' />
                                            </div>
                                    </div>
                                    <div className="col-4">
                                         <div className="form-group">
                                                <select name="domain"   className="form-select">
                                                    <option value="" diabled hidden selected>Level</option>
                                                </select>
                                            </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="form-group">
                            <select name="domain"   className="form-select">
                                <option value="" diabled hidden selected>Domain</option>
                            </select>
                        </div>
                        <div className="form-group">
                            <textarea className='form-control' placeholder='Description' cols="10" rows="3">
                               
                            </textarea>
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