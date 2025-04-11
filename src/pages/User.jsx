import React from "react";
import "./user.css";
import Headerr from "../components/Headerr";
function User() {
  return (
    <div className="health-app">
     <Headerr/>

      <main className="main-content">
        <div className="hero-section">
          <h2>BluePulse: A new age of healthcare is here</h2>
          <p className="subtitle">Explore with AI</p>
        </div>

        <div className="search-bar">
          <input type="text" placeholder="Search features..." />
        </div>

        <div className="features-grid">
          {/* First row with 3 cards */}
          <div className="feature-card">
            <div className="card-icon">🏥</div>
            <h3>Health Hub</h3>
          </div>
          <div className="feature-card">
            <div className="card-icon">💰</div>
            <h3>Fundraiser</h3>
          </div>
          <div className="feature-card">
            <div className="card-icon">✈️</div>
            <h3>Travel</h3>
          </div>

          {/* Second row with 2 cards */}
          <div className="feature-card">
            <div className="card-icon">🤖</div>
            <h3>AI Posture tracking</h3>
          </div>
          <div className="feature-card">
            <div className="card-icon">💪</div>
            <h3>Fitness Plans</h3>
          </div>
        </div>

        <div className="documentation-link">
          <a href="#">Read Documentation &gt;&gt;</a>
        </div>
      </main>

      <div className="emergency-section">
        <p>Click here in case of Emergency</p>
        <button className="sos-button">SOS</button>
      </div>
    </div>
  );
}

export default User;