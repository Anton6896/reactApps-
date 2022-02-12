import React, { useEffect, useState } from 'react'
import LogItem from './LogItemComponent'
import { ListGroup } from 'react-bootstrap'


export default function LogsComponent() {

    let [logs, setLogs] = useState([])
    let [login, setLogin] = useState(false)

    let getLogs = async () => {
        setLogin(true)
        let res = await fetch('/logs')
        let data = await res.json()
        setLogs(data)
        setLogin(false)
    }

    useEffect(async () => {
        await getLogs()
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
                <ListGroup as="ul">
                    <ListGroup.Item as="li" variant='primary'>
                        Cras justo odio
                    </ListGroup.Item>

                    {
                        logs.map(l => (
                            <ListGroup.Item key={l.id} as="li">{l.message}</ListGroup.Item>
                        ))
                    }
                    
                    
                </ListGroup>
            }
        </div>
    )
}
