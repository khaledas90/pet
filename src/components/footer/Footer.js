import React, { useEffect } from "react";
import "./Footer.css";
import Button from "react-bootstrap/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faInstagram,
  faTwitter,
  faYahoo,
} from "@fortawesome/free-brands-svg-icons";
import AOS from "aos";
import "aos/dist/aos.css";

export default function Footer() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  return (
    <div className="Footer">
      <div className="container">
        <div className="title" data-aos="fade-up">
          <h1>
            Always happy to help <br />
            your friend
          </h1>
          <Button variant="primary" className="btnFooter" size="sm">
            Free Call
          </Button>
        </div>
        <div className="row footerLinks">
          <div className="col" data-aos="fade-up">
            <h4>About Us</h4>
            <ul>
              <li>Address</li>
              <li>Connection</li>
            </ul>
          </div>
          <div className="col" data-aos="fade-up">
            <h4>Services</h4>
            <ul>
              <li>Dentistry</li>
              <li>Documentation</li>
              <li>Vaccination</li>
              <li>Surgery</li>
              <li>Consultation</li>
              <li>Newborns</li>
            </ul>
          </div>
          <div className="col" data-aos="fade-up">
            <h4>Doctors</h4>
            <ul>
              <li>Specialists</li>
              <li>Licenses</li>
              <li>Practice</li>
              <li>Vacancies</li>
            </ul>
          </div>
          <div className="col" data-aos="fade-up">
            <h4>Equipment</h4>
            <ul>
              <li>Certificates</li>
              <li>Exploitation</li>
            </ul>
          </div>
          <div className="col" data-aos="fade-up">
            <h4>Charity</h4>
            <ul>
              <li>Promotions</li>
              <li>Partners</li>
              <li>Achievements</li>
            </ul>
          </div>
          <div className="col" data-aos="fade-up">
            <h4>Reviews</h4>
            <ul>
              <li>Our clients</li>
              <li>On platforms</li>
            </ul>
          </div>
        </div>
        <div className="copyWight" data-aos="fade-up">
          <p>© Copywriting | All Rights Reserved</p>
          <span className="socialMedia">
            <FontAwesomeIcon className="icon iconBrand" icon={faInstagram} />
            <FontAwesomeIcon className="icon iconBrand" icon={faFacebook} />
            <FontAwesomeIcon className="icon iconBrand" icon={faYahoo} />
            <FontAwesomeIcon className="icon iconBrand" icon={faTwitter} />
          </span>
          <p>Terms of Use | Privacy</p>
        </div>
      </div>
    </div>
  );
}
