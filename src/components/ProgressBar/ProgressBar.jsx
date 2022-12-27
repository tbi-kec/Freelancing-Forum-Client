

import React from 'react'
import { useEffect } from 'react';
import './ProgressBar.css'

function ProgressBar() {
    let formStepsNum = 0;
    
    const nextprogress=()=>{
        formStepsNum++;
        updateProgressbar();
    }
    const updateProgressbar=()=> {
        const progressSteps = document.querySelectorAll(".progress-step");
        const progress = document.getElementById("progress");
        progressSteps.forEach((progressStep, idx) => {
            return idx < formStepsNum + 1 ?
                progressStep.classList.add("progress-step-active")
           :
                progressStep.classList.remove("progress-step-active");
            
        });

        const progressActive = document.querySelectorAll(".progress-step-active");
        progress.style.width = ((progressActive.length - 1) / (progressSteps.length - 1)) * 100 + "%";
            
            
    }
    useEffect(()=>{
        updateProgressbar();
    },[])
    
    
    return (

        <div className='container text-center'>
            <div className="progressbar">
                <div className="progress" id="progress"></div>
                <div
                    className="progress-step progress-step"
                    data-title="Assign"><i className="fas fa-hands-helping"></i></div>
                <div className="progress-step" data-title="OnProgress"><i className="fas fa-toolbox"></i></div>
                <div className="progress-step" data-title="Completed"><i className="fas fa-check-circle"></i></div>
            </div>
            <div className="progress-btn">
                <div href="#" className="btn" onClick={nextprogress}>Next</div>
            </div>
        </div>
    )
}

export default ProgressBar;
