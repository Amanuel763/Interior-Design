import express from 'express'
const router = express.Router()
import {addOrderItems} from '../Controllers/orderController.js'
import { protect } from '../middleware/authMiddleware.js'

//@desc fetch all products
//@route GET /api/products
//@accesss public

router.route('/').post(protect, addOrderItems)


export default router