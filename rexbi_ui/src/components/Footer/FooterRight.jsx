import React, { useState } from "react";

const faqList = [
  "How do I access the Guide and Map?",
  "Do I need internet connection?",
  "How long will I have access?",
  "Can I share it with my travel buddy?",
];

const FooterRight = () => {
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <div className="footer-right">
      {faqList.map((q, idx) => (
        <div
          key={idx}
          className="faq-item"
          onClick={() => setOpenIndex(idx === openIndex ? null : idx)}
        >
          <div className="faq-question">
            {q}
            <span className="arrow">{openIndex === idx ? "▲" : "▼"}</span>
          </div>
          {openIndex === idx && (
            <div className="faq-answer">
              {/* Placeholder answer */}
              This is a sample answer for: "{q}"
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default FooterRight;
