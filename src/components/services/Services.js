import React, { useEffect } from "react";
import "../services/services.css";
import img1 from "../img/Image.png";
import img2 from "../img/Image (1).png";
import img3 from "../img/Image4.png";
import img4 from "../img/Image (3).png";
import img5 from "../img/Image (2).png";
import img6 from "../img/Image6.png";
import AOS from "aos";
import "aos/dist/aos.css";

export default function Services() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  return (
    <div className="Services pt-3">
      <div className="container pt-5">
        <h1 className="mt-3" data-aos="fade-up">
          Our clinic provides a wide range of <br /> services
        </h1>
        <div className="row  align-items-end mt-2">
          <div
            className="col-xl-4 col-lg-6 col-md-6 col-sm-12"
            data-aos="fade-up"
          >
            <div className="card">
              <img src={img1} alt="Card" />
              <div className="card-content">
                <h3>Dentistry for animals</h3>
                <p>
                  Just like humans, animals can develop dental problems such as
                  tooth decay, gum disease, and tooth loss.
                </p>
                <button>View Details</button>
              </div>
            </div>
          </div>
          <div
            className="col-xl-4 col-lg-6 col-md-6 col-sm-12"
            data-aos="fade-up"
          >
            <div className="card">
              <img src={img2} alt="Card" />
              <div className="card-content">
                <h3>Your pet's Documents</h3>
                <p>
                  Animals do not require legal documents like humans do.
                  However, some animals may need certain documents for specific
                  purposes.
                </p>
                <button>View Details</button>
              </div>
            </div>
          </div>
          <div
            className="col-xl-4 col-lg-6 col-md-6 col-sm-12"
            data-aos="fade-up"
          >
            <div className="card">
              <img src={img3} alt="Card" />
              <div className="card-content">
                <h3>Vaccination</h3>
                <p>
                  Vaccination for animals is the process of administering a
                  vaccine to an animal to help prevent the spread of diseases.
                </p>
                <button>View Details</button>
              </div>
            </div>
          </div>
        </div>
        <h1 className="mt-5" data-aos="fade-up">
          From surgery to behavioral consultations
        </h1>
        <div className="row align-items-end mt-2">
          <div
            className="col-xl-4 col-lg-6 col-md-6 col-sm-12"
            data-aos="fade-up"
          >
            <div className="card">
              <img src={img6} alt="Card" />
              <div className="card-content">
                <h3>Surgery for pets</h3>
                <p>
                  Pet surgery refers to medical procedures performed on animals
                  under anesthesia by a licensed veterinarian.
                </p>
                <button>View Details</button>
              </div>
            </div>
          </div>
          <div
            className="col-xl-4 col-lg-6 col-md-6 col-sm-12"
            data-aos="fade-up"
          >
            <div className="card">
              <img src={img5} alt="Card" />
              <div className="card-content">
                <h3>Consultation</h3>
                <p>
                  The veterinarian may also perform diagnostic tests such as
                  blood work, urinalysis, or x-rays to help diagnose any
                  underlying health issues.
                </p>
                <button>View Details</button>
              </div>
            </div>
          </div>
          <div
            className="col-xl-4 col-lg-6 col-md-6 col-sm-12"
            data-aos="fade-up"
          >
            <div className="card">
              <img src={img4} alt="Card" />
              <div className="card-content">
                <h3>Caring for newborn</h3>
                <p>
                  Animals do not require legal documents like humans do.
                  However, some animals may need certain documents for specific
                  purposes.
                </p>
                <button>View Details</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
