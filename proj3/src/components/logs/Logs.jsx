import React, {useEffect, useState} from "react";
import LogItem from "./LogItem";

const Logs = () => {
    const [logs, setLogs] = useState([])
    const [loading, setLoading] = useState(false)

    const getlogs = async () => {
        setLoading(true)
        let res = await fetch('/logs')
        let data = await res.json()
        setLogs(data)
        console.log(data)
        setLoading(false)
    }

    useEffect(() => {
        getlogs()
    }, [])

    if (loading) {
        return <div><p>Loading ...</p></div>
    }

    return (
        <div>
            <ul className={"collection with-header"}>
                <li className={"collection-header"} style={{textAlign: "center"}}><b>Sys Logs</b></li>
                {!loading && logs.length === 0 ?
                    (<p>No logs to show</p>) :
                    (logs.map(log => <LogItem  log={log} key={log.id}/>))}
            </ul>
        </div>
    )
}

export default Logs;