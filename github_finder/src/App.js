import Navbar from "./components/layout/Navbar";
import AlertMy from "./components/layout/AlertMy";
import SingleUser from "./components/users/SingleUser";
import About from "./pages/About";
import Home from "./pages/Home";
import NotFoundPage from "./pages/notFoundPage";

import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
// import React, {useState} from 'react';

import GithubState from "./components/context/github/githubState";
import AlertState from "./components/context/alerts/alertState";
import "./static/App.css";

const App = () => {


    /*
    * github state is contains the all variables and all data
    * that components is using in other words the is a brain of the app
    * */
    return (

        <GithubState>
            <AlertState>

                <Router>
                    <div className={"App"}>
                        <Navbar title={"GithubFinder"} icon={"fab fa-github"}/>

                        <div className="container">
                            <AlertMy/>

                            <Switch>
                                <Route exact path="/" component={Home}/>
                                <Route exact path="/about" component={About}/>
                                <Route exact path="/single_user/:login" component={SingleUser}
                                    // render={(props) => (<SingleUser {...props} params={foo}/>)}
                                />
                                <Route component={NotFoundPage}/>
                            </Switch>
                        </div>
                    </div>
                </Router>
            </AlertState>
        </GithubState>
    );
}

export default App;
