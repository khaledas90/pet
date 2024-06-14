import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "./clients.css";
import img1 from "../img/Avatar.png";
import img2 from "../img/Avatar (1).png";
import img3 from "../img/Avatar (2).png";
import img4 from "../img/Avatar (3).png";
import Button from "react-bootstrap/Button";
import UpArrowRight from "../img/arrow-up-right.svg";

export default function Clients() {
  useEffect(() => {
    AOS.init({
      duration: 1200,
      easing: "ease-in-out",
      once: true,
    });
  }, []);

  return (
    <>
      <div className="Clients">
        <div className="overlay"></div>
        <div className="container">
          <h1 className="title mb-5 Z-2" data-aos="fade-down">
            Our clients are always satisfied
          </h1>
          <div className="row">
            <div className="col-lg-5 mt-3" data-aos="fade-right">
              <div className="card">
                <div className="card-body">
                  <div className="card-title d-flex align-items-center justify-content-between">
                    <div className="user d-flex align-items-center">
                      <img src={img1} alt="avatar img" />
                      <h6>Rebert Kerry</h6>
                    </div>
                    <div className="date">
                      <p>12.12.2023</p>
                    </div>
                  </div>
                  <p className="card-text">
                    I've been bringing my pets to this veterinary clinic for
                    years and have never been disappointed. The vets are highly
                    skilled and provide personalized care for each animal.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-7 mt-3" data-aos="fade-left">
              <div className="card">
                <div className="card-body" style={{ paddingBottom: "16px" }}>
                  <div className="card-title d-flex align-items-center justify-content-between">
                    <div className="user d-flex align-items-center">
                      <img src={img2} alt="avatar img" />
                      <h6>Ivan Rov</h6>
                    </div>
                    <div className="date">
                      <p>02.02.2023</p>
                    </div>
                  </div>
                  <p className="card-text">
                    I recently had a positive experience at this veterinary
                    clinic. The staff was friendly and efficient, making the
                    check-in process <br />a breeze. The vet was very patient in
                    answering my questions and provided clear instructions for
                    my pet's care.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-7 mt-3" data-aos="fade-right">
              <div className="card">
                <div className="card-body" style={{ paddingBottom: "16px" }}>
                  <div className="card-title d-flex align-items-center justify-content-between">
                    <div className="user d-flex align-items-center">
                      <img src={img3} alt="avatar img" />
                      <h6>Jonathan Bell</h6>
                    </div>
                    <div className="date">
                      <p>08.04.2023</p>
                    </div>
                  </div>
                  <p className="card-text">
                    As a satisfied client, I highly recommend this veterinary
                    clinic. The staff is friendly and knowledgeable, and the
                    vets are skilled and compassionate. From routine check-ups
                    to complex surgeries, they provide top-notch care for all
                    types of pets.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-5 mt-3" data-aos="fade-left">
              <div className="card">
                <div className="card-body">
                  <div className="card-title d-flex align-items-center justify-content-between">
                    <div className="user d-flex align-items-center">
                      <img src={img4} alt="avatar img" />
                      <h6>Arthur Dill</h6>
                    </div>
                    <div className="date">
                      <p>07.02.2023</p>
                    </div>
                  </div>
                  <p className="card-text">
                    I recently visited this veterinary clinic for the first time
                    and was thoroughly impressed. The staff was welcoming and
                    attentive, making my furry friend feel right at home.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-12 text-center z-2 mt-2" data-aos="fade-up">
              <Button variant="primary" className="btnClient" size="sm">
                View all Reviews
                <img src={UpArrowRight} alt="arrow" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
