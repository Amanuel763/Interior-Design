import React from 'react'
import { Card, Col, Container, Row } from 'react-bootstrap'
import { ImQuotesLeft } from 'react-icons/im'

const ReviewComponent = () => {
    return (
        <>
            <Container>
                <Row>
                    <Col md={4}>
                        <Card style={{ width: '18rem' }}>
                            <Card.Body>
                            <Card.Title><ImQuotesLeft /></Card.Title>
                                <Card.Text>
                                Some quick example text to build on the card title and make up the bulk of
                                the card's content.
                                </Card.Text>
                                <Card.Link href="#">Card Link</Card.Link>
                                <Card.Link href="#">Another Link</Card.Link>
                            </Card.Body>
                        </Card> 
                    </Col>

                    <Col md={4}>
                        <Card style={{ width: '18rem' }}>
                            <Card.Body>
                            <Card.Title><ImQuotesLeft /></Card.Title>
                                <Card.Text>
                                Some quick example text to build on the card title and make up the bulk of
                                the card's content.
                                </Card.Text>
                                <Card.Link href="#">Card Link</Card.Link>
                                <Card.Link href="#">Another Link</Card.Link>
                            </Card.Body>
                        </Card> 
                    </Col>

                    <Col md={4}>
                        <Card style={{ width: '18rem' }}>
                            <Card.Body>
                                <Card.Title><ImQuotesLeft /></Card.Title>
                                <Card.Text>
                                Some quick example text to build on the card title and make up the bulk of
                                the card's content.
                                </Card.Text>
                                <Card.Link href="#">Card Link</Card.Link>
                                <Card.Link href="#">Another Link</Card.Link>
                            </Card.Body>
                        </Card> 
                    </Col>
                </Row>
            </Container>
        </>
    )
}

export default ReviewComponent
