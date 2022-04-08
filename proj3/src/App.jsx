import React, {useEffect} from 'react';
import 'materialize-css/dist/css/materialize.min.css';
import M from 'materialize-css/dist/js/materialize.min.js'

import NavBar from './components/layout/NavBar';
import Logs from './components/logs/Logs'
import AddBtn from "./components/layout/AddBtn";
import AddLogModal from "./components/logs/AddLogModal";

export default function App() {

    useEffect(() => {
        M.AutoInit() // init materialize
    }, [])

    return (
        <div>
            <NavBar/>
            <div className={"container"}>
                <Logs/>
                <AddLogModal/>
                <AddBtn/>
            </div>


        </div>
    );
}