import React from 'react'
import UserItem from "./UserItem"
import { Spinner } from '../layout/Spinner'
import PropTypes from 'prop-types'


const Users = (props) => {
    const { users, loading } = props
    return (
        <div style={usersStyle}>
            {
                loading ? <Spinner /> :
                    users.map(user => (<UserItem key={user.id} user={user} />))
            }
        </div>
    )

}

Users.propTypes = {
    users: PropTypes.array.isRequired,
    loading: PropTypes.bool.isRequired
}

const usersStyle = {
    display: 'grid',
    gridTemplateColumns: 'repeat(3, 1fr)',
    gridGap: '1rem'
}

export default Users
