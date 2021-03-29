import React, { useState, useEffect } from 'react'
import { Col, Row } from 'react-bootstrap'
import Product from '../Components/Product'
import axios from 'axios'

const Productpage = () => {
    const [products, setProducts] = useState([])

    useEffect(() => {
        const fetchProducts = async () => {
            const { data } = await axios.get('/api/products')

            setProducts(data)
        }

        fetchProducts()
    }, [])

    return (
        <>  
            <h5 className="onsale">On Sale</h5>
            <h1 className="Essentialproduct">Essential Products</h1>
            <hr className="footer-hr"/>
            <Row>
                {products.map((product) => (
                    <Col key={product._id} sm={12} md={6} lg={4} xl={3} >
                        <Product product={product} />
                    </Col>
                ))}
            </Row>
        </>
    )
}

export default Productpage
