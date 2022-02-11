import React from 'react'

export default function SearchBar() {
    return (
        <div>
            <nav className='#ba68c8 purple lighten-2 '>
                <div className="nav-wrapper">
                    <form>
                        <div className="input-field">
                            <input id="search" type="search" required />
                            <label className="label-icon" htmlFor="search"><i className="material-icons">search</i></label>
                            <i className="material-icons">close</i>
                        </div>
                    </form>
                </div>
            </nav>
        </div>
    )
}
