import React from 'react'
import {Link} from 'react-router-dom'

export default function ProjectHistory({project}) {
    console.log(project)
  return (

    <div>
    {project.length!=0 ?
    <div>
        <div className="student-card project-history">
            <div className="title">
                
                <h2>Project - History</h2>
            </div>
            {project.map((p)=>(
                <Link to={`/project/show/${p._id}`} className='text-dark'>
            <div className="card-group" ley={p._id}>
                <div className="inner-card">
                    <div className="inner-card-head">
                        <h2>{p.title}</h2>
                    </div>
                    <div className='project-desc'>
                        {p.description}
                    </div>
                </div>

            </div>
            </Link>
            
            )
        )}
        </div>
      </div>
         :
        <></>
    
    }
    </div>
  )
}
