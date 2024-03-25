import React from "react";
import "../css/CopyrightsPage.css"; // Import CSS file

const CopyrightsPage = () => {
  return (
    <div className="copyrights-container">
      <h1>Copyrights</h1>
      <p>
        This website and mobile application and its content are copyright ©
        [2024], Snap Salon. All rights reserved. The materials contained on this
        website are provided for general information purposes only and do not
        constitute legal or other professional advice on any subject matter.
      </p>

      <p>
        The Snap Salon logo and all related product and service names, design
        marks, and slogans are the trademarks or registered trademarks of Snap
        Salon. All other product and service marks contained herein are the
        trademarks of their respective owners.
      </p>

      <h2>Use of Website Content</h2>
      <p>
        Permission is granted to download and print copies of content from this
        website for personal, non-commercial use only. Any other use, including
        the reproduction, modification, distribution, transmission,
        republication, or display of the content on this website is strictly
        prohibited without prior written consent from Snap Salon.
      </p>

      <h2>Limitation of Liability</h2>
      <p>
        While we strive to keep the information on this website accurate and
        up-to-date, we make no representations or warranties of any kind,
        express or implied, about the completeness, accuracy, reliability,
        suitability, or availability of the information contained on this
        website or the products, services, or related graphics contained therein
        for any purpose. Any reliance you place on such information is therefore
        strictly at your own risk.
      </p>

      <p>
        In no event will we be liable for any loss or damage including without
        limitation, indirect or consequential loss or damage, or any loss or
        damage whatsoever arising from loss of data or profits arising out of,
        or in connection with, the use of this website.
      </p>

      <h2>Changes to Terms</h2>
      <p>
        Snap Salon reserves the right to revise these terms at any time without
        prior notice. By using this website, you are agreeing to be bound by the
        current version of these terms and conditions of use.
      </p>

      <p>
        For questions or inquiries regarding these terms, please contact us at{" "}
        <a href="mailto:legal@snapsalon.com">legal@snapsalon.com</a>.
      </p>
    </div>
  );
};

export default CopyrightsPage;
