import React from "react";
import "./volunte.css";
import Headerr from "../components/Headerr";

function Volunte() {
  return (
    <div className="health-app">
      <Headerr/>

      <main className="main-content">
        <div className="hero-section">
          <h2>BluePulse:A new age of healthcare is here</h2>
          <p className="subtitle">Help Aging People Thrive</p>
        </div>


        <div className="features-grid">
          {/* First row with 3 cards */}
          <div className="feature-card">
            <div className="card-icon">⏰</div>
            <h3>Spend a day</h3>
          </div>
          <div className="feature-card">
            <div className="card-icon">📥</div>
            <h3>Donate</h3>
          </div>
          <div className="feature-card">
            <div className="card-icon">🤝</div>
            <h3>Connect</h3>
          </div>

          {/* Second row with 2 cards */}
          <div className="feature-card">
            <div className="card-icon">🚗</div>
            <h3>Volunteer for Travel</h3>
          </div>
          <div className="feature-card">
            <div className="card-icon">👥</div>
            <h3>Membership</h3>
          </div>
        </div>

        <div className="documentation-link">
          <a href="#">Read T&C &gt;&gt;</a>
        </div>
      </main>      

      <footer className="welcome-footer">
          <p>Help those in need</p>
          <p>Find old aged people who might need your help around you</p>
          <div className="image"><img src="src\assets\map.jpg"/ ></div>
          <div className="attribution">
            <span>Powered by</span>
            <span className="google-maps">Google Maps</span>
          </div>
        </footer>
    </div>
  );
}

export default Volunte;