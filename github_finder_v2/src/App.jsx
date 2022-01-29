import React, { useState, useEffect } from 'react';
import { Alert, Container, Spinner } from 'react-bootstrap';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import NavbarLayout from './components/layout/NavbarLayout';
import Users from './components/users/users';
import About from "./components/pages/About";
import UserProfile from './components/users/UserProfile';
import UserRepos from './components/users/UserRepos'


export default function App() {

    const [users, setUsers] = useState([])
    const [user, setUser] = useState({})
    const [repos, setRepos] = useState([])
    const [loading, setLoading] = useState(false)
    const [alertText, setAlertText] = useState('')


    const searchUser = async (name) => {
        if (name) {
            setLoading(true)
            const url = `https://api.github.com/search/users?q=${name}&per_page=7&client_id=${process.env.REACT_APP_TOKEN}&client_secret=${process.env.REACT_APP_PASSWORD}`
            let res = await fetch(url)
            let data = await res.json()
            setUsers(data.items)
            setLoading(false)
        } else {
            showAlert('You must enter name for search users !')
        }
    }

    const getUserProfile = async (username) => {
        setLoading(true)
        const url = `https://api.github.com/users/${username}?client_id=${process.env.REACT_APP_TOKEN}&client_secret=${process.env.REACT_APP_PASSWORD}`
        let res = await fetch(url)
        let data = await res.json()
        setUser(data)
        setLoading(false)
    }

    const getUserRepos = async (username) => {
        setLoading(true)
        const url = `https://api.github.com/users/${username}/repos?client_id=${process.env.REACT_APP_TOKEN}&client_secret=${process.env.REACT_APP_PASSWORD}`
        let res = await fetch(url)
        let data = await res.json()
        setRepos(data)
        setLoading(false)
    }

    const clearSearch = async () => {
        setUsers([])
        setLoading(false)
    }

    const showAlert = (text) => {
        setAlertText(text)

        setTimeout(() => {
            setAlertText('')
        }, 3000);
    }


    return (
        <Router>
            <NavbarLayout title={'myapp'}
                searchUser={searchUser}
                clearSearch={clearSearch}
                canClean={!!users.length}
            />



            <Container style={{ marginTop: '30px' }}>

                {alertText && <Alert variant={'primary'}>{alertText}</Alert>}

                <Routes>
                    <Route path='/' element={
                        <div>
                            {
                                loading ?
                                    <Spinner animation="border" role="status">
                                        <span className="visually-hidden">Loading...</span>
                                    </Spinner>
                                    :
                                    <Users users={users} />
                            }
                        </div>
                    } />

                    <Route path='/about' element={<About />} />

                    <Route path='/user/:username' element={
                        <UserProfile getUserProfile={getUserProfile} user={user} />
                    } />

                    <Route path='/user/:username/repos' element={
                        <UserRepos getUserRepos={getUserRepos} repos={repos} />
                    } />

                </Routes>
            </Container>
        </Router>
    );

}
