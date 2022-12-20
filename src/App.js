import React from 'react'
import AllRoutes from './AllRoutes'
import {BrowserRouter as Router} from 'react-router-dom'
import Alert from './components/Alert/Alert'
import './App.css'
const App = () => {
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