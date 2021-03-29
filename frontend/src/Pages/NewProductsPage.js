import React from 'react'
import { Col, Row } from 'react-bootstrap'
import NewProductsSection from '../Components/NewProductsSection'
import newproducts from '../newproducts'

const NewProducts = () => {
    return (
        <>  
            <h1 className="Essentialproduct">New Products</h1>
            <hr className="footer-hr"/>
            <Row>
                {newproducts.map((newproducts) => (
                    <Col key={newproducts._id} sm={12} md={6} lg={4} xl={3} >
                        <NewProductsSection newproducts={newproducts} />
                    </Col>
                ))}
            </Row>
        </>
    )
}

export default NewProducts
