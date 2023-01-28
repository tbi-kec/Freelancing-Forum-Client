import React from "react"
import DeveloperCard from '../../components/DeveloperCard/DeveloperCard';
import janarathanan from '../../assets/jana.png';
import karthikeyan from '../../assets/karthikeyan.png';
import logesh from '../../assets/logesh.png';
import sanjay from '../../assets/sanjay.png';
import sujit from '../../assets/sujit.png';
import './DeveloperCommunity.css'

function DeveloperCommunity(){
  return(
    <div className="dev-community-bg">
        <div className="container dev-community-container text-white ">
          <h3 className="p-3">Version 1.0</h3>
          <div className="d-flex flex-column dev-community">
            <DeveloperCard 
              Name="JANARATHANAN T" 
              Icon={janarathanan} 
              Dept="Information Technology" 
              LinkedinName="janarthanant" 
              LinkedinLink="https://www.linkedin.com/in/janarthanant/"
              GithubName="JANARTHANAN-T"
              GithubLink="https://github.com/JANARTHANAN-T/"
              Align="right"
            />
            <DeveloperCard 
              Name="Karthikeyan R" 
              Icon={karthikeyan} 
              Dept="Information Technology" 
              LinkedinName="karthikeyanraj" 
              LinkedinLink="https://www.linkedin.com/in/karthikeyanraj/"
              GithubName="karthi0102"
              GithubLink="https://github.com/karthi0102"
              Align="left"
            />
            <DeveloperCard 
              Name="LOGESH B" 
              Icon={logesh} 
              Dept="Information Technology" 
              LinkedinName="logesh-bommannan" 
              LinkedinLink="https://www.linkedin.com/in/logesh-bommannan"
              GithubName="LOGESH B"
              GithubLink="https://github.com/LOGESH-B"
              Align="right"
            />
            <DeveloperCard 
              Name="SUJIT R B" 
              Icon={sujit} 
              Dept="AI & DS" 
              LinkedinName="sujitbalasubramanian" 
              LinkedinLink="https://www.linkedin.com/in/sujit-balasubramanian"
              GithubName="sujitbalasubramanian"
              GithubLink="https://github.com/sujitbalasubramanian"
              Align="left"
            />
            <DeveloperCard 
              Name="SANJAY S" 
              Icon={sanjay} 
              Dept="AI & DS" 
              LinkedinName="SG Sanjay" 
              LinkedinLink="https://www.linkedin.com/in/sg-sanjay-301523224/"
              GithubName="SGSANJAY044"
              GithubLink="https://github.com/SGSANJAY044"
              Align="right"
            />
          </div>
        </div>
    
    </div>
    )
}

export default DeveloperCommunity
