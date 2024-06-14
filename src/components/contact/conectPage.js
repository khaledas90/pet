import React, { useEffect, Fragment } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircle } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import Contact from "./Contact";
import AOS from "aos";
import "aos/dist/aos.css";

export default function ContactPage(props) {
  useEffect(() => {
    AOS.init({
      duration: 800,
      easing: "ease-in-out",
      once: true,
    });
  }, []);

  return (
    <Fragment>
      <div className="Contact Page">
        <div
          className="headerDetailsPage jumbotron-fluid pb-5"
          style={{ padding: "4rem 2rem" }}
          data-aos="fade-down"
        >
          <div className="container text-center py-5">
            <h1 className="text-white display-3">Contact {props.Contact}</h1>
            <div className="d-inline-flex mt-5 align-items-center text-white">
              <p className="m-0">
                <Link exact="true" className="LinkDetailPage" to="/">
                  Home
                </Link>
              </p>
              <FontAwesomeIcon
                className="icon iconDetailPage mx-2"
                icon={faCircle}
              />
              <p className="m-0">Contact {props.Contact}</p>
            </div>
          </div>
        </div>
        <div data-aos="fade-up">
          <Contact />
        </div>
      </div>
    </Fragment>
  );
}
