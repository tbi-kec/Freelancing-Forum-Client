import React from 'react';
import DepartmentUsersChart from './DepartmentUsersChart';
import CategoryProjects from './CategoryProjects';
import RevenueChart from './RevenueChart';
import YearProjects from './YearProjects';

const Adminchart = () =>{
        return (
        <div className='container'>
            <div className="row p-5">
                    <DepartmentUsersChart />
            </div>

            <div className="row">
                <div className="col-md-6 p-3">
                    <CategoryProjects />
                </div>
                <div className="col-md-6 p-3">
                    <YearProjects />
                </div>
            </div>

           <div className="row p-5">
                <RevenueChart />
           </div>
        </div>
        );
}

export default  Adminchart;  