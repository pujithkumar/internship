import React, { useState } from "react";
import NavBar from "../NavBar";
import "./index.css";

const ItineraryPlanner = () => {
  const [itineraries, setItineraries] = useState([]);
  const [newItinerary, setNewItinerary] = useState({
    name: "",
    startDate: "",
    destinations: [],
  });
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  const handleInputChange = (e) => {
    setNewItinerary({
      ...newItinerary,
      [e.target.name]: e.target.value,
    });
  };

  const handleSearch = () => {
    // Simulated search results based on the dummy data
    const dummySearchResults = [
      "Central Park, NYC",
      "Empire State Building, NYC",
      "Statue of Liberty, NYC",
      // Add more dummy data or integrate with an API for real data
    ];

    setSearchResults(
      dummySearchResults.filter((place) =>
        place.toLowerCase().includes(searchTerm.toLowerCase())
      )
    );
  };

  const handleAddDestination = (destination) => {
    setNewItinerary({
      ...newItinerary,
      destinations: [...newItinerary.destinations, destination],
    });
    setSearchTerm("");
    setSearchResults([]);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setItineraries([...itineraries, newItinerary]);
    setNewItinerary({
      name: "",
      startDate: "",
      destinations: [],
    });
  };

  return (
    <div>
      <NavBar />
      <div className="res-con">
        <h1>Itinerary Planner</h1>
        <form className="itinerary-form" onSubmit={handleSubmit}>
          <div className="name-container">
            <img
              src="https://static.vecteezy.com/system/resources/previews/000/552/683/non_2x/geo-location-pin-vector-icon.jpg"
              alt="location-con"
              className="location-icon"
            />
            <input
              type="text"
              name="name"
              className="name-con"
              value={newItinerary.name}
              onChange={handleInputChange}
            />
          </div>
          <div className="date-con">
            <label>
              Start Date:
              <input
                type="date"
                name="startDate"
                value={newItinerary.startDate}
                onChange={handleInputChange}
              />
            </label>
          </div>
          <div className="search-destinations-con">
            <input
              type="text"
              placeholder="Search destinations"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <button onClick={handleSearch}>Search</button>
            <ul>
              {searchResults.map((result, index) => (
                <li key={index}>
                  {result}
                  <button onClick={() => handleAddDestination(result)}>
                    Add
                  </button>
                </li>
              ))}
            </ul>
          </div>
          <button className="create-btn" type="submit">
            Create Itinerary
          </button>
        </form>
        <div>
          <h2>Saved Itineraries</h2>
          <ul className="saved-con">
            {itineraries.map((itinerary, index) => (
              <li key={index} className="item-con">
                <h3>{itinerary.name}</h3>
                <p>Start Date: {itinerary.startDate}</p>
                <p>Destinations:</p>
                <ul>
                  {itinerary.destinations.map((destination, idx) => (
                    <li key={idx}>{destination}</li>
                  ))}
                </ul>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ItineraryPlanner;
