import UserItem from "./UserItem";
import Spinner from '../layout/Spiner'
import GithubContext from "../context/github/githubContext";
import React, {useContext} from 'react';


let Users = () => {
    let context = useContext(GithubContext)

    if (context.loading) {
        return (<div><Spinner/></div>)
    } else {
        return (
            <div style={usersStyle}>
                {context.users.map(user => (<UserItem key={user.id} user={user}/>))}
            </div>
        )
    }
}


// css style for greed 3 in a row
let usersStyle = {
    display: 'grid',
    gridTemplateColumns: "repeat(3, 1fr)",
    gridGap: '1rem'
}


export default Users;
