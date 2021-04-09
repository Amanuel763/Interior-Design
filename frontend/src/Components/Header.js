import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Nav, Navbar, NavDropdown } from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap'
import { BsFillPersonFill } from 'react-icons/bs'
import { BiCartAlt } from 'react-icons/bi'
import { logout } from '../actions/userActions'

const Header = () => {

    const dispatch = useDispatch()

    const userLogin = useSelector(state => state.userLogin)
    const { userInfo } = userLogin

    const logoutHandler = () => {
        dispatch(logout())
    }

    return (
        <>
            <Navbar bg="light" expand="lg" collapseOnSelect>
                <LinkContainer to='/'>
                    <Navbar.Brand>NASHVILLE INTERIOR DESIGN</Navbar.Brand>
                </LinkContainer>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">
                        <LinkContainer to='/'>
                            <Nav.Link>Home</Nav.Link>
                        </LinkContainer>
                        <LinkContainer to="/shop">
                            <Nav.Link>SHOP</Nav.Link>                        
                        </LinkContainer>
                        <LinkContainer to="/contact">
                            <Nav.Link>CONTACT</Nav.Link>                      
                        </LinkContainer>
                        <LinkContainer to='about'>
                            <Nav.Link>ABOUT</Nav.Link>                        
                        </LinkContainer>
                    </Nav>
                    <Nav className="ml-auto signs">
                        <LinkContainer to='/cart'>
                            <Nav.Link><BiCartAlt /></Nav.Link>                    
                        </LinkContainer>
                        {userInfo ? (
                            <NavDropdown title={userInfo.name} id='username'>
                                <LinkContainer to='/profile'>
                                    <NavDropdown.Item>Profile</NavDropdown.Item>
                                </LinkContainer>
                                <NavDropdown.Item onClick={logoutHandler}>
                                    Logout
                                </NavDropdown.Item>
                            </NavDropdown>
                        ) : <LinkContainer to='/signin'>
                        <Nav.Link><BsFillPersonFill /></Nav.Link>
                    </LinkContainer> }

                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </>
    )
}

export default Header
