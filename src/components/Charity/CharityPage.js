import React, { Fragment, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircle } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import Charity from "./Charity";
import AOS from "aos";
import "aos/dist/aos.css";

export default function CharityPage(props) {
  useEffect(() => {
    AOS.init({
      duration: 1200,
      easing: "ease-in-out",
      once: true,
    });
  }, []);

  return (
    <Fragment>
      <div className="Charity Page">
        <div
          className="headerDetailsPage jumbotron-fluid pb-5"
          style={{ padding: "4rem 2rem" }}
          data-aos="fade-down"
        >
          <div className="container text-center py-5">
            <h1 className="text-white display-3">Charity {props.Charity}</h1>
            <div className="d-inline-flex mt-5 align-items-center text-white">
              <p className="m-0">
                <Link exact="true" className="LinkDetailPage" to="/">
                  Home
                </Link>
              </p>
              <FontAwesomeIcon
                className="icon iconDetailPage"
                icon={faCircle}
              />
              <p className="m-0">Charity {props.Charity}</p>
            </div>
          </div>
        </div>
        <Charity />
      </div>
    </Fragment>
  );
}
