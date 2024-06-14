import React, { Fragment, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Button from "react-bootstrap/Button";
import upArrowRight from "../img/arrow-up-right.svg";
import imgCatOne from "../img/cat-2.png";
import imgDog from "../img/Image Dog.png";
import imgCatTwo from "../img/cat.png";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";
import "./home.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Services from "../services/Services";
import Doctor from "../doctors/Doctors";
import Charity from "../Charity/Charity";
import Equipment from "../equipment/equipment";
import Clients from "../clients/Clients";
import Contact from "../contact/Contact";

export default function Home() {
  useEffect(() => {
    AOS.init({
      duration: 1200,
      easing: "ease-in-out",
      once: true,
    });
  }, []);

  return (
    <Fragment>
      <div className="home">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="content text-center" data-aos="fade-down">
                <h1>We are Pet.</h1>
                <h2>Caring Vets, Healthy Pets - Trust Us</h2>
              </div>
            </div>
            <div className="col-lg-12">
              <div className="row">
                <div
                  className="col-lg-6 colCatLeft col-md-12 d-flex align-items-center"
                  data-aos="fade-right"
                >
                  <div className="img-cat">
                    <img
                      src={imgCatOne}
                      style={{ width: "295px" }}
                      alt="img-cat"
                    />
                  </div>
                  <div className="context m-2">
                    <p className="p-1 ml-2 text-white">
                      Our veterinary clinic is a compassionate and skilled
                      facility dedicated to providing high-quality medical care
                      for pets.
                    </p>
                    <Button variant="primary" className="btnHome" size="sm">
                      Services
                      <img src={upArrowRight} alt="img-cat" />
                    </Button>
                  </div>
                </div>
                <div className="col-lg-6  col-md-12 colCatRight d-flex align-items-center">
                  <div className="row">
                    <div
                      className="col-lg-6 col-md-12 d-flex flex-column align-items-center"
                      data-aos="fade-up"
                    >
                      <div className="img-cat mb-3">
                        <img
                          src={imgDog}
                          style={{ width: "100%", maxWidth: "290px" }}
                          alt="img-dog"
                        />
                      </div>
                      <div className="context text-center">
                        <p className="text-white">
                          Trust us to be your go-to vet clinic for all your
                          pet's healthcare needs.
                        </p>
                      </div>
                    </div>
                    <div
                      className="col-lg-6 col-md-12 d-flex flex-column align-items-center"
                      data-aos="fade-left"
                    >
                      <div className="img-cat img-catThree mb-3">
                        <img
                          src={imgCatTwo}
                          style={{ width: "100%", maxWidth: "280px" }}
                          alt="img-cat"
                        />
                      </div>
                      <Button
                        variant="primary"
                        className="btnHome mt-2"
                        size="sm"
                      >
                        Reviews
                        <img src={upArrowRight} alt="up-arrow-right" />
                      </Button>
                    </div>
                  </div>
                </div>
                <div className="col-lg-12" data-aos="fade-up">
                  <div className="location mt-4">
                    <p>
                      {" "}
                      <FontAwesomeIcon
                        className="icon mr-2"
                        icon={faLocationDot}
                      />
                      2715 Ash Dr. San Jose, South Dakota 83475
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Services />
      <Doctor />
      <Charity />
      <Equipment />
      <Clients />
      <Contact />
    </Fragment>
  );
}
