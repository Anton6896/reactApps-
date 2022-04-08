import React from 'react';

import {Provider} from "react-redux";
import {store} from "./state/store";
import TestComponent from "./components/TestComponent";

function App() {
    return (
        <Provider store={store}>
            <TestComponent/>
        </Provider>);
}

export default App