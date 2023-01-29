import React from 'react'
import './AdminSideBar.scss';
import { Link } from 'react-router-dom';

const AdminSideBar = ({ handleToggle }) => {
    const bars = [
        { link: '/admin/', text: "Dashboard" },
        { link: '/admin/approval', text: "Freelancer Approval" },
        { link: '/admin/request', text: "Requested Projects" },
        { link: '/admin/progress', text: "Progress Projects" },
        { link: '/admin/completed', text: "Completed Projects" },
        { link: '/admin/project/report', text: " Project Report" },
        { link: '/admin/user/report', text: "User Report" },
        { link: "/admin/create", text: "Create Admin" }
    ]
    return (
        // <div className='admin-side-bar shadow'>
        //     <div className='cross-logo' onClick={handleToggle}>
        //         <i className="fa-solid fa-xmark" />
        //     </div>
        //     <div className="side-bar-container">
        //         <ul>
        //             {bars.map((b,i)=>(
        //                 <li key={i} onClick={handleToggle}>
        //                     <Link to={b.link}>{b.text}</Link>
        //                 </li>
        //             ))}        
        //         </ul>
        //     </div>

        // </div>
        <>
            <div className="offcanvas offcanvas-start" data-bs-scroll="true" tabindex="-1" id="offcanvasWithBothOptions" aria-labelledby="offcanvasWithBothOptionsLabel">
                <div className="offcanvas-header">
                    <h5 className="offcanvas-title" id="offcanvasWithBothOptionsLabel"><b>Admin Panel</b></h5>
                    <div type="button" className="cross-logo " data-bs-dismiss="offcanvas" aria-label="Close"><i className="fa-solid fa-xmark" /></div>
                </div>  
                <div className="offcanvas-body">
                    <ul>
                        {bars.map((b, i) => (
                            <li key={i} onClick={handleToggle}>
                                <Link to={b.link}>{b.text}</Link>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </>
    )
}

export default AdminSideBar
