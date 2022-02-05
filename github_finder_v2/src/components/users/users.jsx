import React, {useContext} from 'react';
import { Row, Col } from "react-bootstrap";
import UserItem from "./UserItem"
import GithubContext from "../../context/githubContext";

const Users = () => {
    const context = useContext(GithubContext)
    let {users} = context

    return (
        <Row>
            {users && users.map(user => (
                <Col key={user.id}>
                    <UserItem user={user} />
                </Col>
            ))}
        </Row>
    );
}

export default Users;
