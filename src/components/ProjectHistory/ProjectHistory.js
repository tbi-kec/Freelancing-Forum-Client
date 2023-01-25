import React from 'react'
import { useNavigate } from 'react-router-dom'

export default function ProjectHistory({project}) {
   const navigate = useNavigate();
   const handleNavigate=(id)=>{
    navigate(`/project/show/${id}`)
   }
  return (
    <div>
        <div className="student-card project-history">
            <div className="title">
                <h2>Project - History</h2>
            </div>
            {project.map((p)=>(
                
            <div className="card-group" onClick={()=>handleNavigate(p._id)} key={p._id}>
                <div className="inner-card">
                    <div className="inner-card-head">
                        <h2>{p.title}</h2>
                    </div>
                    <div className='project-desc'>
                        {p.description}
                    </div>
                </div>

            </div>
            
            
            )
        )}
        </div>
      </div>
        
  )
}
