import React from "react";
import "../styles/GuideSection.css";

const GuideSection = () => {
  return (
    <div className="guide-section">
      <div className="guide-left">
        <img
          src="avatar.png"
          alt="Profile"
          className="guide-avatar"
        />
        <h3 className="guide-name">Utkarsh Kumar</h3>
        <p className="guide-profession">MERN Stack Developer</p>
        <div className="guide-tags">
          <span>#React</span>
          <span>#Backend</span>
          <span>#DSA</span>
        </div>
        <button className="guide-store-btn">View Storefront</button>
      </div>

      <div className="guide-right">
        <p className="guide-description">
          Hey there! I'm Utkarsh, your guide for cracking tech interviews and
          building real-world MERN projects. I can help you with full-stack
          development, open-source, and DSA strategy.
        </p>
        <div className="guide-buttons">
          <button className="message-btn">Message</button>
          <button className="store-btn">Go to Storefront</button>
        </div>
      </div>
    </div>
  );
};

export default GuideSection;
