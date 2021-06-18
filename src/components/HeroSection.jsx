import React from 'react'
import {Button} from './Button'
import '../App.css'
import './HeroSection.css'

const HeroSection = () => {

    const openLink = () =>{
        window.open("https://www.youtube.com/watch?v=f22Wlgy_vLU", '_blank')
    }
    return (
        <div className="hero-container">
            <h1>Explore Samar island</h1>
            <p>Are you an adventurous person?</p>
            <div className="hero-btns">
                <Button 
                    className="btns"
                    buttonStyle="btn--outline"
                    buttonSize="btn--large"
                >
                    Tour
                </Button>
                <Button 
                    className="btns"
                    buttonStyle="btn--outline"
                    buttonSize="btn--large"
                    onClick={openLink}
                >
                    Watch<i className="far fa-play-circle"/>
                </Button>
            </div>
        </div>
    )
}

export default HeroSection
