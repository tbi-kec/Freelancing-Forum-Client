import React from 'react'
import { Link } from 'react-router-dom'
export default function WorkHistory({work}) {
  return (
         <div className="inner-card">
                    <div className="inner-card-head">
                        <h2><Link to={`/project/show/${work._id}`}>{work.title}</Link></h2>
                    </div>
                    <div className="domain">
                       <span>{work.category}</span>
                        <p>{work.description}</p>
                    </div>
                    <div className="posted-by">
                        Posted by {work.createdBy.first_name}.{work.createdBy.last_name}
                    </div>
        </div>
  )
}

