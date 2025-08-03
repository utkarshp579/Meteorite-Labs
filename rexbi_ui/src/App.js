import React from "react";
import "./App.css";

import Navbar from "./components/Navbar";
import RecommendationSection from "./components/RecommendationSection";
import InteractiveMap from "./components/InteractiveMap";
import GuideSection from "./components/GuideSection";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <div className="app">
      <Navbar />
      <RecommendationSection />
      <InteractiveMap />
      <GuideSection />
      <Footer />
    </div>
  );
}

export default App;
