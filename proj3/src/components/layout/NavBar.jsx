import React from "react";

const NavBar = () => {
    return (
        <div>
            <nav>
                <div className="nav-wrapper blue" style={{ marginBottom: '30px' }}>
                    <a href="#" className="brand-logo" style={{margin: '0 0 0 10px'}}>Logo</a>
                    <ul id="nav-mobile" className="right hide-on-med-and-down">
                        <li><a href="sass.html">Sass</a></li>
                        <li><a href="badges.html">Components</a></li>
                        <li><a href="collapsible.html">JavaScript</a></li>
                        <li><i className="material-icons">search</i></li>
                        <li>

                            <form style={{margin: '0 0 0 5px'}}>
                                <input id="search" type="search" style={{borderBottom: 'none'}}/>
                            </form>
                        </li>
                    </ul>


                </div>
            </nav>
        </div>
    );
}

export default NavBar;