import React, {useState} from "react"
import './Footer.css';
import logo from "../../assets/keclogo.png";
import iiclogo from "../../assets/IIC_logo.png";
import emdclogo from "../../assets/emdclogo22.png";
import tbilogo from "../../assets/TBIlogo.png";

function Footer(){
  let date = new Date();
  let year=date.getFullYear();
  return(
    <div className="footer">
      <div className="footer-content">
        <div className="container w-100">
          <footer className="row row-cols-lg-4 row-cols-md-2 row-cols-sm-1 row-cols-1 py-5 my-5 justify-content-center align-items-center text-center">
            <div className="col my-4">
              <div className="flogo-container">
                <div className="m-2 mb-3">
                <img src={tbilogo} alt="" width="100px" height="50px" />
                </div>
                <div className="m-2 mb-3">
                <img src={iiclogo} alt="" width="100px" height="50px" />
                </div>
                <div className="m-2 my-3 ">
                <img src={emdclogo} alt="" width="60px" height="60px" />
                </div>
              </div>
            </div>
            <div className="col my-4">
              <h5>Contact Us</h5>
              <ul className="nav flex-column">
                <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-muted">Dr. R. Rajadevi</a></li>
                <li className="nav-item mb-4"><a href="#" className="nav-link p-0 text-muted">986508899</a></li>
                <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-muted">Ms. T. E. Ramya</a></li>
                <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-muted">8883677334</a></li>
              </ul>
            </div>

            <div className="col my-4">
              <h5>Community Page</h5>
              <ul className="nav flex-column">
                <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-muted">About Us</a></li>
                <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-muted">Career</a></li>
                <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-muted">Contact Us</a></li>
                <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-muted">Lift Media</a></li>
              </ul>
            </div>
            <div className="col my-4">
              <div className="flogo-container">
                <div className="row my-3 feedback feedback-btn p-3">
                  <button className="btn btn-primary font-weight-bold">Give Your feedback <i className="fa-solid fa-arrow-right fs-5 forward-btn"></i></button>
                  <p className="feedback-text my-2 fs-6 text-light">Hello, users Our goal is to Find the perfect freelance services for your projects</p>

                </div>
                <div className="m-2">
                <img src={logo} alt="" width="100px" height="100px" />
                </div>
              </div>
            </div>
          </footer>
          <footer className="d-flex row-cols-sm-2 row-cols-1 flex-wrap justify-content-between align-items-center py-3 my-4 border-top">
            <div className="col d-flex align-items-center justify-content-center">
              <a href="/" className="mb-3 me-2 mb-md-0 text-muted text-decoration-none lh-1">
                <svg className="bi" width="30" height="24"><use xlinkHref="#bootstrap"></use></svg>
              </a>
              <span className="text-muted">© {year} TBI@KEC. All rights reserved</span>
            </div>

            <ul className="nav justify-ficon list-unstyled d-flex">
              <li className="ms-3 social-logo d-flex justify-content-center align-items-center">
                <i class="fa-brands fa-linkedin-in social-font"></i>
              </li>
              <li className="ms-3 social-logo d-flex justify-content-center align-items-center">
                <i class="fa-brands fa-twitter social-font"></i>
              </li>
              <li className="ms-3 social-logo d-flex justify-content-center align-items-center">
                <i class="fa-brands fa-facebook-f"></i>
              </li>
            </ul>
          </footer>
        </div>
      </div>
    </div>
  )
}

export default Footer
