import React from 'react'
import { Link } from 'react-router-dom'
import products from '../products'

const ProductDetails = ({match}) => {
    const product = products.find((p) => p._id === match.params.id)

    return (
        <>
            <Link className="btn btn-dark my-3" to='/shop'>
                GO BACK
            </Link>
        </>
    )
}

export default ProductDetails
