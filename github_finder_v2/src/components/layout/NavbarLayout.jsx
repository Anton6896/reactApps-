import React, { Component } from 'react';
import { Navbar, Nav, NavDropdown, Dropdown, Container, Form, FormControl, Button } from 'react-bootstrap'
import PropTypes from 'prop-types'

const NavbarLayout = ({title}) => {
    return (
        <Navbar bg="light" expand="lg">
            <Navbar.Brand style={{ margin: '0 0 0 15px' }} href="#home">{title}</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto">
                    <Nav.Link href="#home">Home</Nav.Link>
                    <Nav.Link href="#link">Link</Nav.Link>
                    <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                        <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                        <NavDropdown.Divider />
                        <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                    </NavDropdown>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    )
}

NavbarLayout.defaultProps = { // auto load 
    title: 'default title'
}

NavbarLayout.propTypes = {
    title: PropTypes.string.isRequired // check string 
}

export default NavbarLayout;
