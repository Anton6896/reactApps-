import * as type from '../actions/types'

const initialState = {
    logs: null, // list of logs
    current: null,
    loading: false,
    error: null
}

// todo add messages system to show errors

const logReducer = (state = initialState, action) => {
    switch (action.type) {
        case type.SET_LOADING:
            return {...state, loading: true}
        case type.LOGS_ERROR:
            console.log(action.payload)
            return {...state, error: action.payload}
        case type.GET_LOGS:
            return {...state, logs: action.payload, loading: false}

        default:
            return state
    }
}
export default logReducer