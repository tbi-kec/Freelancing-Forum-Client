import React from 'react'
import './Domain.css'
const Domain = ({domain}) => {
  return (
    <div className="student-card align-items-start ">
      <div className="student-domains mb-4 ">
        <h2>Domains</h2>
      </div>
      <div className="row">
        <div className="domain d-flex">
          {domain?.map((s, idx) => (
            <div
              className="domain-container py-1 px-2 m-2 rounded-3"
              key={idx}
            >
              <div>{s}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Domain
