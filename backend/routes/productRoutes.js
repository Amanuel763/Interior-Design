import express from 'express'
const router = express.Router()
import {getProducts, getProductById} from '../Controllers/productControllers.js'


//@desc fetch all products
//@route GET /api/products
//@accesss public


router.route('/').get(getProducts)


router.route('/:id').get(getProductById)

export default router