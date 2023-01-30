import React, {useEffect} from 'react'
import AllRoutes from './AllRoutes'
import {BrowserRouter as Router} from 'react-router-dom'
import Alert from './components/Alert/Alert'
import Loading from './components/Loading/Loading'
import './App.css'

import {setCurrentUser} from './actions/currentUser'
import {useDispatch} from 'react-redux'
import {getAllProjects} from './actions/project'
import {getAllUsers} from './actions/user'
import {getConstants} from './actions/constant'
import {getMyDetails} from './actions/myDetails'
import {getRequestedProjects} from './actions/admin'

const App = () => {
  const dispatch = useDispatch();
 
  useEffect(() => {
     const getData = async () => {
        const token = await localStorage.getItem("freelance");
        if (token) {
          dispatch(setCurrentUser(JSON.parse(token)))
        }
      }
  getData()
    dispatch(getAllProjects())
    dispatch(getAllUsers())
    dispatch(getConstants())
    dispatch(getMyDetails())
    dispatch(getRequestedProjects())
  }, [dispatch])
  return (
    <div className='app-container'>
      <Router>
        <Loading />
        <Alert />
        <AllRoutes />
      </Router>
    </div>
  )
}

export default App
