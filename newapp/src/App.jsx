import React, { useEffect } from 'react';

import M from 'materialize-css/dist/js/materialize.min.js'
import 'materialize-css/dist/css/materialize.min.css'

export default function App() {

  useEffect(() => {
    M.AutoInit()  // init materialize JS  
  }, [])

  return (
    <div>
      <nav style={{ marginButtom: '30px' }} className='#ba68c8 purple lighten-2'>
        <div className="nav-wrapper"  >
          <a href="#!" style={{marginLeft: '30px'}} className="brand-logo">Logo</a>
          <a href="#" data-target="mobile-demo" className="sidenav-trigger"><i className="material-icons">menu</i></a>
          <ul className="right hide-on-med-and-down">
            {/* // on nav links */}
            <li><a href="sass.html">Sass</a></li>
            <li><a href="badges.html">Components</a></li>
            <li><a href="collapsible.html">Javascript</a></li>
            <li><a href="mobile.html">Mobile</a></li>
          </ul>
        </div>
      </nav>

      {/* // mobile links */}
      <ul className="sidenav" id="mobile-demo">
        <li><a href="sass.html">Sass</a></li>
        <li><a href="badges.html">Components</a></li>
        <li><a href="collapsible.html">Javascript</a></li>
      </ul>


    </div>
  );
}