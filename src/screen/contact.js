import Header from "../Layout/header";
import React from "react";
import "./contactPage.css";

const ContactPage = () => {
  return (
    <>
      <Header />

      <div className="contact-page">
        <div className="contact-card">

          <h1>Contact Us</h1>

          <p>
            Have any questions about geometric learning?
            Feel free to reach out.
          </p>

          <div className="contact-info">

            <div className="contact-item">
              <h3>Email</h3>
              <span>info@geometriclearning.com</span>
            </div>


            <div className="contact-item">
              <h3>Phone</h3>
              <span>(123) 456-7890</span>
            </div>


            <div className="contact-item">
              <h3>Address</h3>
              <span>
                123 Geometry Lane,
                Math City, CA 90210
              </span>
            </div>

          </div>


          <button className="contact-btn">
            Send Message
          </button>

        </div>
      </div>
    </>
  );
};

export default ContactPage;