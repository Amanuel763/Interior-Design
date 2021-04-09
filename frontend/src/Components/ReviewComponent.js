import React from 'react'
import { Card, Col, Container, Row } from 'react-bootstrap'
import { AiTwotoneStar } from 'react-icons/ai'

const ReviewComponent = () => {
    return (
        <>
            <Container>
                <Row>
                    <Col md={4}>
                    <Card style={{ width: '18rem' }} className='card-review'>
                            <Card.Body>
                                <div className='review-image'>

                                </div>
                                <Card.Text className='name'>Michael Lewis</Card.Text>
                                <AiTwotoneStar className='star' /><AiTwotoneStar className='star' /><AiTwotoneStar className='star' /><AiTwotoneStar className='star' /><AiTwotoneStar className='star' />

                                <Card.Text>
                                    Some quick example text to build on the card title and make up the bulk of
                                    the card's content.                                
                                </Card.Text>
                            </Card.Body>
                        </Card> 
                    </Col>

                    <Col md={4}>
                    <Card style={{ width: '18rem' }} className='card-review'>
                            <Card.Body>
                                <div className='review-image'>

                                </div>
                                <Card.Text className='name'>Michael Lewis</Card.Text>
                                <AiTwotoneStar className='star' /><AiTwotoneStar className='star' /><AiTwotoneStar className='star' /><AiTwotoneStar className='star' /><AiTwotoneStar className='star' />

                                <Card.Text>
                                    Some quick example text to build on the card title and make up the bulk of
                                    the card's content.                                
                                </Card.Text>
                            </Card.Body>
                        </Card> 
                    </Col>

                    <Col md={4}>
                        <Card style={{ width: '18rem' }} className='card-review'>
                            <Card.Body>
                                <div className='review-image'>

                                </div>
                                <Card.Text className='name'>Michael Lewis</Card.Text>
                                <AiTwotoneStar className='star' /><AiTwotoneStar className='star' /><AiTwotoneStar className='star' /><AiTwotoneStar className='star' /><AiTwotoneStar className='star' />

                                <Card.Text>
                                    Some quick example text to build on the card title and make up the bulk of
                                    the card's content.                                
                                </Card.Text>
                            </Card.Body>
                        </Card> 
                    </Col>
                </Row>
            </Container>
        </>
    )
}

export default ReviewComponent
