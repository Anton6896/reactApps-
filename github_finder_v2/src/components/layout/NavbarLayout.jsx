import React, { Component } from 'react';
import { Navbar, Nav, NavDropdown, Dropdown, Container, Form, FormControl, Button } from 'react-bootstrap'


export class NavbarLayout extends Component {
    render() {
        return (
            <Navbar bg="light" expand="lg">
                <Container>
                    <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link href="#home">Home</Nav.Link>
                            <Nav.Link href="#link">Link</Nav.Link>
                                <NavDropdown>
                                    <Dropdown.Toggle variant="success">
                                        Open Menu
                                    </Dropdown.Toggle>
                                    <Dropdown.Menu>
                                        <Dropdown.Item href="#">
                                            Home Page
                                        </Dropdown.Item>
                                        <Dropdown.Item href="#">
                                            Settings
                                        </Dropdown.Item>
                                        <Dropdown.Item href="#">
                                            Logout
                                        </Dropdown.Item>
                                    </Dropdown.Menu>
                                </NavDropdown>
                        </Nav>
                    </Navbar.Collapse>
                </Container>




            </Navbar>


        )
    }
}

export default NavbarLayout;
