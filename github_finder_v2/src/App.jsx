import './App.css';
import React, {useEffect} from 'react';
import NavbarLayout from './components/layout/NavbarLayout';
import Users from './components/users/users';
import {Alert, Container, Spinner} from 'react-bootstrap';
import {typeImplementation} from "@testing-library/user-event/dist/type/typeImplementation";


class App extends React.Component {

    state = {
        users: [],
        loading: false,
        alertText: ''
    }

    // componentDidMount = async () => {
    //     this.setState({loading: true})
    //
    //     const url = `https://api.github.com/users?per_page=10&
    //     client_id=${process.env.TOKEN}&
    //     client_secret=${process.env.PASSWORD}`
    //     let res = await fetch(url)
    //     let data = await res.json()
    //
    //     this.setState({users: data})
    //     this.setState({loading: false})
    // }

    searchUser = async (name) => {
        if (name) {
            this.setState({loading: true})

            const url = `https://api.github.com/search/users?q=${name}&
                client_id=${process.env.TOKEN}&
                client_secret=${process.env.PASSWORD}`
            let res = await fetch(url)
            let data = await res.json()

            this.setState({users: data.items})
            this.setState({loading: false})
        } else {
            // show alert
            this.showAlert('You must enter name for search users !')
        }
    }

    clearSearch = async () => {
        this.setState({users: [], loading: false})
    }

    showAlert = (text) => {
        this.setState({alertText: text})

        setTimeout(() => {
            this.setState({alertText: ''})
        }, 3000);
    }

    render() {
        return (
            <div>
                <NavbarLayout title={'myapp'}
                              searchUser={this.searchUser}
                              clearSearch={this.clearSearch}
                              canClean={!!this.state.users.length}/>

                {
                    this.state.alertText &&
                    <Alert variant={'warning'}>
                        {this.state.alertText}
                    </Alert>
                }

                <Container style={{margin: '30px 0 0 0'}}>
                    {

                        this.state.loading ?
                            <Spinner animation="border" role="status">
                                <span className="visually-hidden">Loading...</span>
                            </Spinner>
                            :
                            <Users users={this.state.users}/>
                    }

                </Container>
            </div>

        );
    }
}

export default App;
