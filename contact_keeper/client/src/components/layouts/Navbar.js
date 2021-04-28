import React from "react"
import propTypes from "prop-types"
import {Link} from "react-router-dom"

let Navbar = ({title, icon}) => {
    return (
        <div className={"navbar bg-primary"}>
            <h3>
                <i className={icon}/> {title}
            </h3>
            <ul>
                <li><Link to={'/about'}>About</Link></li>
                <li><Link to={'/'}>Home</Link></li>
            </ul>
        </div>
    );
}
Navbar.propTypes = {
    title: propTypes.string.isRequired,
    icon: propTypes.string
}
Navbar.defaultProps = {
    title: "Contacts App Udemy",
    icon: "fas fa-id-card-alt"
}

export default Navbar;
