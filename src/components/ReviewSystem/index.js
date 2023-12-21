import React, { useState } from 'react';
import NavBar from '../NavBar';
import './index.css'

const ReviewSystem = () => {
  const [name,setName] = useState('');
  const [rating,setRating] = useState('');
  const [destination,setDestination] = useState('')
  const [review,setReview] = useState('')
  const [reviews, setReviews] = useState([
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
    },
    {
      destination: 'Statue of Liberty, NYC',
      review: 'An iconic symbol of freedom!',
      rating: 4.5,
      userName: 'Emily Johnson'
    },
    {
      destination: 'Grand Canyon, Arizona',
      review: 'Stunning views, a must-visit for nature lovers!',
      rating: 5,
      userName: 'Michael Brown'
    },
    {
      destination: 'Eiffel Tower, Paris',
      review: 'Absolutely magnificent!',
      rating: 5,
      userName: 'Sophie Williams'
    },
  ]);
  const onAddReview = (e) => {
    e.preventDefault()
    setReviews([...reviews,{destination,rating,review,rating}])
  }

  return (
    <div>
      <NavBar />
      <div className='res-con'>
      <h1>Destination Reviews</h1>
      <form onSubmit={onAddReview} className='review-form-con'>
        <label>Name: </label>
        <input type='text' placeholder='Enter your Name' onChange={(e) => setName(e.target.value)}/>
        <label>Enter your Review: </label>
        <textarea rows={5} cols={90} onChange={(e) => setReview(e.target.value)} />
        <label>Rating: </label>
        <input type='text' placeholder='Enter your rating' onChange={(e) => setRating(e.target.value)}/>
        <label>Destination: </label>
        <input type='text' placeholder='Enter your destination' onChange={(e) => setDestination(e.target.value)}/>
        <button type='submit'>Submit</button>
      </form>
      <ul className='review-con'>
        {reviews.map((review, index) => (
          <li key={index} className='review-card'>
            <div className='review-field'>
              <img src="https://static.vecteezy.com/system/resources/previews/000/552/683/non_2x/geo-location-pin-vector-icon.jpg" alt="user-icon" className='user-icon'/>
              <h3>{review.destination}</h3>
            </div>
            <div className='review-field'>
              <img src="https://th.bing.com/th/id/OIP.X6bn1nzMLo2wP8c31iJBlQAAAA?w=256&h=256&rs=1&pid=ImgDetMain" alt="user-icon" className='user-icon'/>
              <h3>{review.review}</h3>
            </div>
            <div className='review-field'>
              <img src="https://th.bing.com/th/id/OIP.HMeCnezQ8I0VKTHIYJ5JlAHaHa?rs=1&pid=ImgDetMain" alt="user-icon" className='user-icon'/>
              <h3>{review.rating}</h3>
            </div>
            <div className='review-field'>
            <img src="https://th.bing.com/th/id/OIP.zg_3qiXGRVMw-JTtlpUMjAAAAA?rs=1&pid=ImgDetMain" alt="user-icon" className='user-icon'/>
            <p>User: {review.userName}</p>
            </div>
          </li>
        ))}
      </ul>
      </div>
    </div>
  );
};

export default ReviewSystem;
