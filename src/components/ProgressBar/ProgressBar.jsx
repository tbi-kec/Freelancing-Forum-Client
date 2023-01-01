import React from 'react'
import { useEffect, useState } from 'react';
import './ProgressBar.css'

function ProgressBar({status}) {
   
    const [progressStepsNum, setprogressStepsNum] = useState(0);
  
    const nextprogress = () => {
        setprogressStepsNum(prevprogressStep=>prevprogressStep+1);
        updateProgressbar();
    }
    const updateProgressbar = (cnt) => {
        const progressSteps = document.querySelectorAll(".progress-step");
        const progress = document.getElementById("progress");
        progressSteps.forEach((progressStep, idx) => {
            return idx < cnt + 1 ?
                progressStep.classList.add("progress-step-active")
                :
                progressStep.classList.remove("progress-step-active");
        });

        const progressActive = document.querySelectorAll(".progress-step-active");
        progress.style.width = ((progressActive.length - 1) / (progressSteps.length - 1)) * 100 + "%";


    }
   const setinital=async ()=>{
    let cnt=0;
    if (status == "assigned") { 
        setprogressStepsNum(0);
     }
    else if (status == "partial") { 
        cnt=1;
        setprogressStepsNum(1) }
    else { 
        cnt=1;
        setprogressStepsNum(2); }
        console.log(cnt);
        updateProgressbar(cnt)
    }
    useEffect(() => {
        setinital();
    }, [status])


    return (
        <>
            {/* modal */}
            <div
                className="modal fade "
                data-bs-backdrop="static"
                id="toggle_model_request"
                tabindex="-1"
                role="dialog"
                aria-labelledby="exampleModalLabel"
            >
                <div className="modal-dialog modal-dialog-centered modal-lg">
                    <div className="modal-content text-center">

                        <div>
                            <div className="fs-4 m-5">
                                Please Confirm that your Project is moved to next level.You can't Reverse your Progress!
                            </div>
                            <div className="d-flex justify-content-around">
                                <button
                                    class="btn btn-danger my-3"
                                    data-bs-dismiss="modal"
                                    aria-label="Close"
                                >
                                    Cancel
                                </button>
                                <button
                                    className="btn btn-md my-3 project-add-submit-btn text-light"
                                    data-bs-dismiss="modal"
                                    aria-label="Close"
                                    onClick={nextprogress}
                                >
                                    Confirm
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>



            {/* progress container */}
           <div className='container text-center'>
                <div className="progressbar">
                    <div className="progress" id="progress"></div>
                    <div
                        className="progress-step progress-step"
                        data-title="Assign"><i className="fas fa-hands-helping"></i></div>
                    <div className="progress-step" data-title="OnProgress"><i className="fas fa-toolbox"></i></div>
                    <div className="progress-step" data-title="Testing"><i class="fa-sharp fa-solid fa-vial"></i></div>
                    <div className="progress-step" data-title="Completed"><i className="fas fa-check-circle"></i></div>
                </div>
                <div className="progress-btn">
                    <div href="#" className="btn" data-bs-toggle="modal"
                        data-bs-target="#toggle_model_request">Next</div>
                </div>
            </div>
        </>

    )
}

export default ProgressBar;
