import React from 'react'
import '../index.css'
import Button from 'react-bootstrap/Button'

const HeroComponent = () => {
    return (
        <>
            <div className='Jumbotron-container'>
                <div className='Jumbotron-text'>
                    <h1>
                        NASHVILLE INTERIOR DESIGN
                    </h1>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam consequatur quia ipsam sint voluptatibus <br></br> assumenda tenetur laborum praesentium! Tenetur, repellendus.
                    </p>
                    <Button variant="link" className="button">Learn More</Button>

                </div>
                <div className='Jumbotron-image'></div>

            </div>
        </>
    )
}

export default HeroComponent
