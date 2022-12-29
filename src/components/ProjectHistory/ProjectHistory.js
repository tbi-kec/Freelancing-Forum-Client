import React from 'react'

export default function ProjectHistory({project}) {
    console.log(project)
  return (

    <div>
    {project.length!=0 ?
        <div className="student-card project-history">
            <div className="title">
                
                <h2>P</h2>
            </div>
            <div className="card-group">
                <div className="inner-card">
                    <div className="inner-card-head">
                        <h2>Driver Drowsiness Project</h2>
                    </div>
                    <div className="domain">
                       <span>Aritificial Inetlligence</span>
                       <i class="fa-solid fa-circle"></i>
                       <span>AI and ML</span>
                    </div>
                    <div className="posted-by">
                        Worked with  Rohith,Linga,Sujith
                    </div>
                </div>
            </div>
        </div> :
        <></>
    
    }
    </div>
  )
}
