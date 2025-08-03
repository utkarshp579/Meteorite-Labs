import React from "react";
import "../styles/RecommendationSection.css";

export default function RecommendationSection() {
  return (
    <div className="recommendation-container">
      <div className="recommendation-image">
        <img src="/placeholder.png" alt="Scenic Norway" />
      </div>
      <div className="recommendation-content">
        <h2>Norway Guide</h2>
        <div className="author-info">
          <img src="/avatar.png" alt="Author" className="author-avatar" />
          <div>
            <p className="author-name">Guide by Ása Steinars</p>
            <p className="location">
              Norway <span className="badge">★ New</span>
            </p>
          </div>
        </div>
        <p className="description">
          Norway is my second home. I was born in Norway and I lived there until
          I was 7 years old. I often come back and I love this country almost as
          much as Iceland. Last summer I spent 3 months on the road with my van
          exploring everything from the south tip up to Lofoten. This guide is
          my best tips for Norway to make sure you get the most out of your
          trip. It's focused around the fjords in the west and Lofoten in the
          north. In my opinion, it's the best areas to explore in Norway.
        </p>
        <div className="buttons">
          <button className="preview-btn">Preview</button>
          <button className="access-btn">Get Access</button>
        </div>
        <p className="meta">Used for 100+ trips</p>
      </div>
    </div>
  );
}
