import React from "react";
import "../css/PrivacyPolicyPage.css"; // Import CSS file

const PrivacyPolicyPage = () => {
  return (
    <div className="privacy-policy-container">
      <h1>Privacy Policy</h1>
      <p className="last-updated">Last Updated: 12/18/2024</p>

      <div className="policy-section">
        <h2>Introduction</h2>
        <p>
          Welcome to the Privacy Policy of the Snap Salon mobile application
          ("Snap Salon", "us", "we", or "our"). This Privacy Policy outlines how
          Snap Salon protects your privacy when you use our mobile application.
        </p>
      </div>

      <div className="policy-section">
        <h2>Information We Collect</h2>
        <p>
          Snap Salon collects personal information during the login process to enable
          salon owners and salon clients to access their respective views within the application.
          The information we collect may include but is not limited to:
        </p>
        <ul>
          <li>Email address</li>
          <li>Password</li>
        </ul>
        <p>
          This information is used solely to authenticate users and provide them with
          access to the appropriate user view (salon owner or salon client) within the app.
        </p>
      </div>

      <div className="policy-section">
        <h2>Third-Party Services</h2>
        <p>
          The Snap Salon mobile application may use third-party services for
          analytics and performance tracking. However, these third-party
          services do not collect any personal information or usage data from
          our users.
        </p>
      </div>

      <div className="policy-section">
        <h2>Children's Privacy</h2>
        <p>
          The Snap Salon mobile application is suitable for children aged 9
          years and above. We do not knowingly collect personal information from
          children under 9. If you are a parent or guardian and you are aware
          that your child has provided us with personal information, please
          contact us at shimwahono@gmail.com so that we can delete such
          information from our servers.
        </p>
      </div>

      <div className="policy-section">
        <h2>Security</h2>
        <p>
          We are committed to ensuring that your information is secure. In order
          to prevent unauthorized access or disclosure, we have put in place
          suitable physical, electronic, and managerial procedures to safeguard
          and secure the information we collect through the Snap Salon mobile
          application.
        </p>
      </div>

      <div className="policy-section">
        <h2>Changes to This Privacy Policy</h2>
        <p>
          We reserve the right to update or change our Privacy Policy at any
          time. You are advised to review this Privacy Policy periodically for
          any changes. Changes to this Privacy Policy are effective when they
          are posted on this page.
        </p>
      </div>

      <div className="policy-section">
        <h2>Contact Us</h2>
        <p>
          If you have any questions or concerns about our Privacy Policy or the
          Snap Salon mobile application, please contact us at
          shimwahono@gmail.com.
        </p>
      </div>
    </div>
  );
};

export default PrivacyPolicyPage;
