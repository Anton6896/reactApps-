import React, {Component} from 'react';
import {Navbar, Nav, NavDropdown, Form, FormControl, Button} from 'react-bootstrap'
import PropTypes from 'prop-types'

// class NavbarLayout = ({title, searchData, onSearch}) => {
class NavbarLayout extends Component {
    static defaultProps = { // auto load
        title: 'default title'
    }

    state = {
        search: ''
    }

    onchange = (e) => {
        this.setState({[e.target.name]: e.target.value})
    }

    onSubmit = (e) =>{
        e.preventDefault()
        this.props.searchUser(this.state.search) // form input name
        this.setState({search: ''})
    }

    render() {
        let {title} = this.props

        return (
            <Navbar sticky="top" bg="light" expand="lg">
                <Navbar.Brand style={{margin: '0 0 0 15px'}} href="#home">{title}</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav"/>
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="#home">Home</Nav.Link>
                        <Nav.Link href="#link">Link</Nav.Link>
                        <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                            <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                            <NavDropdown.Divider/>
                            <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                        </NavDropdown>
                    </Nav>

                    <Form className="d-flex" onSubmit={this.onSubmit}>
                        <FormControl
                            type="search"
                            name={"search"}
                            placeholder="Search"
                            className="me-2"
                            onChange={this.onchange}
                            aria-label="Search"
                        />

                        {
                            this.props.canClean &&
                            <Button variant="outline-warning"
                                    onClick={this.props.clearSearch}
                                    style={{margin: '0 5px 0 5px'}}>clear</Button>
                        }

                        <Button variant="outline-success"
                                type={"submit"}
                                style={{margin: '0 50px 0 0'}}>Search</Button>


                    </Form>
                </Navbar.Collapse>
            </Navbar>
        )
    }
}


export default NavbarLayout;
