import * as type from './types'

export const setLoading = () => {
    return {
        type: type.SET_LOADING
    }
}

export const getLogs = () => async (dispatch) => {
    try {
        setLoading()
        const res = await fetch('/logs?_sort=id&_order=desc')
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


export const creteLog = (data) => async (dispatch) => {
    let date = new Date();
    let raw = JSON.stringify({
        "message": data.message,
        "attention": data.attention,
        "tech": data.tech,
        "date": date.toISOString()
    });

    let myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    let requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: raw
    };

    fetch('/logs', requestOptions)
        .then(res => res.json())
        .then(data => {
            dispatch({
                type: type.ADD_LOG,
                payload: data
            })
        })
        .catch(e => {
            dispatch({
                type: type.LOGS_ERROR,
                payload: e.response
            })
        })
}

