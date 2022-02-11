import React, {useEffect, useState } from 'react'
import LogItem from './LogItemComponent'

export default function LogsComponent() {

    let [logs, setLogs] = useState([])
    let [login, setLogin] = useState(false)

    useEffect(async () => {
        setLogin(true)
        let res = await fetch('/logs')
        let data = await res.json()
        setLogs(data)
        setLogin(false)

    }, [])

    if (login) {
        return (
            <dev>
                <p> Loaging ...</p>
            </dev>
        )
    }

    return (
        <div>
            {
                !login && logs.map(l => (
                    <div key={l.id}>
                        <LogItem item={l} />
                    </div>

                ))
            }
        </div>
    )
}
