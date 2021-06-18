import React from 'react'
const DestinationCard = ({destinationCategory, destinationImage, destinationLocation}) => {
    return (
        <>
                <div className="destination__card">
                <figure className="destination__card__image-wrapper" data-category={destinationCategory}>
                    <img
                        src={destinationImage}
                        alt={destinationLocation}
                        className="destination__card__image"
                    />
                </figure>
                <div className="destination__card__info">
                    <h4 className="destination__card__text">{destinationLocation}</h4>
                </div>
            </div>
        </>
    )
}

export default DestinationCard
