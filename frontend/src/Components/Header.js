import React from 'react'
import { Nav, Navbar } from 'react-bootstrap'
import { BsFillPersonFill } from 'react-icons/bs'
import { BiCartAlt } from 'react-icons/bi'

const Header = () => {
    return (
        <>
            <Navbar bg="light" expand="lg" collapseOnSelect>
                <Navbar.Brand href="/">NASHVILLE INTERIOR DESIGN</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">
                        <Nav.Link href="/">Home</Nav.Link>
                        <Nav.Link href="/shop">SHOP</Nav.Link>
                        <Nav.Link href="/contact">CONTACT</Nav.Link>
                        <Nav.Link href="/about">ABOUT</Nav.Link>
                    </Nav>
                    <Nav className="ml-auto">
                        <Nav.Link href="/cart"><BiCartAlt /></Nav.Link>
                        <Nav.Link href="/signin"><BsFillPersonFill /></Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </>
    )
}

export default Header
