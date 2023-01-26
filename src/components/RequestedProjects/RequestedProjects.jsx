import React, { useState } from 'react'
import { useEffect } from 'react'
import { useSelector } from 'react-redux'
import './RequestedProjects.scss'

const RequestedProjects = () => {
  const project = useSelector((state)=>(state.adminReducer))
  const [projects,setProjects]=useState(null)
  const setData = ()=>{
    const data = project.data.filter(p => p.project_status=='pending-admin');
    setProjects([...data])
  }
  useEffect(()=>{
    if(project && project.data!=null){
        setData();
    }
  },[project])

  if(projects==null){
    return <h1>Loading ...</h1>
  }
  return (
    <div>
      
    </div>
  )
}

export default RequestedProjects
