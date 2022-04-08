import * as type from './types'

export const setLoading = () => {
    return {
        type: type.SET_LOADING
    }
}

// function that return a function (thunk lib do background work for that (dispatch))
export const getLogs = () => async dispatch => {
    try {
        setLoading()
        const res = await fetch('/logs')
        const data = await res.json()
        dispatch({
            type: type.GET_LOGS,
            payload: data
        })

    } catch (e) {
        dispatch({
            type: type.LOGS_ERROR,
            payload: e.response.data
        })
    }
}