import React from "react";
import { Globe, Instagram, PlayCircle } from "lucide-react";
import "../styles/GuideSection.css";

const GuideSection = () => {
  return (
    <section className="guide-section">
      <div className="guide-card-container">
        {/* Profile Card */}
        <div className="guide-profile-card">
          <img src="./avatar.png" alt="Guide" className="profile-img" />
          <h2 className="guide-name">Ása Steinars</h2>
          <p className="guide-title">Travel Business</p>

          {/* Social Icons */}
          <div className="social-icons">
            <Instagram className="icon" />
            <PlayCircle className="icon" />
            <Globe className="icon" />
            <Instagram className="icon" />
          </div>

          {/* Tags */}
          <div className="guide-tags">
            <span className="tag">Iceland</span>
            <span className="tag">Norway</span>
          </div>

          {/* CTA */}
          <div className="cta-button">
            <button className="storefront-btn">Storefront</button>
          </div>
        </div>

        {/* Description Panel */}
        <div className="guide-details p-5 m-5">
          <h3 className="details-title">Guide by Ása Steinars</h3>
          <p className="joined-text">Joined in April 2022</p>
          <p className="guide-description">
            Ása Steinars is an adventure photographer and videographer from
            Iceland. Growing up in the north, surrounded by extreme landscapes
            and forever changing weather has given her a tight bond to nature
            and its forces. This you can clearly see in her photography. She
            works as a full time content creator, helping people to travel
            Iceland like she does. She has a total following of almost 2 million
            across her social media platforms.
          </p>

          <div className="guide-actions">
            <button className="outline-btn">Message</button>
            <button className="outline-btn">Storefront</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GuideSection;
