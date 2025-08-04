import React from "react";
import "./App.css";

import Navbar from "./components/Navbar";
import RecommendationSection from "./components/RecommendationSection";
import InteractiveMap from "./components/InteractiveMap";
import GuideSection from "./components/GuideSection";
import Footer from "./components/Footer/Footer";
import TopRecommendations from "./components/TopRecommendations";

function App() {
  return (
    <div className="app">
      <Navbar />
      <div className="main-container">
        <RecommendationSection />
        <TopRecommendations />
        <InteractiveMap />
        <GuideSection />
      </div>
      <Footer />
    </div>
  );
}

export default App;
