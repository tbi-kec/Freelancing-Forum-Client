import React from "react";
import "./Skills.css";

export default function Skills({skills}) {

  return (
    <div className="student-card align-items-start ">
      <div className="student-skills mb-4 ">
        <h2>Skills</h2>
       <div className="skill-beginner" title="beginner" style={{height:"12px",width:"12px" ,borderRadius:"50%"}}></div>
       <div className="skill-intermediate" title="intermediate" style={{height:"12px",width:"12px",borderRadius:"50%"}}></div>
       <div className="skill-expert" title="expert" style={{height:"12px",width:"12px",borderRadius:"50%"}}></div>

      </div>
      <div className="row">
        <div className="skill d-flex">
          {skills?.map((s, idx) => (
            <div
              className={` skill-${s.level}  skill-container py-1 px-2 m-2 rounded-3`}
              key={idx}
            >
              <div>{s.name}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
