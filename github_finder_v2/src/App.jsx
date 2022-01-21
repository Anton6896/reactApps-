import './App.css';
import React from 'react';
import NavbarLayout from './components/layout/NavbarLayout';
import Users from './components/users/users';
import { Container } from 'react-bootstrap';


class App extends React.Component {

    constructor() {
        super();
    }

    render() {
        return (
            <div>
                <NavbarLayout title={'myapp'} />

                <Container style={{margin: '30px 0 0 0'}}>
                    <Users />

                </Container>
            </div>

        );
    }
}

export default App;
