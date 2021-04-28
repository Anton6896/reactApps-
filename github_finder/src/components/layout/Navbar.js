// import React, {Component} from 'react'
import propTypes from 'prop-types';
import {Link} from 'react-router-dom'

/**
 * @param title string title of navbar
 * @param icon icon
 * @returns {JSX.Element} navigation bar for app
 */
let Navbar = ({title, icon}) => {

    return (
        <nav className={"navbar bg-primary"}>
            {/* i fontawesome lib*/}

            <div>
                <i className={icon}>.</i>
                {
                    (process.env.NODE_ENV !== 'production') ? <a href='http://localhost:3000/'>{title}</a> :
                        <a href='https://githubanttext.netlify.app/'>{title}</a>
                }
            </div>


            {/* Link will save the state between the pages ! */}
            <ul>
                <li><Link to='/about'>About </Link></li>
                <li><Link to='/'>Home </Link></li>
            </ul>

        </nav>
    )
}

Navbar.defaultProps = {
    title: "navbar",
    icon: "icon"
}

Navbar.propTypes = {
    title: propTypes.string.isRequired,  // force string props
    icon: propTypes.string.isRequired
}

export default Navbar;