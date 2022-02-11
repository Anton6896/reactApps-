import React, { useEffect } from 'react';

import M from 'materialize-css/dist/js/materialize.min.js'
import 'materialize-css/dist/css/materialize.min.css'

import NavbarComponent from './components/NavBar/navbarComponent';
import SearchBar from './components/NavBar/searchBar';
import Logs from './components/logs/Logs';

export default function App() {

  useEffect(() => {
    M.AutoInit()  // init materialize JS  
  }, [])

  return (
    <div>
      <NavbarComponent />

      <div className='container'>
        <Logs />
      </div>

    </div>
  );
}