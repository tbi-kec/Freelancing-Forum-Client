import React from "react";
import profile from '../../assets/profileicon2.png'
import  './ProjectCard.css'
const show_modal = () => {
  const modal = document.getElementById('toggle_model_button')
  modal.click()
}

function ProjectCard() {
  return (
    <>
      {/* modal */}
      <div className="modal fade "  id="toggle_model" tabindex="-1" role='dialog' aria-labelledby="exampleModalLabel" >
        <div className="modal-dialog modal-dialog-centered modal-xl">
          <div className="modal-content ">
            <div className="row">
              <div className="col-8 ps-4">
                <h3 className='mt-3 mb-0 fw-bold'>Driver Drowsiness Project</h3>
                <div>Artificial Intelligence - AI and ML</div>
              </div>
              <dv className="col-4">
                <div className="text-end pt-3 pe-4">3 minutes ago</div>
              </dv>
            </div>
            <div className='p-4'>
              The model we used is built with Keras using Convolutional Neural Networks (CNN). A convolutional neural network is a special type of deep neural network which performs extremely well for image classification purposes. A CNN basically consists of an input layer, an output layer and a hidden layer which can have multiple layers. A convolution operation is performed on these layers using a filter that performs 2D matrix multiplication on the layer and filter.
            </div>
            <div className="row">
              <div className="skill d-flex justify-content-start gap-4 ps-4">
                <div className="bg-success skillset px-2 " >
                  <p>HTML</p>
                </div>
                <div className="bg-success skillset px-2 " >
                  <p>CSS</p>
                </div>
                <div className="bg-success skillset px-2" >
                  <p>JavaScript</p>
                </div>
                <div className="bg-success skillset px-2" >
                  <p>JavaScript</p>
                </div>
                <div className="bg-success skillset px-2" >
                  <p>JavaScript</p>
                </div>
              </div>
            </div>
            <div className=" px-4 mt-3 d-flex justify-content-start">
              <h5 className=" text-end pt-2 ">Posted By <span className="fs-3 ">SANJAY S</span></h5>
              <div className="mx-2 text-start">
                <img src={profile} height="50px" width='50px' alt="" />
              </div>
            </div>

            <div className="ms-auto me-5 my-5">
              <div className="btn btn-success px-5 fw-bold" >REQUEST</div>
            </div>

            <input type='button' id='toggle_model_button' hidden data-bs-toggle="modal" data-bs-target="#toggle_model" />

          </div>
        </div>
      </div>

      {/* card */}
      <div className="card shadow my-4" onClick={show_modal}>
        <input type="button" hidden id='toggle_model_button' data-bs-toggle="modal" data-bs-target="#toggle_model" />
        <div className="card-body px-4">
          <div className="project-title fs-4 my-1">Driver Drowsiness Project</div>
          <div className="project-holder-department my-2 fw-bold">
            <span>Artificial Intelligence</span><span className="project-title mx-3">•</span><span>AI & ML</span>
          </div>
          <div className="project-dept">
            The model we used is built with Keras using Convolutional Neural
            Networks (CNN). A convolutional neural network is a special type of
            deep neural network which performs extremely well for image
            classification purposes. A CNN basically consists of an input layer,
            an output layer and a hidden layer which can have multiple layers. A
            convolution operation is performed on these layers using a filter that
            performs 2D matrix multiplication on the layer and filter.
          </div>
          <div className="text-end project-post-time">9 minutes ago</div>
        </div>
      </div>
    </>

  );
}

export default ProjectCard;
