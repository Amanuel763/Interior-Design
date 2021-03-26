import React from 'react'
import FeaturedProduct from '../../Components/FeaturedProduct'
import HeroComponent from '../../Components/HeroComponent'
import ParallaxComponent from '../../Components/ParallaxComponent'
import Productpage from '../../Pages/Productpage'

const HomeScreen = () => {
    return (
        <>  
            <HeroComponent />
            <Productpage />
            <ParallaxComponent />
            <Productpage />
            <FeaturedProduct />
        </>
    )
}

export default HomeScreen
