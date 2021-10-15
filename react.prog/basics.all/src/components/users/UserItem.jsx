import React from 'react'
import PropTypes from 'prop-types'


const UserItem = (props) => {
    const { avatar_url, login, html_url } = props.user

    return (
        <div className="card text-center">
            <img src={avatar_url} alt="#" className='round-img' style={{ width: '60px' }} />
            <h4>{login}</h4>
            <a href={html_url} className='btn btn-dark btn-sm my-1'>more</a>
        </div>
    )

}

UserItem.propTypes = {
    user: PropTypes.object.isRequired
}

export default UserItem
