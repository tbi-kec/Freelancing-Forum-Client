import React, { useEffect } from 'react'
import AllRoutes from './AllRoutes'
import {BrowserRouter as Router} from 'react-router-dom'
import Alert from './components/Alert/Alert'
import './App.css'
import { setCurrentUser } from './actions/currentUser'
import { useDispatch } from 'react-redux'
import { getAllProjects } from './actions/project'
import { getAllUsers } from './actions/user'
import { getConstants } from './actions/constant'
import { getMyDetails } from './actions/myDetails'
const App = () => {
  const dispatch = useDispatch();
  const getData = async()=>{
    const token = await localStorage.getItem("freelance");
    if(token){
      dispatch(setCurrentUser(JSON.parse(token)))
    }
  }
  useEffect(()=>{
    getData();
    dispatch(getAllProjects())
    dispatch(getAllUsers())
    dispatch(getConstants())
    dispatch(getMyDetails())
  },[])
  return (
    <div className='app-container'>
      <Router>
          <Alert />
          <AllRoutes />
      </Router>
    </div>
  )
}

export default App