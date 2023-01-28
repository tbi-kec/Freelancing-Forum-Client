import React from "react"
import './DeveloperCard.css'

function DeveloperCard({Name,Icon,Dept,LinkedinName,LinkedinLink,GithubName,GithubLink,Align}){
  return(
    <div className={
      Align === "right" ?
        "d-flex flex-row-reverse align-items-center developer-profile-div my-2":
        "d-flex flex-row align-items-center developer-profile-div"
      }>
      <div className="developer-profile">
          <img src={Icon} alt={Name}/>
      </div>
      <div className="d-flex flex-column mx-3 developer-details">
        <h1 className="fw-bold name">{Name}</h1>
        <h1 className="fw-bold dept">{Dept}</h1>
        <div className="d-flex flex-row developer-links">
          <div>
            <a href={GithubLink} target="_blank"  rel="noreferrer noopener" className="d-flex flex-row fw-bold"><i class="fa-brands fa-github github-icon"></i>/{GithubName}</a>
          </div>
          <div className="mx-3">
            <a href={LinkedinLink} target="_blank"  rel="noreferrer noopener" className="d-flex flex-row fw-bold"><i class="fa-brands fa-linkedin-in linkedin-icon"></i>/{LinkedinName}</a>
          </div>
        </div>
      </div>
    </div>
    )
}


export default DeveloperCard
