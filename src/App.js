import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import DestinationExplorer from "./components/DestinationExplorer";
import ReviewSystem from "./components/ReviewSystem";
import ItineraryPlanner from "./components/ItineraryPlanner";
import ExistingItineraries from "./components/ExistingItineraries";

const App = () => (
  <BrowserRouter>
    <Routes>
      <Route exact path="/" element={<DestinationExplorer />} />
      <Route exact path="/reviews" element={<ReviewSystem />} />
      <Route exact path="/plan-my-trip" element={<ItineraryPlanner />} />
      <Route
        exact
        path="/existing-itineraries"
        element={<ExistingItineraries />}
      />
    </Routes>
  </BrowserRouter>
);

export default App;
