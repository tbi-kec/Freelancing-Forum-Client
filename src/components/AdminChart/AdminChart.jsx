import React from 'react';
import DepartmentUsersChart from './DepartmentUsersChart';
import CategoryProjects from './CategoryProjects';
import RevenueChart from './RevenueChart';
import YearProjects from './YearProjects';

const Adminchart = () =>{
        return (
        <div className='container my-5'>
            <div className="row my-5">
                    <DepartmentUsersChart />
            </div>

            <div className="row my-5">
                <div className="col-md-12">
                    <CategoryProjects />
                </div>
                {/* <div className="col-md-6 ">
                    <YearProjects />
                </div> */}
            </div>
            
           <div className="row my-5">
                <RevenueChart />
           </div>
        </div>
        );
}

export default  Adminchart;  