import React from 'react';
import { Card, Button, Container } from "react-bootstrap";

const UserItem = ({user}) => {
    const { avatar_url, login, html_url } = user

    return (
        <Container>
            <Card style={{ width: '18rem', margin: "25px 0 0 0" }} bg={'light'}>
                <Card.Img variant="top" src={avatar_url} />
                <Card.Body>
                    <Card.Title>{login}</Card.Title>
                    <Card.Text>
                        Some quick example text to build on the card title and make up the bulk of
                        the card's content.
                    </Card.Text>
                    <Button href={html_url}>users_profile</Button>
                </Card.Body>
            </Card>
        </Container>
    );

}

export default UserItem;