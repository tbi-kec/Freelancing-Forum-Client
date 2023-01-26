import React from 'react'
import './AdminSideBar.scss';
import { Link } from 'react-router-dom';

const AdminSideBar = ({handleToggle}) => {
  return (
    <div className='admin-side-bar shadow'>
        <div className='cross-logo' onClick={handleToggle}>
            <i className="fa-solid fa-xmark" />
        </div>
        <div className="side-bar-container">
                <ul>
                    
                    <li onClick={handleToggle}>
                        <Link to='/admin/approval'>
                            FreeLancer Approval
                        </Link>
                    </li>
                    <li onClick={handleToggle}>
                        <Link to='/admin/request'>
                            Requested
                        </Link>
                    </li>
                    <li onClick={handleToggle}>
                        <Link to='/admin/progress'>
                            Progress
                            </Link>
                    </li>
                    <li onClick={handleToggle}>
                        <Link to='/admin/completed'>
                            Completed
                        </Link>
                    </li>
                    <li onClick={handleToggle}>
                        <Link to='/admin/report'>
                            Report
                        </Link>
                    </li>
            </ul>

              
        </div>
        
    </div>
  )
}

export default AdminSideBar
