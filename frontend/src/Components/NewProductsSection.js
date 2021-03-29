import React from 'react'
import { Card } from 'react-bootstrap'
import Rating from './Rating'

const NewProductsSection = ({newproducts}) => {
    return (
        <>
            <Card className='my-3 p-3 rounded'>
                    <Card.Img src={newproducts.image} variant='top' />                

                <Card.Body>
                        <Card.Title as='div'>
                            <strong>{newproducts.name}</strong>
                        </Card.Title>

                    <Card.Text as='div'>
                        <Rating value={newproducts.rating} text={`${newproducts.numReviews} reviews`} />
                    </Card.Text>

                    <Card.Text as='h3'>
                        ${newproducts.price}
                    </Card.Text>
                </Card.Body>
            </Card>
        </>
    )
}

export default NewProductsSection
