import React, { Component } from 'react';


export class UserProfile extends Component {
    componentDidMount = () => {
        const username = this.props.match.params.username

        console.log(username)
    }

    render() {

        return (
            <div>
                user data

            </div>);
    }
}

export default UserProfile;
