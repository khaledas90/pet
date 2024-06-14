import React, { useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircle } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import Services from "./Services";
import AOS from "aos";
import "aos/dist/aos.css";

export default function ServicesPage(props) {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  return (
    <div className="ClientPage">
      <div
        className="headerDetailsPage jumbotron-fluid pb-5"
        style={{ padding: "4rem 2rem" }}
      >
        <div className="container text-center py-5">
          <h1 className="text-white display-3" data-aos="fade-up">
            Services {props.Services}
          </h1>
          <div className="d-inline-flex mt-5 align-items-center text-white">
            <p className="m-0">
              <Link className="LinkDetailPage" to="/">
                Home
              </Link>
            </p>
            <FontAwesomeIcon className="icon iconDetailPage" icon={faCircle} />
            <p className="m-0">Services {props.Services}</p>
          </div>
        </div>
      </div>
      <Services />
    </div>
  );
}
