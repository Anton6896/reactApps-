import React, {useState, useEffect, useContext} from 'react';
import { useParams } from 'react-router-dom';
import Table from 'react-bootstrap/Table'
import { Button } from 'react-bootstrap';
import {Link} from "react-router-dom";
import GithubContext from "../../context/githubContext";


export default function UserProfile() {
    let { username } = useParams()
    const context = useContext(GithubContext)
    let {getUserProfile, user} = context


    useEffect(() => {
        getUserProfile(username)
    }, []);

    return (
        <div>
            <div className='row'>
                <Button as={Link} to={`/user/${user.login}/repos`} variant="info">Info</Button>
            </div>
            <div className='row' style={{marginTop: '20px'}}>
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
            </div>
        </div>
    );
}
