// import React from "react";
// import "../styles/HeroSection.css";

// export default function HeroSection() {
//   return (
//     <div className="recommendation-container">
//       <div className="recommendation-image">
//         <img src="/placeholder.png" alt="Scenic Norway" />
//       </div>
//       <div className="recommendation-content">
//         <h2>Norway Guide</h2>
//         <div className="author-info">
//           <img src="/avatar.png" alt="Author" className="author-avatar" />
//           <div>
//             <p className="author-name">Guide by Ása Steinars</p>
//             <p className="location">
//               Norway <span className="badge">★ New</span>
//             </p>
//           </div>
//         </div>
//         <p className="description">
//           Norway is my second home. I was born in Norway and I lived there until
//           I was 7 years old. I often come back and I love this country almost as
//           much as Iceland. Last summer I spent 3 months on the road with my van
//           exploring everything from the south tip up to Lofoten. This guide is
//           my best tips for Norway to make sure you get the most out of your
//           trip. It's focused around the fjords in the west and Lofoten in the
//           north. In my opinion, it's the best areas to explore in Norway.
//         </p>
//         <div className="buttons">
//           <button className="preview-btn">Preview</button>
//           <button className="access-btn">Get Access</button>
//         </div>
//         <p className="meta">Used for 100+ trips</p>
//       </div>
//     </div>
//   );
// }


import React from "react";// { useState }
import "../styles/HeroSection.css";

// Image Component
const HeroImage = ({ src, alt }) => {
  return (
    <div className="hero-image-container">
      <img src={src} alt={alt} className="hero-image" />
    </div>
  );
};

// Content Component
const HeroContent = () => {
  const expandedText =
    "Norway is my second home. I was born in Norway and I lived there until I was 7 years old. I often come back and I love this country almost as much as Iceland. Last summer I spent 3 months on the road with my van exploring everything from the south tip up to Lofoten.\n\nThis guide is my best tips for Norway to make sure you get the most out of your trip. It's focused around the fjords in the west and Lofoten in the north. In my opinion, it's the best areas to explore in Norway. From stunning waterfalls to dramatic mountain peaks, this comprehensive guide covers all the hidden gems and must-visit locations that will make your Norwegian adventure unforgettable.";

  return (
    <div className="hero-content">
      <h1 className="hero-title">Norway Guide</h1>

      <div className="hero-meta">
        <div className="author-info">
          <div className="author-avatar">
            <img src="/avatar.png" alt="Ása Steinars" />
          </div>
          <span className="author-text">Guide by Ása Steinars</span>
        </div>
        <div className="location-badge">Norway</div>
        <div className="new-badge">
          <span className="star">★</span>
          <span>New</span>
        </div>
      </div>

      <div className="hero-description">
        <p className="description-text">{expandedText}</p>
      </div>

      {/* <div className="hero-description-secondary">
        <p>
          This guide is my best tips for Norway to make sure you get the most
          out of your trip. It's focused around the fjords in the west and
          Lofoten in the north. In my opinion, it's the best areas to explore in
          Norway.
        </p>
      </div> */}

      <div className="hero-actions">
        <button className="preview-btn">Preview</button>
        <button className="access-btn">Get Access</button>
      </div>

      <div className="usage-stats">
        <span className="usage-text">
          Used for <strong>100+</strong> trips
        </span>
      </div>
    </div>
  );
};

// Main Hero Component
const Hero = () => {
  return (
    <div className="hero-container">
      <div className="hero-wrapper">
        <HeroImage
          src="./placeholder.png"
          alt="Norway landscape with hammock"
        />
        <HeroContent />
      </div>
    </div>
  );
};

export default Hero;