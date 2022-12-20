
import React from 'react';

import {useDispatch,useSelector} from 'react-redux'

const Alert = () => {
    const alerts=useSelector((state)=>(state.alertReducer))
    return(
        <div className="alert-wrapper">
            {alerts?.map((alert) => (
            <div key={alert.id} className={`alert alert-${alert.alertType}`}>
                {alert.msg}
            </div>
            ))}
        </div>
    )
    };

export default Alert
