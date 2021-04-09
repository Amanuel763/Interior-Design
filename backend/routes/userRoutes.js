import express from 'express'
const router = express.Router()
import {authUser, getUserProfile, registerUser, updateUserProfile} from '../Controllers/userControllers.js'
import { protect } from '../middleware/authMiddleware.js'

//@desc fetch all products
//@route GET /api/products
//@accesss public

router.route('/').post(registerUser)
router.post('/login', authUser)
router.route('/profile').get(protect, getUserProfile).put(protect, updateUserProfile)


export default router