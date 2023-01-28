import React from 'react'
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch,useSelector} from 'react-redux';
import { updateStatus } from '../../actions/project';
import starColor from '../../assets/Color-star.png'
import starDull from '../../assets/dull-star.png'
import './ProgressBar.css'
import { developerUpdateRating } from '../../actions/myDetails'

function ProgressBar({status,p_id,c_id,d_id,deadline}) {
   const navigate = useNavigate();
   const dispatch = useDispatch();
   const [userRating,setUserRating]=useState(0)
  
    const [progressStepsNum, setprogressStepsNum] = useState(0);
  const user = useSelector((state)=>(state.myDetailsReducer))
 
    const nextprogress = () => {
        setprogressStepsNum(prevprogressStep=>prevprogressStep+1);
                    dispatch(updateStatus({p_id,status:progressStepsNum+1},navigate))
    
      
    }
 
   

    useEffect(() => {
        const setinital=async ()=>{
            
            if (status === "assigned") { 
                setprogressStepsNum(0);
            }
            else if (status === "partial") { 
            
                setprogressStepsNum(1) }
            else if(status==="testing")
                setprogressStepsNum(2)
            else { 
            
                setprogressStepsNum(3); 
            }
        }
 
        setinital();
    }, [status])

    useEffect(()=>{
        setTimeout(()=>{
               const updateProgressbar = () => {
    
            const progressSteps = document.querySelectorAll(".progress-step");
            const progress = document.getElementById("progress");
            progressSteps.forEach((progressStep, idx) => {
                return idx < progressStepsNum + 1 ?
                    progressStep.classList.add("progress-step-active")
                    :
                    progressStep.classList.remove("progress-step-active");
            });
            const progressActive = document.querySelectorAll(".progress-step-active");
            progress.style.width = ((progressActive.length - 1) / (progressSteps.length - 1)) * 100 + "%";
        
    }
                updateProgressbar()

    },1000)
    },[progressStepsNum]) 

    const handleRating = (e) =>{
            e.preventDefault();
            console.log(parseInt(userRating));
            setTimeout(() => {
                dispatch(developerUpdateRating({rating:parseInt(userRating),u_id:d_id,p_id}))
            }, 2000);
    }

    return (
    <div>
            {/* modal - next progress */}
            <div
                className="modal fade "
                data-bs-backdrop="static"
                id="toggle_model_request"
                tabIndex="-1"
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
                                    className="btn btn-danger my-3"
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
            {/* modal - rate */}
            <div
                className="modal fade "
                data-bs-backdrop="static"
                id="toggle_model_rate"
                tabIndex="-1"
                role="dialog"
                aria-labelledby="exampleModalLabel"
            >
                <div className="modal-dialog modal-dialog-centered modal-lg">
                    <div className="modal-content text-center">

                        <div>
                            <div className="fs-4 m-5">
                                Please Confirm that your Project is completed and rate the work done.
                                <div>    {(
      function () {
        var rate=[]
        for(var i=0;i<userRating;i++){
          rate.push(<img key={i} src={starColor} id={i+1} alt='star' height='30px' onClick={(e)=>setUserRating(e.target.id)} />)
        }
        for(let j=0;j<5-userRating;j++){
          rate.push(<img key={j} src={starDull} alt='star' id={i+j+1} height='25px' onClick={(e)=>setUserRating(e.target.id)} />)
        }
        return(
          <div key={rate.length}>
          {rate}
          </div>
        )
      }
    ())}</div>
                            </div>
                            <div className="d-flex justify-content-around">
                                <button
                                    className="btn btn-danger my-3"
                                    data-bs-dismiss="modal"
                                    aria-label="Close"
                                >
                                    Cancel
                                </button>
                                <button
                                    className="btn btn-md my-3 project-add-submit-btn text-light"
                                    data-bs-dismiss="modal"
                                    aria-label="Close"
                                    onClick={handleRating}
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
                    <div className="progress-step" data-title="Testing"><i className="fa-sharp fa-solid fa-vial"></i></div>
                    <div className="progress-step" data-title="Completed"><i className="fas fa-check-circle"></i></div>
                </div>
                <div className='row'>
                <div className="col-sm-6">
                <div className="text-start py-3">
                  <b>Deadline:</b> {deadline}
                </div>
                </div>
                <div className="col-sm-6 text-end">
                {progressStepsNum <2 && d_id===user?.data?._id ?
                <div className="progress-btn">
                    <div href="#" className="btn" data-bs-toggle="modal"
                        data-bs-target="#toggle_model_request">Next</div>
                </div>
                :""}
                {progressStepsNum >=2 && c_id===user?.data?._id   ?
                <div className="progress-btn">
                    <div href="#" className="btn" data-bs-toggle="modal"
                        data-bs-target="#toggle_model_rate">Confirm & rate</div>
                </div>
                :""}
                </div>

                </div>
                
                    
            </div>
            
        </div>

    )
}

export default ProgressBar;
