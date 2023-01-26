import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
const FreeLancerApproval = () => {
    const [users,setUsers]=useState(null)
    const freelancers = useSelector((state)=>(state.userReducer))
    const setData=()=>{
        const data=freelancers.data.filter(f=>f.admin_verify=='false' && f.user_type=='freelancer')
        setUsers([...data])
    }
    useEffect(()=>{
        if(freelancers?.data!=null){
            setData();
        }
    },[freelancers])
    if(users==null)
        return <h1>Loading...</h1>
  return (
    <div>
      {users.length}
    </div>
  )
}

export default FreeLancerApproval
