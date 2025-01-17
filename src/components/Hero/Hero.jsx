import React from 'react'
import './Hero.css'
import dark_arrow from '../../assets/dark-arrow.png'
const Hero = () => {
    return (
        <div className='hero container'>
            <div className='hero-text'>
                <h1>Shaping Minds for a Brighter Future</h1>
                <p>Our cutting-edge curriculum is designed to empower students with the knowledge,
                    skills, and experiences needed to excel in the dyamic firld of education</p>
                <button className='btn'>Exploer More <img src={dark_arrow} alt="darkArrow" /></button>
            </div>
        </div>
    )
}

export default Hero
