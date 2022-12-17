import React from 'react';
import './Cards.css';
import CardItem from './CardItem';

function Cards() {
  return (
    <div className='cards'>
      <h1>Leftovers Near You:</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem src='public\images\apples.jpg' text='Nice and crispy apples' path='/products'
            />
            <CardItem src='public\images\Eggs.png' text='Fresh leftover eggs' path='/products'
            />
          </ul>
          <ul className='cards__items'>
            {/* <CardItem
              src='image here'
              text='description here'
              path='/products'
            />
            <CardItem
              src='image here'
              text='description here'
              path='/products'
            />
            <CardItem
              src='image here'
              text='description here'
              path='/products'
            /> */}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
