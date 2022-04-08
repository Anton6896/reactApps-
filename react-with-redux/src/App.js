import React from 'react';
import Provider from "react-redux";
import {store} from "./state/store";

// import {useSelector} from "react-redux";

export default function App() {
    return (
        <Provider store={store}>
            <div>
                <p>testing</p>
            </div>

        </Provider>
    );
}
