"use client"

import React from "react";
import "../styles/styles.css"

const ScrollButton: React.FC = () => {
  const handleScrollToTop = () => {
    // Scroll to the top of the page
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div style={{ textAlign: "center" }} className="page-scroll">
      <button
        onClick={handleScrollToTop}
        style={{
          width: "90px",
          height: "90px",
          borderRadius: "60px",
          fontSize: "40px",
          color: "rgba(255, 255, 255, 0.6)",
          backgroundColor: "transparent",
          border: "none",
          cursor: "pointer",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          transition: "background 0.4s ease-in-out",
          animation: "pulse 1.5s infinite linear", // Apply pulse animation
        }}
        className="btn-circle"
      >
        <i
          className="fa fa-angle-down fa-2x animated"
          style={{
            animation: "pulse 1.5s infinite linear", // Apply pulse animation
          }}
        ></i>
      </button>
    </div>
  );
};

export default ScrollButton;
