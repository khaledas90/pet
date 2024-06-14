import React, { useEffect } from "react";
import "./contact.css";
import upArrowRight from "../img/arrow-up-right-blue.svg";
import Button from "react-bootstrap/Button";
import UpArrowRight from "../img/arrow-up-right.svg";
import AOS from "aos";
import "aos/dist/aos.css";

export default function Contact() {
  useEffect(() => {
    AOS.init({
      duration: 800,
      easing: "ease-in-out",
      once: true,
    });
  }, []);

  return (
    <>
      <div className="Contact">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 d-flex" data-aos="fade-right">
              <div className="info-section">
                <p>
                  Would you like us to <br /> contact you?
                </p>
                <p>We’re always in touch</p>
                <div className="contactMail">
                  pet.clinic@gmail.com
                  <img src={upArrowRight} alt="email icon" />
                </div>
              </div>
            </div>
            <div className="col-lg-6 p-0" data-aos="fade-left">
              <div className="section-form">
                <form>
                  <div className="form__group field">
                    <input
                      type="input"
                      className="form__field"
                      placeholder="Name"
                      name="name"
                      id="name"
                      required
                    />
                    <label className="form__label">Your Name</label>
                  </div>
                  <div className="form__group field">
                    <input
                      type="input"
                      className="form__field"
                      placeholder="Number"
                      name="number"
                      id="number"
                      required
                    />
                    <label className="form__label">Your Number</label>
                  </div>
                  <div className="form__group field">
                    <input
                      type="input"
                      className="form__field"
                      placeholder="Pet Type"
                      name="petType"
                      id="petType"
                      required
                    />
                    <label className="form__label">Type of your Pet</label>
                  </div>
                  <div className="form__group field">
                    <input
                      type="input"
                      className="form__field"
                      placeholder="Call Time"
                      name="callTime"
                      id="callTime"
                      required
                    />
                    <label className="form__label">
                      What time should I call you?
                    </label>
                  </div>
                </form>
                <Button variant="primary" className="btnContact" size="sm">
                  Send
                  <img src={UpArrowRight} alt="arrow icon" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
