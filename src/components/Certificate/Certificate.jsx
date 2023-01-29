import React, {useState} from "react"
import './Certificate.css'
import cert_left from '../../assets/certificate_left.png';
import cert_right from '../../assets/certificate_right.png';
import logo from "../../assets/keclogo.png";
import iiclogo from "../../assets/IIC_logo.png";
import emdclogo from "../../assets/emdclogo22.png";
import tbilogo from "../../assets/TBIlogo.png";

function Certificate({Name,ProjectName}){
  return(
    <div className="certificate">
      <div className="certificate_left">
        <img src={cert_left} alt=""/>
      </div>
      <div className="d-flex flex-column h-100 justify-content-center certificate-content ">
        <div className="d-flex flex-column justify-content-center align-items-center certificate-main">
          <h1 className="certificate-header">CERTIFICATE</h1>
          <p className="certificate-sub-header">FOR PROJECT</p>
          <div className="certificate-banner">
            <div className="left"></div>
            <p>THIS CERTIFICATE IS PROUDLY PRESENTED TO</p>
            <div className="right"></div>
          </div>
          <h1 className="certificate-name m-3">{Name}</h1>
          <h1 className="certificate-for">for</h1>
          <h1 className="certificate-projectname m-3">{ProjectName}</h1>
        </div>
        <div className="d-flex flex-row bottom-img-div justify-content-center">
          <img src={logo} alt="" width="100" height="100"/>
          <img src={iiclogo} alt="" width="200" height="100"/>
          <img src={emdclogo} alt="" width="100" height="100"/>
          <img src={tbilogo} alt="" width="200" height="100"/>
        </div>
        <div className="d-flex flex-row certificate-bottom justify-content-between my-5">
          <h1>DATE</h1>
          <h1>SIGNATURE</h1>
        </div>
      </div>
      <div className="certificate_right">
        <img src={cert_right} alt=""/>
      </div>
    </div>
    )
}

export default Certificate
