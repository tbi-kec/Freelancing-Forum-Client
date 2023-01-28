import React from 'react'
import { Route,Routes } from 'react-router-dom'
import Login from './pages/Login/Login'
import Register from './pages/Register/Register'
import ProfileCreation from './pages/ProfileCreation/ProfileCreation'
import ProfileEdit from './pages/ProfileEdit/ProfileEdit'
import Home from './pages/Home/Home'
import ProjectView from './pages/ProjectView/ProjectView'
import DepartmentUsers from './pages/DepartmentUsers/DepartmentUsers'
import ProjectAdd from './pages/ProjectAdd/ProjectAdd'
import PreLoader from './components/PreLoader/PreLoader'
import StudentProfile from './pages/StudentProfile/StudentProfile'
import AdminPage from './pages/AdminPage/AdminPage'
import ProtectedRoutes from './ProtectedRoutes'

import Page404 from './pages/Page404/Page404'
import ResetPassword from './pages/ResetPassword/ResetPassword'
import ProjectShow from './pages/ProjectShow/ProjectShow'
import Department from './pages/Department/Department'
import DeveloperCommunity from './pages/DeveloperCommunity/DeveloperCommunity'
import AdminProtected from './AdminProtected'
import FreeLancerApproval from './components/FreeLancerApproval/FreeLancerApproval'
import RequestedProjects from './components/RequestedProjects/RequestedProjects'
import ProgressProjects from './components/PorgressProjects/ProgressProjects'
import CompletedProjects from './components/CompletedProjects/CompletedProjects'
import AdminUserReport from './components/AdminUserReport/AdminUserReport'
import AdminProjectReport from './components/AdminProjectReport/AdminProjectReport'
const AllRoutes = () => {
  return (
    <Routes>
             <Route path='/' element={<PreLoader /> } />
      
            <Route path='/login' element={<Login/>} />
            <Route path='/register' element={<Register/>} />
            <Route path='/project/add' element={<ProjectAdd /> } />
            <Route path='/forgotten-password/:uid/:token' element={<ResetPassword/>} />
          
      
         
           
         <Route element={<AdminProtected />}>
             <Route path='/admin' element={<AdminPage /> }>
                <Route path='/admin/approval' element={<FreeLancerApproval/>} />
                <Route path='/admin/request' element={<RequestedProjects/>} />
                <Route path='/admin/progress' element={<ProgressProjects/>}/>
                <Route path='/admin/completed' element={<CompletedProjects />} />
                <Route path='/admin/project/report' element={<AdminProjectReport />} />
                <Route path='/admin/user/report' element={<AdminUserReport />} />
              </Route >
          </Route>

           <Route element={<ProtectedRoutes/>} >
              <Route path='/profile/create' element={<ProfileCreation/>} />
              <Route path='/profile/:id' element={<StudentProfile/>} />
              <Route path='/profile/edit' element={<ProfileEdit/>} />
              <Route path='/home' element={<Home />} />
              <Route path='/department' element={<Department/>} />
              <Route path='/developer_community' element={<DeveloperCommunity />} />
              <Route path='/project/view' element={<ProjectView/>} />
              <Route path='/project/show/:id' element={<ProjectShow/>} />
              <Route path='/user/:dept' element={<DepartmentUsers/>} />
            </Route>
            
          
          <Route path="*"  element={<Page404/>}/>
   
    </Routes>
  )
}

export default AllRoutes
