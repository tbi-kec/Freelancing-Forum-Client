import React, { useState } from "react";
import kec_cicle from "../../assets/kec_circle.png";
import iiclogo from "../../assets/IIC_logo.png";
import emdclogo from "../../assets/emdclogo22.png";
import tbilogo from "../../assets/TBIlogo.png";
import "./Launch.css";
import left from "../../assets/left.png";
import right from "../../assets/right.png";
import background from "../../assets/background.png";

function Launch({ onClickbtn }) {
  return (
    <div className="d-flex flex-column launch-page">
      <div className=" d-flex justify-content-center align-items-center launch-nav">
        <div className="launch-nav-img">
          <img src={kec_cicle} />
        </div>
        <h1 className="fw-bold">KEC and EMDC FREELANCING FORUM</h1>
      </div>
      <div className="d-flex flex-column justify-content-center align-items-center flex-grow-1 launch-quote">
        <h1 className="launch-header fs-2 fw-bold text-center">
          If you're working on something that you really care about,
          <br />
          you don't have to be pushed. The Vision pulls you.
        </h1>
        <button
          onClick={onClickbtn}
          className="btn launch-button m-5 fs-3 fw-bold"
        >
          Launch
        </button>
      </div>
      <div className="d-flex flex-row logo-div justify-content-center">
        <img src={emdclogo} width="100" height="100" className="m-5" />
        <img src={iiclogo} width="200" height="100" className="m-5" />
        <img src={tbilogo} width="200" height="100" className="m-5" />
      </div>
      <div className="left-img">
        <img src={left} alt="" />
      </div>
      <div className="right-img">
        <img src={right} alt="" />
      </div>
      <div className="bg">
        <img src={background} alt="" />
      </div>
    </div>
  );
}

export default Launch;
