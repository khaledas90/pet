import React, { useEffect } from "react";
import "./equipment.css";
import EquipmentImageOne from "../img/Equipment img 2.png";
import EquipmentImageTwo from "../img/Equipment img 1.png";
import upArrowRight from "../img/arrow-up-right-blue.svg";
import AOS from "aos";
import "aos/dist/aos.css";

export default function Equipment() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  return (
    <div className="Equipment">
      <div className="container">
        <h1 className="title pb-2">
          Our doctors provide a wide range of services, from routine check-ups
        </h1>
        <div className="Equipment-cards">
          <div className="row">
            <div className="col-lg-6 mb-3" data-aos="fade-right">
              <div className="content">
                <div className="d-flex justify-content-between">
                  <h4>
                    All our equipment has international quality certificates
                  </h4>
                  <span>
                    <img src={upArrowRight} alt="img-cat" />
                  </span>
                </div>
                <p className="text-light">More About</p>
              </div>
            </div>
            <div className="col-lg-6 mb-3" data-aos="fade-left">
              <div className="image-section">
                <img
                  src={EquipmentImageOne}
                  style={{ width: "100%" }}
                  alt="Veterinarian img"
                />
              </div>
            </div>
            <div className="col-lg-6 mb-3" data-aos="fade-right">
              <div className="row">
                <div className="col-lg-6 mb-3">
                  <div className="content">
                    <h4 className="title-card">
                      All equipment undergoes special treatment
                    </h4>
                    <span className="d-block text-end">
                      <img src={upArrowRight} alt="img-cat" />
                    </span>
                  </div>
                </div>
                <div className="col-lg-6 mb-3">
                  <div className="image-section">
                    <img
                      src={EquipmentImageTwo}
                      style={{ width: "100%" }}
                      alt="Veterinarian img"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6 mb-3" data-aos="fade-left">
              <div className="content">
                <div className="d-flex justify-content-between">
                  <h4>
                    Our clinic uses proven drugs and also provides them to our
                    clients
                  </h4>
                  <span>
                    <img src={upArrowRight} alt="img-cat" />
                  </span>
                </div>
                <p className="text-light">More About</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
