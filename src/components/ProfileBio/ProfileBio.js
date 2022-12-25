import React from 'react'
import profile from '../../assets/profileicon2.png'
import assured from '../../assets/verified.png'
import './ProfileBio.css'
import { useSelector } from 'react-redux'
import starColor from '../../assets/Color-star.png'
import starDull from '../../assets/dull-star.png'
export default function ProfileBio({user}) {
    const current = useSelector((state)=>(state.currentUserReducer));

  return (
    
    <div className='student-card'>
        
        <div className="profile">
        <div className="profile-head">
            
        <div className='prof' >
            <div className="profile-img me-4">
                <img src={profile} alt="" />
            </div> 
           <div className="profile-detail">
                <div className="student-name">
                    <h2>{user?.first_name}-{user?.last_name}</h2>   
                </div>
                
                <div className="student-role">
                           <h3>{user?.domain[0]}</h3>
                </div>
                    
            </div>
            </div>
            <div className="profile-dept">
              
                <div className="options d-flex align-items-center">
                    <div className="student-assured">
                        <img src={assured} alt="" />
                    </div>
                    {current?.user?._id===user?._id &&
                    <div className="edit ">
                    <i class="fa-solid fa-pencil fs-5"></i>
                    </div>
}
                </div>    
                <div className="rating">
                                        {(
                        function () {
                            var rate=[]
                            for(let i=0;i<user?.rating;i++){
                            rate.push(<img src={starColor} alt='star' height='30px' />)
                            }
                            for(let j=0;j<5-user?.rating;j++){
                            rate.push(<img src={starDull} alt='star' height='25px' />)
                            }
                            return(
                            <div>
                            {rate}
                            </div>
                            )
                        }
                        ())}
                </div>    
            </div>
           
        </div>
        <div className="student-dept">
        <h4><i class="fa-solid fa-location-dot"></i>{user?.department}</h4>
        </div>
        <div className="student-about">
            <h2 className='mb-3'>About </h2>
            <div> {user?.description} </div>

        </div>
        </div>
    </div>
    
  )
}
