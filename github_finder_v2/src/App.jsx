import React, {useContext} from 'react';
import {Alert, Container, Spinner} from 'react-bootstrap';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'

import NavbarLayout from './components/layout/NavbarLayout';
import Users from './components/users/users';
import About from "./components/pages/About";
import UserProfile from './components/users/UserProfile';
import UserRepos from './components/users/UserRepos'

import GithubContext from "./context/githubContext";

export default function App() {

    const context = useContext(GithubContext)
    let {alertText, loading} = context

    return (
        <Router>
            <NavbarLayout title={'myapp'}/>
            <Container style={{marginTop: '30px'}}>

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
                                    <Users/>
                            }
                        </div>
                    }/>

                    <Route path='/about' element={<About/>}/>
                    <Route path='/user/:username' element={<UserProfile/>}/>
                    <Route path='/user/:username/repos' element={<UserRepos/>}/>
                </Routes>
            </Container>
        </Router>
    );
}
