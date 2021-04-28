import AlertContext from "../context/alerts/alertContext";
import React, {useContext} from 'react';

const AlertMy = () => {
    let alertContext = useContext(AlertContext)
    let {alert} = alertContext

    return (
        alert && (
            <div className={`alert alert-${alert.type}`}>
                <i className="fas fa-info-circle">.</i> {alert.text}
            </div>
        )
    )
}

export default AlertMy