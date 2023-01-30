import React from "react"

import './Page404.css'

function Page404(){
  return(
    <div className="page-404-container">
      
      <div className="page-404-outer">
        <div className="blob1">
          <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
            <path fill="#63B1F4" d="M41.3,-30.5C49.6,-9.4,49.8,9.7,41.6,22.9C33.4,36.1,16.7,43.4,-5.1,46.3C-26.9,49.3,-53.8,47.9,-67.9,31.4C-82,14.8,-83.2,-17,-69.8,-41C-56.3,-65,-28.2,-81.3,-5.8,-78C16.5,-74.6,33,-51.6,41.3,-30.5Z" transform="translate(100 100)" />
          </svg>
        </div>
        <div className="blob2">
          <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
            <path fill="#63B1F4" d="M57.3,-23.9C62.8,-1.5,48.1,22.2,29.3,34.4C10.5,46.7,-12.3,47.5,-27.7,36.6C-43.2,25.8,-51.3,3.2,-45.4,-19.6C-39.6,-42.4,-19.8,-65.6,3,-66.6C25.9,-67.5,51.7,-46.4,57.3,-23.9Z" transform="translate(100 100)" />
          </svg>
        </div>
        <div className="blob3">
          <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
            <path fill="#89F979" d="M57.3,-23.9C62.8,-1.5,48.1,22.2,29.3,34.4C10.5,46.7,-12.3,47.5,-27.7,36.6C-43.2,25.8,-51.3,3.2,-45.4,-19.6C-39.6,-42.4,-19.8,-65.6,3,-66.6C25.9,-67.5,51.7,-46.4,57.3,-23.9Z" transform="translate(100 100)" />
          </svg>
        </div>
        <div className="blob4">
          <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
            <path fill="#89F676" d="M41.4,-66.2C54.6,-55.9,66.8,-46,73.7,-33C80.6,-20.1,82.2,-4,78.6,10.3C75.1,24.7,66.4,37.3,56.6,49.5C46.8,61.7,35.9,73.4,22.1,79.5C8.2,85.6,-8.6,86,-23.6,81.2C-38.5,76.3,-51.7,66.3,-61.7,53.9C-71.7,41.6,-78.5,26.9,-82.5,10.8C-86.5,-5.3,-87.6,-22.9,-81.7,-37.9C-75.8,-52.9,-62.9,-65.3,-48.1,-74.8C-33.3,-84.3,-16.6,-91,-1.3,-89C14.1,-87,28.2,-76.4,41.4,-66.2Z" transform="translate(100 100)" />
          </svg>
        </div>
      <div className="page-404 d-flex flex-column flex-grow-1 justify-content-center align-items-center text-center">
        <p className="page-404-no">404</p>
        <h3 className="page-404-header fw-bold">Page not found</h3>
        <p className="page-404-sub mx-5 text-dark">Oops! The page you are looking for does not exist. It might have been moved or deleted.</p>
      </div>
      </div>
    </div>
    )
}

export default Page404
