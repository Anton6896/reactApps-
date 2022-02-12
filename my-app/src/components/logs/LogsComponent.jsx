import React, { useEffect, useState } from 'react'
import LogItem from './LogItemComponent'
import { ListGroup, Spinner } from 'react-bootstrap'
import FloatingAdd from './FloatingAdd'

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
            <dev className='d-flex justify-content-center'>
                <Spinner animation="border" role="status">
                    <span className="visually-hidden">Loading...</span>
                </Spinner>
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

            <FloatingAdd/>

        </div>
    )
}
