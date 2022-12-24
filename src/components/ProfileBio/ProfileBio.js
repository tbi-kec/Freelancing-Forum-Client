import React from 'react'
import profile from '../../assets/profileicon2.png'
import assured from '../../assets/verified.png'
import './ProfileBio.css'

export default function ProfileBio() {
  return (
    
    <div className='student-card '>
        
        <div className="profile">
        <div className="profile-head">
        <div className='prof' >
            <div className="profile-img me-4">
                <img src={profile} alt="" />
            </div> 
           <div className="profile-detail">
                <div className="student-name">
                    <h2>SANJAY S</h2>   
                </div>
                
                <div className="student-role">
                           <h3> Web Developer</h3>
                </div>
                    
            </div>
            </div>
            <div className="profile-dept">
              
                <div className="options d-flex align-items-center">
                    <div className="student-assured">
                        <img src={assured} alt="" />
                    </div>
                    <div className="edit ">
                    <i class="fa-solid fa-pencil fs-5"></i>
                    </div>
                
                </div>    
                <div className="rating">
                <i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i>
                </div>    
            </div>
           
        </div>
        <div className="student-dept">
        <h4><i class="fa-solid fa-location-dot"></i> Artificial Intelligence </h4>
        </div>
        <div className="student-about">
            <h2 className='mb-3'>About </h2>
            <div>I am a freelance software engineer. I have more than 8 years of experience in programming and designing UI. I worked on front-end and as well as back-end of many high traffic websites and apps.</div>

        </div>
        </div>
    </div>
    
  )
}
