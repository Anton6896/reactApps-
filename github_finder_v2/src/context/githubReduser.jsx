import React from "react";
import {types} from "../types";

export default function GithubReducer(state, action) {
    switch (action.type) {
        case types.SET_LOADING:
            return {
                ...state,
                loading: true
            }

        case types.SET_ALERT:
            return {
                ...state,
                alertText: action.payload
            }

        case types.CLEAR_USERS:
            return {
                ...state,
                users: [],
                loading: false
            }

        case types.GET_USER:
            return {
                ...state,
                user: action.payload,
                loading: false
            }

        case types.SEARCH_USERS:
            return {
                ...state,
                users: action.payload,
                loading: false
            }

        case types.GET_REPOS:
            return {
                ...state,
                repos: action.payload,
                loading: false
            }

        default:
            return state
    }
}