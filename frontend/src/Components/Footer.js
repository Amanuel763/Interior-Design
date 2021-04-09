import React from 'react'
import { Container, Row, Col, Nav} from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap'

const Footer = () => {
    return (
        
        <Container className="footer-container">
            <Row>

                <Col md={4}>
                    <Nav className="footer-navigation">
                        <h3>SOCIAL MEDIA</h3>
                        <hr className="footer-hr"/>
                        <LinkContainer to='/'>
                            <Nav.Link>
                                TWITTER
                            </Nav.Link>
                        </LinkContainer>
                        <LinkContainer to='/shop'>
                            <Nav.Link>
                                INSTAGRAM
                            </Nav.Link>
                        </LinkContainer>
                        <LinkContainer to='/contact'>
                            <Nav.Link>
                                FACEBOOK
                            </Nav.Link>
                        </LinkContainer>
                        <LinkContainer to='/about'>
                            <Nav.Link>
                                YOUTUBE
                            </Nav.Link>
                        </LinkContainer>
                    </Nav>
                </Col>

                <Col md={4}>
                    <Nav className="footer-navigation">
                        <h3>Information</h3>
                        <hr className="footer-hr"/>
                        <LinkContainer to='/'>
                            <Nav.Link>
                                Join our Team
                            </Nav.Link>
                        </LinkContainer>
                        <LinkContainer to='/shop'>
                            <Nav.Link>
                                Our Story
                            </Nav.Link>
                        </LinkContainer>
                        <LinkContainer to='/contact'>
                            <Nav.Link>
                                Sponsor
                            </Nav.Link>
                        </LinkContainer>
                        <LinkContainer to='/about'>
                            <Nav.Link>
                                Location
                            </Nav.Link>
                        </LinkContainer>
                    </Nav>
                </Col>

                <Col md={4}>
                    <Nav className="footer-navigation">
                        <LinkContainer to='/'>
                            <Nav.Link className="footer-logo">
                                NASHVILLE INTERIOR DESIGN
                            </Nav.Link>
                        </LinkContainer>
                    </Nav>
                </Col>
            </Row>
        
            <Row>
                <Col className='text-center py-3'>
                    Copyright &copy;
                </Col>
            </Row>
        </Container>

    )
}

export default Footer
