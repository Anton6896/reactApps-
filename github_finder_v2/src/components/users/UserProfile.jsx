import React, {useState, useEffect} from 'react';
import {useParams} from 'react-router-dom';
import Table from 'react-bootstrap/Table'
import {Container} from 'react-bootstrap';


export default function UserProfile({getUserProfile, user}) {
    let {username} = useParams()

    useEffect(() => {
        getUserProfile(username)
    }, [getUserProfile, username]);

    return (
        <Table striped bordered hover>
            <thead>
            <tr>
                <th>#</th>
                <th>key</th>
                <th>value</th>
            </tr>
            </thead>
            <tbody>
            {
                Object.keys(user).map((key, i) => {
                    return (
                        <tr key={i}>
                            <td>{i}</td>
                            <td>{key}</td>
                            <td>{user[key]}</td>
                        </tr>
                    )
                })
            }
            </tbody>
        </Table>
    );
}

