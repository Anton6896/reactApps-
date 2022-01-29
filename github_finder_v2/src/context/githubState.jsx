import React, { useReducer } from "react";
import GithubContext from "./githubContext";

import {
    SEARCH_USERS,
    GET_USER,
    CLEAR_USERS,
    GET_REPOS,
    SET_LOADING,
    SET_ALERT,
} from '../types'
