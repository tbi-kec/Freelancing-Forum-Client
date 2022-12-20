import React from "react";

function ProjectCard() {
  return (
    <div className="card shadow my-4">
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
  );
}

export default ProjectCard;
