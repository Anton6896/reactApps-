import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import GithubState from "./context/githubState";

ReactDOM.render(
    <React.StrictMode>
        <GithubState>
            <App/>
        </GithubState>
    </React.StrictMode>,
    document.getElementById('root')
);
