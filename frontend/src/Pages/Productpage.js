import React from 'react'
import { Col, Row } from 'react-bootstrap'
import Product from '../Components/Product'
import products from '../products'

const Productpage = () => {
    return (
        <>  
            <h5 className="onsale">On Sale</h5>
            <h1 className="Essentialproduct">Essential Products</h1>
            <Row>
                {products.map((product) => (
                    <Col sm={12} md={6} lg={4} xl={3} >
                        <Product product={product} />
                    </Col>
                ))}
            </Row>
        </>
    )
}

export default Productpage
