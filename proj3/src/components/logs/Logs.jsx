import React, {useEffect} from "react";
import LogItem from "./LogItem";
import LoaderDiv from "../layout/Preloader";
import {useSelector, useDispatch} from "react-redux"
import {bindActionCreators} from "redux"

import * as actions from '../../state/actions/logActions'

const Logs = () => {

    const {loading, logs} = useSelector((state) => state.log)
    const dispatch = useDispatch()
    const {getLogs} = bindActionCreators(actions, dispatch)


    useEffect(() => {
        getLogs()
    }, [])

    if (loading || logs === null) {
        return <LoaderDiv/>
    }

    return (
        <div>
            <ul className={"collection with-header"}>
                <li className={"collection-header"} style={{textAlign: "center"}}><b>Sys Logs</b></li>
                {!loading && logs.length === 0 ?
                    (<p>No logs to show</p>) :
                    (logs.map(log => <LogItem log={log} key={log.id}/>))}
            </ul>
        </div>
    )
}


export default Logs;