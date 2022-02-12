import React, { useEffect, useState } from 'react'
import LogItem from './LogItemComponent'
import { ListGroup } from 'react-bootstrap'


export default function LogsComponent() {

    const [logs, setLogs] = useState([])
    const [login, setLogin] = useState(false)
    const [show, setShow] = useState(false);


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
                        <p className='text-center mb-0 mt-0'>all logs</p>
                    </ListGroup.Item>

                    {
                        logs.map(l => ( 
                            <div key={l.id}>
                                <LogItem item={l} />
                            </div>

                        ))
                    }
                </ListGroup>
            }


        </div>
    )
}
