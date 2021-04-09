import asyncHandler from 'express-async-handler'
import Product from '../Models/orderModel.js'


//@desc create new order
//@route Post / api / orders
//@accesss private


const addOrderItems = asyncHandler(async (req, res) => {
    const { orderItems, shippingAddress, paymentMethod, itemsPrice, taxPrice, shippingPrice, totalPrice } = req.body 

    if(orderItems && orderItems.length === 0) {
        res.status(400)
        throw new Error('No orders')
        return
    } else{
        const order = new Order({
            orderItems, user: req.user._id, shippingAddress, paymentMethod, itemsPrice, taxPrice, shippingPrice, totalPrice
        })

        const createdOrder = await order.save()

        res.status(201).json(createOrder)
    }
})

export { addOrderItems}
