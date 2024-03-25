import React from "react";
import "../css/MarketingPage.css"; // Import CSS file
import appImage1 from "../images/image1.png";
import appImage2 from "../images/image2.png";
import appImage3 from "../images/image3.png";

const MarketingPage = () => {
  return (
    <div className="marketing-container">
      <h1>Discover Snap Salon</h1>

      <div className="feature">
        <h2>Find the Perfect Stylist</h2>
        <p>
          With Snap Salon, you can easily discover top-rated hairstylists and
          salons in your area. Browse through profiles, reviews, and portfolios
          to find the perfect match for your style.
        </p>
        <img src={appImage1} alt="Snap Salon App Screenshot 1" />
      </div>

      <div className="feature">
        <h2>Book Hassle-Free Appointments</h2>
        <p>
          Say goodbye to waiting in line or making countless phone calls. With
          Snap Salon, booking appointments is as easy as a few taps on your
          phone. Choose your preferred date, time, and service, and leave the
          rest to us.
        </p>
        <img src={appImage2} alt="Snap Salon App Screenshot 2" />
      </div>

      <div className="feature">
        <h2>Stay Connected</h2>
        <p>
          Receive timely reminders about upcoming appointments, track your
          stylist's availability, and communicate directly through the app. Snap
          Salon keeps you connected every step of the way.
        </p>
        <img src={appImage3} alt="Snap Salon App Screenshot 3" />
      </div>

      <div className="cta">
        <h2>Ready to Transform Your Look?</h2>
        <p>
          Download Snap Salon today and experience the ultimate convenience in
          hairstyling and salon services. Join thousands of satisfied users who
          have discovered a new way to look and feel their best.
        </p>
        <button className="download-button">Download Now</button>
      </div>
    </div>
  );
};

export default MarketingPage;
