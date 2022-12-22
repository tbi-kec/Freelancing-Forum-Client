import React from 'react'
import { Route,Routes } from 'react-router-dom'
import Login from './pages/Login/Login'
import Register from './pages/Register/Register'
import ProfileCreation from './pages/ProfileCreation/ProfileCreation'
import ProfileEdit from './pages/ProfileEdit/ProfileEdit'
import Home from './pages/Home/Home'
import ProfileView from './pages/ProfileView/ProfileView'
import ProjectView from './pages/ProjectView/ProjectView'
import DepartmentUsers from './pages/DepartmentUsers/DepartmentUsers'
import ProjectAdd from './pages/ProjectAdd/ProjectAdd'
import StudentProfile from './pages/StudentProfile/StudentProfile'


const AllRoutes = () => {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/login' element={<Login/>} />
      <Route path='/register' element={<Register/>} />
      <Route path='/profile/create' element={<ProfileCreation/>} />
      <Route path='/profile/view' element={<ProfileView/>} />
      <Route path='/profile/edit' element={<ProfileEdit/>} />
      <Route path='/project/view' element={<ProjectView/>} />
      <Route path='/user/:id' element={<DepartmentUsers/>} />
      <Route path='/project/add' element={<ProjectAdd /> } />
      <Route path='/project/student-profile' element={<StudentProfile /> } />

    </Routes>
  )
}

export default AllRoutes