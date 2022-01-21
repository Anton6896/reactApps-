import React from 'react';
import { Row, Col } from "react-bootstrap";
import UserItem from "./UserItem"

const Users = ({ users }) => {
    return (
        <Row>
            {users.map(user => (
                <Col key={user.id}>
                    <UserItem user={user} />
                </Col>
            ))}
        </Row>
    );
}

export default Users;
