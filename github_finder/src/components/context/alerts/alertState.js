import React, {useReducer} from "react";
import AlertContext from "./alertContext";
import AlertReducer from "./alertReducer"
import {
    SET_ALERT, REMOVE_ALERT
} from '../types'

const AlertState = (props) => {

    const initialState = {
        alert: null,
    }

    const [state, dispach] = useReducer(AlertReducer, initialState)

    // search component throws alert
    let setAlertMy = (text, type) => {
        dispach({type: SET_ALERT, payload: {text, type}})
        setTimeout(() => dispach({type: REMOVE_ALERT}), 3000)
    };


    return (
        <AlertContext.Provider
            value={{
                alert: state.alert,
                setAlertMy,
            }}
        >
            {props.children}
        </AlertContext.Provider>
    )
}

export default AlertState