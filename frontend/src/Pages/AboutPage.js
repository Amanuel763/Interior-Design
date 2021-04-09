import React from 'react'
import { Col, Container, Image, Row } from 'react-bootstrap'

const AboutPage = () => {
    return (
        <>
            <Container className='about-container'>

                <Row>
                    <Col md={12}>
                        <div className='about-header'>
                            <h1>About us</h1>
                            <hr className='about-hr' />
                        </div>
                    </Col>
                </Row>

                <Row>
                    <Col md={12}>
                        <div className='about-description'>
                            <h5>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</h5>
                        </div>
                    </Col>
                </Row>
                <Row>
                    <Col sm={12}  md={8}>
                        <div className='about-text'>
                            <h1>Leslie Brown</h1>
                            <h3>Owner of nashville interior designs</h3>
                        </div>
                    </Col>
                    <Col sm={12} md={4}>
                        <Image className='image-owner' />
                    </Col>
                </Row>


                <Row>
                    <Col sm={12} md={4}>
                        <Image className='image-owner-vice' />
                    </Col>
                    <Col sm={12} md={8}>
                        <div className='about-text-vice'>
                            <h1>Liya York</h1>
                            <h3>Vice President of Nashville Interior Designs</h3>
                        </div>
                    </Col>
                </Row>


            </Container>
        </>
    )
}

export default AboutPage
