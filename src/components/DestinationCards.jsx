import React from 'react'
import '../App.css'
import './DestinationCard.css'
import DestinationCard from './DestinationsCard'
import destinations from '../destinations'
const DestinationCards = () => {
    return (
        <>
            <div className="destination__card__container">
                {
        
                    destinations.map((destination, key) =>
                        <DestinationCard
                            key={key}
                            destinationCategory="Adventure"
                            destinationImage={destination.image}
                            destinationLocation={destination.location}
                        />
                    )
                }
            </div>
        </>
    )
}

export default DestinationCards
