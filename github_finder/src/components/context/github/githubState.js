import React, {useReducer} from "react";
import axios from "axios";
import GithubContext from "./githubContext";
import GithubReducer from "./githubReducer";
import {
    SEARCH_USERS,
    GET_USER,
    CLEAR_USERS,
    GET_REPOS,
    SET_LOADING,
    SET_ALERT,

} from '../types'

let githubClientId;
let githubClientSecret;

if (process.env.NODE_ENV !== 'production') {
    githubClientId = process.env.REACT_APP_GITHUB_CLIENT_ID;
    githubClientSecret = process.env.REACT_APP_GITHUB_CLIENT_SECRET;
} else {
    githubClientId = process.env.GITHUB_CLIENT_ID;
    githubClientSecret = process.env.GITHUB_CLIENT_SECRET;
}

const GithubState = (props) => {

    // global state
    const initialState = {
        users: [],
        user: {},
        repos: [],
        loading: false,
    }

    // -> https://reactjs.org/docs/hooks-reference.html#usereducer
    const [state, dispach] = useReducer(GithubReducer, initialState)


    let searchUsers = async (text) => {
        setLoading()
        let res = await axios.get(
            `https://api.github.com/search/users?q=${text}&client_id=${githubClientId}&client_secret=$
            {githubClientSecret}`
        );
        /*
        * grub data from github and send to reducer
        * that will append data to current state
        * */
        dispach({type: SEARCH_USERS, payload: res.data.items})
        console.log(":: users loaded from github");
    };


    let getUser = async (user_name) => {
        setLoading()
        let res = await axios.get(
            `https://api.github.com/users/${user_name}?client_id=${githubClientId}&client_secret=$
            {githubClientSecret}`
        );
        dispach({type: GET_USER, payload: res.data})
        console.log(":: got data for User");
    };


    let clearData = () => {
        dispach({type: CLEAR_USERS})
    }


    let getUserRepos = async (user_name) => {
        setLoading()
        let res = await axios.get(
            `https://api.github.com/users/${user_name}/repos?per_page=6&sort=created:asc&client_id=$
            {githubClientId}&client_secret=${githubClientSecret}`
        );
        dispach({type: GET_REPOS, payload: res.data})
        console.log(":: got user repos");
    };


    let setLoading = () => dispach({type: SET_LOADING})


    // crete an availability to whole app
    return (
        <GithubContext.Provider
            value={{
                /* every thing that gonna be available for entire app */
                users: state.users,
                user: state.user,
                repos: state.repos,
                loading: state.loading,
                clearData, searchUsers, getUserRepos, getUser, setLoading
            }}
        >
            {props.children}
        </GithubContext.Provider>
    )
};

export default GithubState
