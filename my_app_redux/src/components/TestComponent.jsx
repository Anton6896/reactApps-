import React from 'react';
import {useSelector, useDispatch} from "react-redux";
import {bindActionCreators} from "redux";
import * as bankActions from "../state/action-creators/index"

export default function TestComponent() {

    const state = useSelector((state) => state.account)
    const dispatch = useDispatch()
    const {depositMoney, withdrawMoney} = bindActionCreators(bankActions, dispatch)

    return (
        <div>
            <p>state amount {state}</p>
            <button onClick={() => depositMoney(100)}> deposit </button>
            <button onClick={() => withdrawMoney(20)}> withdraw </button>
        </div>
    );
}
