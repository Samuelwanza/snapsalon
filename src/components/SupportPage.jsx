import React from 'react';
import '../css/SupportPage.css'; // Import CSS file
import appImage1 from '../images/image1.png';
import appImage2 from '../images/image2.png';
import appImage3 from '../images/image3.png';

const SupportPage = () => {
  const supportContact = {
    name: "Snap Salon Support Team",
    email: "shimwahono@gmail.com.com",
    phone: "0768331257",
    address: "KG 11 St, Kigali, Rwanda"
  };

  return (
    <div className="support-container">
      <h1>Welcome to Snap Salon Support</h1>
      <p>At Snap Salon, we're dedicated to providing exceptional service to our users. If you have any questions, concerns, or feedback, our support team is here to help!</p>
      
      <div className="contact-info">
        <h2>Contact Information</h2>
        <ul>
          <li>Name: {supportContact.name}</li>
          <li>Email: <a href={`mailto:${supportContact.email}`}>{supportContact.email}</a></li>
          <li>Phone: <a href={`tel:${supportContact.phone}`}>{supportContact.phone}</a></li>
          <li>Address: {supportContact.address}</li>
        </ul>
      </div>
      
      <div className="how-we-help">
        <h2>How We Can Help You</h2>
        <p>Our dedicated support team is available to assist you with:</p>
        <ul>
          <li>Booking inquiries</li>
          <li>Technical issues</li>
          <li>Feedback and suggestions</li>
          <li>General questions about Snap Salon</li>
        </ul>
      </div>
      
      <div className="app-images">
        <h2>Explore Snap Salon</h2>
        <div className="app-image">
          <img src={appImage1} alt="Snap Salon App Screenshot 1" />
        </div>
        <div className="app-image">
          <img src={appImage2} alt="Snap Salon App Screenshot 2" />
        </div>
        <div className="app-image">
          <img src={appImage3} alt="Snap Salon App Screenshot 3" />
        </div>
      </div>
      
      <p className="thank-you">Thank you for choosing Snap Salon!</p>
    </div>
  );
};

export default SupportPage;
