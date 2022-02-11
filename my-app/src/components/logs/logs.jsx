import React, { Component, useEffect, useState } from 'react'


export default function LogsComponent() {

    let [logs, setLogs] = useState([])
    let [login, setLogin] = useState(false)

    useEffect(async () => {
        setLogin(true)
        let res = await fetch('/logs')
        let data = await red.json()
        setLogs(data)
        setLogin(false)

    }, [])

    return (
        <div>LogsComponent</div>
    )
}
