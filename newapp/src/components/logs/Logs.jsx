import React, { useEffect, useState } from 'react'

export default function Logs() {

    const [logs, setLogs] = useState([])
    const [loading, setLoading] = useState(false)

    const getLogs = async () => {
        setLoading(true)
        let res = await fetch('/logs')
        let data = await res.json()
        setLogs(data)
        setLoading(false)
    }

    useEffect(() => {
        getLogs()
    }, [])

    if (loading) {
        return (
            <div>
                <p>loading </p>
            </div>
        )
    }


    return (
        <div>
            {
                !loading && logs.map(l => (<p key={l.id}>{l.message}</p>))
            }
        </div>
    )
}
