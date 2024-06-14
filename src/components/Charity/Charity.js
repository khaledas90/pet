import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "./Charity.css";
import img1 from "../img/Logo.png";
import img2 from "../img/Logo (1).png";
import img3 from "../img/Logo (2).png";
import img4 from "../img/Logo (3).png";
import img5 from "../img/Logo (4).png";
import img6 from "../img/Logo (5).png";
import upArrowRight from "../img/arrow-up-right-blue.svg";

export default function Charity() {
  useEffect(() => {
    AOS.init({
      duration: 1200,
      easing: "ease-in-out",
      once: true,
    });
  }, []);

  return (
    <>
      <div className="Charity">
        <div className="container">
          <h1 className="title pb-2" data-aos="fade-down">
            We collaborate with charities around the world
          </h1>
          <div className="row">
            <div className="col-lg-12 mt-4 text-white">
              <div className="row">
                <div className="col-lg-4" data-aos="fade-right">
                  <p>
                    Our vet clinic prioritizes community involvement and <br />{" "}
                    animal welfare through regular charity events
                    <br /> benefiting local animal shelters, rescue
                    organizations,
                    <br /> and related causes
                  </p>
                </div>
                <div className="col-lg-4" data-aos="fade-up">
                  <div className="content-nums">
                    <b> 100+ </b> <br />
                    Animals saved <br />
                    All time
                  </div>
                </div>
                <div className="col-lg-4" data-aos="fade-left">
                  <div className="content-nums">
                    <b> 64 </b> <br />
                    Charitable events <br />
                    Held
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-12 mt-3">
              <div className="row">
                <div className="col-lg-3" data-aos="zoom-in">
                  <div className="card">
                    <h6>
                      Collaborate with <br />
                      popular brand
                    </h6>
                  </div>
                </div>
                <div
                  className="col-lg-3 mt-2"
                  data-aos="zoom-in"
                  data-aos-delay="100"
                >
                  <div className="card card-details">
                    <div className="content">
                      <p>
                        Happy <br /> Smile <br /> Foundation
                      </p>
                      <img src={img1} className="img-card" alt="img logo" />
                    </div>
                  </div>
                </div>
                <div
                  className="col-lg-3 mt-2"
                  data-aos="zoom-in"
                  data-aos-delay="200"
                >
                  <div className="card p-0 card-details">
                    <div className="content">
                      <p className="p-0">
                        Healthy
                        <br /> Atmosphere
                        <br /> Foundation
                      </p>
                      <img src={img2} className="img-card" alt="img logo" />
                    </div>
                  </div>
                </div>
                <div
                  className="col-lg-3 mt-2"
                  data-aos="zoom-in"
                  data-aos-delay="300"
                >
                  <div className="card card-details">
                    <div className="content">
                      <p>
                        Friendly <br /> Hand <br />
                        Foundation
                      </p>
                      <img src={img3} className="img-card" alt="img logo" />
                    </div>
                  </div>
                </div>
                <div
                  className="col-lg-3 mt-2"
                  data-aos="zoom-in"
                  data-aos-delay="400"
                >
                  <div className="card card-details">
                    <div className="content">
                      <p>
                        We Are <br /> Together Foundation
                      </p>
                      <img src={img4} className="img-card" alt="img logo" />
                    </div>
                  </div>
                </div>
                <div
                  className="col-lg-3 mt-2"
                  data-aos="zoom-in"
                  data-aos-delay="500"
                >
                  <div className="card card-details">
                    <div className="content">
                      <p>
                        Circle <br /> of <br /> Life Foundation
                      </p>
                      <img src={img5} className="img-card" alt="img logo" />
                    </div>
                  </div>
                </div>
                <div
                  className="col-lg-3 mt-2"
                  data-aos="zoom-in"
                  data-aos-delay="600"
                >
                  <div className="card card-details">
                    <div className="content">
                      <p>
                        Good <br /> Hands <br /> Foundation
                      </p>
                      <img src={img6} className="img-card" alt="img logo" />
                    </div>
                  </div>
                </div>
                <div
                  className="col-lg-3 mt-3"
                  data-aos="zoom-in"
                  data-aos-delay="700"
                >
                  <div className="card card-contact border">
                    <div className="content d-flex align-items-center justify-content-around">
                      <p>
                        Contact us <br />
                        for
                        <br /> cooperation
                      </p>
                      <img src={upArrowRight} alt="img-cat" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
