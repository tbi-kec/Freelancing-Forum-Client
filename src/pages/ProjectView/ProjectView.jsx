import React, { useState } from "react";
import { Link } from "react-router-dom";
import ProjectCard from "../../components/ProjectCard/ProjectCard";
import {useSelector} from 'react-redux'
import { useEffect } from "react";

function ProjectView() {
  const projects = useSelector((state)=>(state.projectReducer))
  const constants =useSelector((state)=>(state.constantReducer))
  const current = useSelector((state)=>(state.currentUserReducer))
  const [domain,setDomain]=useState([])
  const [filteredProject,setFilteredProject]=useState([])
  const [search,setSearch]=useState('')
  const [currentCategory,setCurrentCategory]=useState('')
  useEffect(()=>{
    if(constants.data){
      setDomain([...constants.data[0].domain])
    }
  },[constants])
  useEffect(()=>{
    
     const Filtered=projects.data?.filter((p)=> (p.title.toLowerCase().includes(search?.toLowerCase()) ))
      setFilteredProject([...Filtered])
    
  },[search,projects.data])

  useEffect(()=>{
    if(currentCategory!==''){
     const Filtered=projects.data?.filter((p)=> (p.category===currentCategory ))
      setFilteredProject([...Filtered])
    }
  },[currentCategory,projects.data])

  
  return (
    <div>
      <div className="row d-flex align-items-center">
        <div className="col-md-1">
        <Link to={current.user?.isAdmin ?'/admin' : '/home'  }>
          <div className=" d-flex m-3">
            <i className="fa-solid fa-arrow-left back-btn"></i>
          </div>
        </Link>
        </div>
        <div className="col-md-4 p-2 px-5">
          <div className="input-group">
            <input
              type="text"
              className="form-control search-bar"
              placeholder="&#128269; search"
              aria-label="Recipient's username"
              aria-describedby="button-addon2"
              value={search}
              onChange={(e)=>setSearch(e.target.value)}
            />
            <button
              className="btn text-light search-bar search-btn"
              type="button"
              id="button-addon2"
            >
              Talent
            </button>
          </div>
        </div>
        <div className="col-md-3 p-2 px-5">
          <div className="form-group">
            <select name="domain" className="form-select" onChange={(e)=>setCurrentCategory(e.target.value)} value={currentCategory} >
              <option value="" diabled hidden selected >
                Category
              </option>
               {domain.map((d,idx)=>(
                    <option key={idx} value={d}>{d}</option>
                ))}
            </select>
          </div>
        </div>
      </div>
      <div className="m-5 pb-5">
        {filteredProject?.map(p=>(
          <ProjectCard project={p} constant={constants.data[0]} key={p._id} />
        ))}
      </div>
    </div>
  );
}

export default ProjectView;
