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

        case types.SEARCH_USERS:
            return {
                ...state,
                users: action.payload,
                loading: false
            }

        default:
            return state
    }
}