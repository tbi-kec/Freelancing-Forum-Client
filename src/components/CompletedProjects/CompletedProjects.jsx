import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
const CompletedProjects = () => {
  const project = useSelector((state)=>(state.adminReducer));
  const [projects,setProjects]=useState(null);
  const getData = ()=>{
    const data=project.data.filter(p=>project.status=='completed');
    setProjects([...data]);
  }
  useEffect(()=>{
      if(project && project.data)
        getData();
  },[project])

  if(projects==null)
    return <h1>Loading ...</h1>
  return (
    <div>
      
    </div>
  )
}

export default CompletedProjects
