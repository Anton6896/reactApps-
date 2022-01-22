import './App.css';
import React from 'react';
import NavbarLayout from './components/layout/NavbarLayout';
import Users from './components/users/users';
import {Container, Spinner} from 'react-bootstrap';


class App extends React.Component {

    state = {
        users: [],
        loading: false,
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

        }
    }

    clearSearch = async () => {
        this.setState({users: []})
    }

    render() {
        return (
            <div>
                <NavbarLayout title={'myapp'}
                              searchUser={this.searchUser}
                              clearSearch={this.clearSearch}/>

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
