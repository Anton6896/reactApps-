import React from 'react'
import SearchBar from './searchBar'

export default function NavbarComponent() {
  return (
    <div>
      <nav style={{ marginButtom: '30px' }} className='#ba68c8 purple lighten-2 '>
        <div className="nav-wrapper navbar-fixed"  >

          <a href="#!" className="brand-logo">Logo</a>
          <a href="#" data-target="mobile-demo" className="sidenav-trigger"><i className="material-icons">menu</i></a>

          <ul className="right hide-on-med-and-down">
            {/* // on nav links */}
            <li><a href="sass.html">Sass</a></li>
            <li><a href="badges.html">Components</a></li>
            <li><a href="collapsible.html">Javascript</a></li>

            <li> <input id="search" placeholder="Search" /></li>  
            {/* add mode functionality with state  like search button and clear button */}
          </ul>

        </div>
      </nav>

      {/* // mobile links */}
      <ul className="sidenav" id="mobile-demo">
        <li><input id="search" placeholder="Search" /></li>
        <li><a href="sass.html">Sass</a></li>
        <li><a href="badges.html">Components</a></li>
        <li><a href="collapsible.html">Javascript</a></li>
      </ul>
    </div>
  )
}
