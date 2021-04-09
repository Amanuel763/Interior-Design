import React, {useState, useEffect} from 'react'
import { Button, Card, Col, Container, Form, Image, ListGroup, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import Rating from '../Components/Rating'
import Message from '../Components/Message'
import Loader from '../Components/Loader'
import { useDispatch, useSelector} from 'react-redux'
import {listProductsDetails} from '../actions/productActions'


const ProductDetails = ({history, match}) => {
    const [qty, setQty] = useState()

    const dispatch = useDispatch()

    const productDetails = useSelector(state => state.productDetails)
    const {loading, error, product} = productDetails


    useEffect(() => {
        dispatch(listProductsDetails(match.params.id))

    }, [dispatch, match])

    const addToCartHandler = () => {
        history.push(`/cart/${match.params.id}?qty=${qty}`)
    }


    return (
        <Container className='productdetails'>
            <Link className="btn btn-dark my-3" to='/shop'>
                GO BACK
            </Link>
            {loading ? <Loader /> : error ?  <Message variant='danger'>{error}</Message> : (
                <Row>
                <Col sm={12} md={6}>
                    <Image src={product.image} alt={product.name} fluid className="product-image" />
                </Col>
                <Col sm={12} md={3}>
                    <ListGroup variant="flush">
                        <ListGroup.Item>
                            <h3>{product.name}</h3>
                        </ListGroup.Item>
                        <ListGroup.Item>
                            <Rating value={product.rating} text={`${product.numReviews} reviews`}>
                            </Rating>
                        </ListGroup.Item>
                        <ListGroup.Item>
                            Price: ${product.price}
                        </ListGroup.Item>
                        <ListGroup.Item>
                            Description: {product.description}
                        </ListGroup.Item>
                    </ListGroup>
                </Col> 
                <Col md={3}>
                    <Card>
                        <ListGroup variant='flush'>
                            <ListGroup.Item>
                                <Row>
                                    <Col>
                                        Price: 
                                    </Col>
                                    <Col>
                                        <strong>${product.price}</strong>
                                    </Col>
                                </Row>
                            </ListGroup.Item>

                            <ListGroup.Item>
                                <Row>
                                    <Col>
                                        Stock: 
                                    </Col>
                                    <Col>
                                        {product.countInStock > 0 ? 'In Stock' : 'Out of Stock'}
                                    </Col>
                                </Row>
                            </ListGroup.Item>

                            {product.countInStock > 0 && (
                            <ListGroup.Item>
                                <Row>
                                    <Col>
                                        Qty
                                    </Col>
                                    <Col>
                                        <Form.Control as='select' value={qty} onChange={(e) => setQty(e.target.value)}>
                                            
                                            {[...Array(product.countInStock).keys()].map(x => (
                                                <option key={ x + 1} value={ x + 1}>{x + 1}</option>
                                            ))}
                                        </Form.Control>
                                    </Col>
                                </Row>
                            </ListGroup.Item>
                        )}

                            <ListGroup.Item>
                                <Button onClick={addToCartHandler} className='btn-block' type='button' disabled={product.countInStock === 0}>
                                    Add To Cart
                                </Button>
                            </ListGroup.Item>
                        </ListGroup>
                    </Card>
                </Col>
            </Row>
            )}
            
        </Container>
    )
}

export default ProductDetails
