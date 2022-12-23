import React, { useState } from "react";
import "./Skills.css";

export default function Skills() {
  const [skills, setskills] = useState([
    { name: "HTML", level: "beginner" },
    { name: "HTML", level: "intermediate" },
  ]);

  const handleSkill = () =>{
    
  }
  return (
    <div className="student-card align-items-start ">
      <div className="student-skills mb-4 ">
        <h2>Skills</h2>
      </div>
      <div className="row">
        <div className="skill d-flex">
          {skills.map((s, idx) => (
            <div
              className={` skill-${s.level}  skill-container py-1 px-2 m-2 rounded-3`}
              key={idx}
            >
              <div>{s.name}</div>
            </div>
          ))}
        </div>
      </div>

      <div className="add-skill-div">
        <div href="" className="add-skill" onClick={handleSkill}>
          <i class="fa-solid fa-plus"></i>
        </div>
      </div>
    </div>
  );
}