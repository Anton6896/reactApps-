import React from "react";
import Moment from 'react-moment'

const LogItem = ({log}) => {

    // add delete log action

    return (
        <li className={"collection-item"}>
            <a href={"#edit-log-modal"}
               className={`modal-trigger ${log.attention ? 'red-text' : 'blue-text'}`}>
                {log.message}
            </a>
            <br/>
            <span className={"grey-text"}>
                lust updated by {log.tech} at <Moment format={"MMMM Do YYYY, h:mm"}>{log.date}</Moment>
            </span>

            <a href="#" className="secondary-content">
                <i className="material-icons" style={{color: "red"}}>delete</i>
            </a>
        </li>
    )
}

export default LogItem;