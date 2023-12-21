import React, { useState } from 'react';
import NavBar from '../NavBar';
import './index.css'

const ExistingItineraries = () => {
  const [itineraries] = useState([
    {
      name: 'New York Adventure',
      reviews: [
        {
          destination: 'Central Park, NYC',
          review: 'A beautiful park with amazing landscapes.',
          rating: 5,
          userName: 'Jane Doe'
        },
        {
          destination: 'Empire State Building, NYC',
          review: 'Breathtaking views from the top!',
          rating: 4,
          userName: 'John Smith'
        }
      ]
    },
    {
      name: 'Paris Exploration',
      reviews: [
        {
          destination: 'Eiffel Tower, Paris',
          review: 'Absolutely magnificent!',
          rating: 5,
          userName: 'Sophie Williams'
        },
        {
          destination: 'Louvre Museum, Paris',
          review: 'Incredible art collection!',
          rating: 4.5,
          userName: 'Michael Brown'
        }
      ]
    },
    {
      name: 'London Tour',
      reviews: [
        {
          destination: 'The British Museum, London',
          review: 'Fascinating historical artifacts!',
          rating: 4,
          userName: 'Olivia Davis'
        },
        {
          destination: 'Buckingham Palace, London',
          review: 'A royal experience!',
          rating: 4.5,
          userName: 'William Johnson'
        }
      ]
    },
  ]);
  return (
    <div>
      <NavBar />
      <div className='res-con'>
      <h1>Existing Itineraries</h1>
      <ul>
        {itineraries.map((itinerary, index) => (
          <li key={index} className='existing-con'>
            <h3>{itinerary.name}</h3>
            <ul>
              {itinerary.reviews.map((review, idx) => (
                <li key={idx} className='existing-item-con'>
                  <p>Destination: {review.destination}</p>
                  <p>Review: {review.review}</p>
                  <p>Rating: {review.rating}</p>
                  <p>User: {review.userName}</p>
                </li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
      </div>
    </div>
  );
};

export default ExistingItineraries;
