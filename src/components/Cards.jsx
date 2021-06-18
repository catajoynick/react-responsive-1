import React from 'react';
import './Cards.css';
import CardItem from './CardItem';

const visitKandiwata = () =>{
    window.open("https://www.syramay.com/kandiwata-rock-formation-daram-samar-itinerary/", "_blank")
}

const visitSohoton = () =>{
    window.open("https://www.tripadvisor.com.ph/Attraction_Review-g298467-d1554742-Reviews-Sohoton_Cave-Samar_Island_Visayas.html", "_blank")
}

const visitTarangban = () =>{
    window.open("https://www.tripadvisor.com.ph/Attraction_Review-g2046206-d2149268-Reviews-Tarangban_Falls-Calbayog_City_Samar_Island_Visayas.html", "_blank")
}

const visitBiri = () =>{
    window.open("https://www.tripadvisor.com.ph/Attraction_Review-g298467-d1436586-Reviews-Biri_Island-Samar_Island_Visayas.html", "_blank")
}

const visitPinkBeach = () =>{

    window.open("https://goldenislandsenorita.net/2020/06/24/travel-guide-pink-beach-of-sila-island-in-san-vicente-northern-samar/", "_blank")
}

function Cards() {
  return (
    <div className='cards'>
      <h1>Explore Samar</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src='images/destinations/biri-island.jpg'
              text='Biri Island'
              label='Adventure'
              path='/destinations'
              outSideLink={visitBiri}
            />
            <CardItem
              src='images/destinations/kandiwata.jpg'
              text='Kandiwata'
              label='Luxury'
              path='/destinations'
              outSideLink={visitKandiwata}
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src='images/destinations/pink-beach.png'
              text='Pink beach'
              label='Mystery'
              path='/destinations'
              outSideLink={visitPinkBeach}
            />
            <CardItem
              src='images/destinations/tarangban-falls.jpg'
              text='Tarangban Falls'
              label='Adventure'
              path='/destinations'
              outSideLink={visitTarangban}
            />
            <CardItem
              src='images/destinations/sohoton-cave.jpg'
              text='Sohoton Cave'
              label='Adrenaline'
              path='/destinations'
              outSideLink={visitSohoton}
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
