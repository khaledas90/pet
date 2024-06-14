import React, { useEffect } from "react";
import "../doctors/doctors.css";
import vetImage from "../img/doctor.png";
import Button from "react-bootstrap/Button";
import upArrowRight from "../img/arrow-up-right.svg";
import AOS from "aos";
import "aos/dist/aos.css";

export default function Doctors() {
  useEffect(() => {
    AOS.init({
      duration: 800,
      easing: "ease-in-out",
      once: true,
    });
  }, []);

  return (
    <>
      <div className="doctors" data-aos="fade-up">
        <div className="container">
          <h1 className="title pb-2">
            Our doctors provide a wide range of services, from routine check-ups
          </h1>

          <div className="veterinary-info-container">
            <div className="row">
              <div className="col-lg-6 d-flex">
                <div className="info-section">
                  <p>
                    Our veterinarians have completed extensive training and
                    education in veterinary medicine, including a Doctor of
                    Veterinary Medicine (DVM) degree from an accredited
                    veterinary school.
                  </p>
                  <div className=" d-flex align-items-center justify-content-between">
                    <div className="specialties">
                      <ul>
                        <li>Surgeons</li>
                        <li>Dentists</li>
                        <li>Therapists</li>
                        <li>Ophthalmologists</li>
                      </ul>
                    </div>
                    <div className="btn">
                      <Button
                        variant="primary"
                        className="btnDoctors"
                        size="sm"
                      >
                        Free Call
                        <img src={upArrowRight} alt="img-cat" />
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="image-section" data-aos="zoom-in">
                  <img src={vetImage} alt="Veterinarian with dog" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
