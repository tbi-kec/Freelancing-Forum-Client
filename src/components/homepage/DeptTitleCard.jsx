import React from 'react'
import './DeptTitle.css'
export default function DeptTitleCard(params) {
    return (
        <div>
            <div className="dept_container ">
                <h2 className='title p-4 fs-4'>{params.title}</h2>
            </div>
        </div>
    )
}
