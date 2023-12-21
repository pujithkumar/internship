import React, { useState } from "react";
import NavBar from "../NavBar";
import "./index.css";

const destinations = [
  {
    name: "Paris",
    rating: 4.5,
    reviews: 1200,
    description:
      "Paris, the capital of France, is renowned for its art, fashion, gastronomy, and culture. The city's iconic landmarks include the Eiffel Tower, Louvre Museum, and Notre-Dame Cathedral.",
    image:
      "https://www.wallpaperflare.com/static/1000/659/705/eiffel-tower-paris-daytime-august-blue-wallpaper.jpg",
  },
  {
    name: "Tokyo",
    rating: 4.8,
    reviews: 1500,
    description:
      "Tokyo, Japan's bustling capital, mixes the ultramodern and the traditional, from neon-lit skyscrapers to historic temples. Enjoy vibrant street scenes, delicious cuisine, and cutting-edge technology.",
    image: "https://www.buro247.my/images/places-to-visit-for-solo-female-travellers-japan.jpg",
  },
  {
    name: "New York City",
    rating: 4.3,
    reviews: 1800,
    description:
      "New York City is a global metropolis known for its iconic landmarks like Times Square, Statue of Liberty, and Central Park. It's a hub for art, culture, finance, and fashion.",
    image: "https://th.bing.com/th/id/OIP.1OMN9dESYKnArbmEsfbddAHaEo?rs=1&pid=ImgDetMain",
  },
  {
    name: "Rome",
    rating: 4.7,
    reviews: 1300,
    description:
      "Rome, Italy's capital, is a city of history, art, and architecture. Explore ancient ruins like the Colosseum, Vatican City, and indulge in mouthwatering Italian cuisine.",
    image: "https://th.bing.com/th/id/OIP.1OMN9dESYKnArbmEsfbddAHaEo?rs=1&pid=ImgDetMain",
  },
  {
    name: "Sydney",
    rating: 4.6,
    reviews: 1100,
    description:
      "Sydney, Australia's largest city, is famous for its Opera House, Harbour Bridge, and stunning beaches. Enjoy a vibrant city life coupled with natural beauty.",
    image: "https://i1.wp.com/beautifulplacestovisit.com/wp-content/uploads/2011/07/Opera_House_with_Sydney.jpg",
  },
  {
    name: "Barcelona",
    rating: 4.4,
    reviews: 1400,
    description:
      "Barcelona, the cosmopolitan capital of Spain's Catalonia region, is famous for its architecture, art, and vibrant street life. Visit Gaudi's masterpieces and enjoy the Mediterranean lifestyle.",
    image: "https://media.cntraveler.com/photos/5a985924d41cc84048ce6db0/master/w_1200,c_limit/Catedral-de-Barcelona-GettyImages-511874340.jpg?mbid=social_retweet",
  },
  {
    name: "London",
    rating: 4.9,
    reviews: 1700,
    description:
      "London, the capital of England, is a city with rich history, diverse culture, and iconic landmarks such as the Big Ben, Buckingham Palace, and the British Museum.",
    image: "https://media.cntraveler.com/photos/5a985924d41cc84048ce6db0/master/w_1200,c_limit/Catedral-de-Barcelona-GettyImages-511874340.jpg?mbid=social_retweet",
  },
  {
    name: "Dubai",
    rating: 4.2,
    reviews: 1600,
    description:
      "Dubai, a city in the United Arab Emirates, is known for its modern architecture, luxury shopping, vibrant nightlife, and extravagant attractions like the Burj Khalifa.",
    image: "https://bonjourdubai.fr/wp-content/uploads/2020/05/que-faire-a-dubai.jpg",
  },
];

const DestinationExplorer = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  const filteredDestinations = destinations.filter((destination) =>
    destination.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      <NavBar />
      <div className="res-con">
        <div className="input-con">
          <div>
            <img
              src="https://assets.ccbp.in/frontend/react-js/google-search-icon.png"
              alt="search icon"
              className="search-icon"
            />
            <input
              type="text"
              placeholder="Search by city"
              className="input-box"
              value={searchTerm}
              onChange={handleSearch}
            />
          </div>
        </div>
        <ul className="destinations-list-con">
          <div>
            {filteredDestinations.map((destination) => (
              <li key={destination.name} className="destination-item">
                <img
                  src={destination.image}
                  alt={destination.name}
                  className="image"
                />
                <div>
                  <h3>{destination.name}</h3>
                  <p>{destination.description}</p>
                  <div className="reviews-con">
                    <div>
                      <img
                        src="https://th.bing.com/th/id/OIP.zg_3qiXGRVMw-JTtlpUMjAAAAA?rs=1&pid=ImgDetMain"
                        alt="User"
                        className="user-icon"
                      />
                      <p>{destination.reviews}</p>
                    </div>
                    <div>
                      <img
                        src="https://th.bing.com/th/id/OIP.HMeCnezQ8I0VKTHIYJ5JlAHaHa?rs=1&pid=ImgDetMain"
                        alt="rating"
                        className="user-icon"
                      />
                      <p>{destination.rating}</p>
                    </div>
                  </div>
                </div>
              </li>
            ))}
          </div>
        </ul>
      </div>
    </div>
  );
};

export default DestinationExplorer;
