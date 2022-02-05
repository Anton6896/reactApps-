import React, {useReducer} from "react";
import GithubContext from "./githubContext";
import GithubReducer from "./githubReduser";
import {types} from "../types";

export default function GithubState(props) {
    const initialState = {
        users: [],
        user: {},
        repos: [],
        loading: false,
        alertText: ''
    }

    const [state, dispatch] = useReducer(GithubReducer, initialState);

    const setLoading = () => {
        dispatch({type: types.SET_LOADING})
    }

    const showAlert = (text) => {
        dispatch({
            type: types.SET_ALERT,
            payload: text
        })

        setTimeout(() => {
            dispatch({
                type: types.SET_ALERT,
                payload: ''
            })
        }, 3000);
    }

    const searchUser = async (name) => {
        if (name) {
            setLoading()
            const url = `https://api.github.com/search/users?q=${name}&per_page=7&client_id=${process.env.REACT_APP_TOKEN}&client_secret=${process.env.REACT_APP_PASSWORD}`
            let res = await fetch(url)
            let data = await res.json()

            dispatch({
                type: types.SEARCH_USERS,
                payload: data.items
            })
        } else {
            showAlert('You must enter name for search users !')
        }
    }

    const clearSearch = async () => {
        dispatch({
            type: types.CLEAR_USERS
        })
    }

    const getUserProfile = async (username) => {
        setLoading()
        const url = `https://api.github.com/users/${username}?client_id=${process.env.REACT_APP_TOKEN}&client_secret=${process.env.REACT_APP_PASSWORD}`
        let res = await fetch(url)
        let data = await res.json()
        dispatch({
            type: types.GET_USER,
            payload: data
        })
    }

    const getUserRepos = async (username) => {
        setLoading()
        const url = `https://api.github.com/users/${username}/repos?client_id=${process.env.REACT_APP_TOKEN}&client_secret=${process.env.REACT_APP_PASSWORD}`
        let res = await fetch(url)
        let data = await res.json()

        dispatch({
            type: types.GET_REPOS,
            payload: data
        })
    }

    return (
        <GithubContext.Provider
            value={{
                users: state.users,
                user: state.user,
                repos: state.repos,
                loading: state.loading,
                alertText: state.alertText,

                searchUser,
                clearSearch,
                getUserProfile,
                getUserRepos
            }}>
            {props.children}
        </GithubContext.Provider>
    )
}
