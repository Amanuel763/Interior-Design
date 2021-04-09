import React from 'react'
import FeaturedProduct from '../../Components/FeaturedProduct'
import HeroComponent from '../../Components/HeroComponent'
import ParallaxComponent from '../../Components/ParallaxComponent'
import ReviewComponent from '../../Components/ReviewComponent'
import NewProducts from '../../Pages/NewProductsPage'
import Productpage from '../../Pages/Productpage'

const HomeScreen = () => {
    return (
        <>  
            <HeroComponent />
            <Productpage />
            <ParallaxComponent />
            <NewProducts />
            <FeaturedProduct />
            <ReviewComponent />
        </>
    )
}

export default HomeScreen
