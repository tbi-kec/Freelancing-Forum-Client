import React from "react"
import './Footer.css';
import {Link} from 'react-router-dom'
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
          <footer className="row row-cols-lg-4 row-cols-md-2 row-cols-sm-1 row-cols-1 justify-content-center align-items-center text-center">
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
            <div className="col my-5">
              <h5>Contact Us</h5>
              <ul className="nav flex-column">
                <li className="nav-item"><span  className="nav-link p-0 text-muted">Dr. R. Rajadevi</span></li>
                <li className="nav-item"><span className="nav-link p-0 text-muted">AI</span></li>
                <li className="nav-item mb-4"><span  className="nav-link p-0 text-muted">986508899</span></li>
                <li className="nav-item"><span className="nav-link p-0 text-muted">Ms. T. E. Ramya</span></li>
                <li className="nav-item"><span className="nav-link p-0 text-muted">CT - PG</span></li>
                <li className="nav-item mb-4"><span className="nav-link p-0 text-muted">8883677334</span></li>
              </ul>
            </div>
            <div className="col my-4">
            <div className="card me-5 shadow" style={{backgroundColor:"#647BAA"}} >
              <div className="card-body">
              <h5 className="mb-3 fw-bold " >Community Page</h5>
              <ul className="nav flex-column">
                <li className="nav-item mb-3"><Link to="/developer_community" className="nav-link p-0 text-white">Developer Community</Link></li>
                <li className="nav-item mb-3"><a href="#" rel="noreferrer noopener" className="nav-link p-0 text-white">Website Flow</a></li>
                <li className="nav-item mb-3"><a href="#" rel="noreferrer noopener" className="nav-link p-0 text-white">Video Reference</a></li>
              </ul>
              </div>
            </div>

            
            </div>
            <div className="col my-4">
              <div className="flogo-container">
              <div className="m-2">
                <img src={logo} alt="" width="100px" height="100px" />
                </div>
                <div className="row my-3 feedback feedback-btn p-3">
                  <a href="https://forms.gle/jchgyUMW4YpMYZfMA" target="_blank" className="btn btn-primary font-weight-bold">Give Your feedback <i className="fa-solid fa-arrow-right fs-5 forward-btn"></i></a>
                  <p className="feedback-text my-2 fs-6 text-dark">Hello users, Our goal is to Find the perfect freelance services for your projects</p>
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
              <a href="https://instagram.com/iic_kec?igshid=YmMyMTA2M2Y="rel="noreferrer noopener" target="_blank">
                <i className="fa-brands fa-instagram social-font"></i>
              </a>
              </li>
              <li className="ms-3 social-logo d-flex justify-content-center align-items-center">
              <a href="https://twitter.com/iickongu"rel="noreferrer noopener" target="_blank">
                <i className="fa-brands fa-twitter social-font"></i>
              </a>
              </li>
              <li className="ms-3 social-logo d-flex justify-content-center align-items-center">
              <a href="https://www.facebook.com/iickec?mibextid=ZbWKwL"rel="noreferrer noopener" target="_blank">
                <i className="fa-brands fa-facebook-f"></i>
              </a>
              </li>
            </ul>
          </footer>
        </div>
      </div>
    </div>
  )
}

export default Footer
