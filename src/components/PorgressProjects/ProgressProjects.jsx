import React, { useEffect,useState } from 'react'
import { useSelector } from 'react-redux'
const ProgressProjects = () => {
  const project = useSelector((state)=>(state.projectReducer));
  const [projects,setProjects]=useState(null);
  const status = ['created','pending-user','pending-admin','completed']
  const getData = ()=>{
      const data = project.data.filter(p => p.project_status === 'assigned' || p.project_status === 'partial' || p.project_status === 'testing' )
      setProjects([...data])
  }
  useEffect(()=>{
      if(project && project.data!=null)
          getData();
  },[project])
  if(projects==null){
    return <h1>Loading...</h1>
  }
  return (
    <div>

    </div>
  )
}

export default ProgressProjects
