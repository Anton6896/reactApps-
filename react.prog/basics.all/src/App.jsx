import React, { Component } from "react";
import Navbar from "./components/layout/Navbar"
import Users from "./components/users/Users"

import "./App.css";
import axios from "axios";

class App extends Component {

  state = {
    users: [],
    loading: false
  }

  async componentDidMount() {
    this.setState({ loading: true })

    const allUsersUrl = `https://api.github.com/users?
    client_id=${process.env.REACT_APP_ID}
    &client_secret=${process.env.REACT_APP_SECRET}`

    const res = await axios.get(allUsersUrl)
    this.setState({ loading: false, users: res.data })
  }

  render() {
    return (
      <div className="App">
        <Navbar
          title=' githubFinder' icon='fab fa-github-alt'
        />

        <div className="container">
          <Users
            loading={this.state.loading} users={this.state.users}
          />

        </div>
      </div>
    );
  }
}

export default App;
