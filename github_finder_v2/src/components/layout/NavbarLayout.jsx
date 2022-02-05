import React, {useContext, useState} from 'react';
import { Navbar, Nav, NavDropdown, Form, FormControl, Button } from 'react-bootstrap'
import { Link } from "react-router-dom";
import GithubContext from "../../context/githubContext";


export default function NavbarLayout({ title='default'}) {

    const context = useContext(GithubContext)
    let {searchUser, users, clearSearch} = context

    const [search, setSearch] = useState('')

    const onchange = (e) => {
        setSearch(e.target.value)
    }

    const onSubmit = (e) => {
        e.preventDefault()
        searchUser(search)
        setSearch('')
    }

    return (
        <Navbar sticky="top" bg="light" expand="lg">
            <Navbar.Brand as={Link} to={'/'} style={{marginLeft: '20px'}}>{title}</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto">

                    <Nav.Link as={Link} to={'/'} >Home</Nav.Link>
                    <Nav.Link as={Link} to={'/about'}>About</Nav.Link>

                    {/*                     
                    <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                        <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                        <NavDropdown.Divider/>
                        <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                    </NavDropdown>
                     */}

                </Nav>

                <Form className="d-flex" onSubmit={onSubmit}>
                    <FormControl
                        type="search"
                        value={search}
                        placeholder="Search"
                        className="me-2"
                        onChange={onchange}
                        aria-label="Search"
                    />

                    {
                        !!users.length &&
                        <Button variant="outline-warning"
                            onClick={clearSearch}
                            style={{ margin: '0 5px 0 5px' }}>clear</Button>
                    }

                    <Button variant="outline-success"
                        type={"submit"}
                        style={{ margin: '0 50px 0 0' }}>Search</Button>

                </Form>
            </Navbar.Collapse>
        </Navbar>
    )
}
