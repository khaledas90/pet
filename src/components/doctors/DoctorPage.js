import React, { Fragment, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircle } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import Doctors from "./Doctors";
import AOS from "aos";
import "aos/dist/aos.css";

export default function DoctorPage(props) {
  useEffect(() => {
    AOS.init({
      duration: 800,
      easing: "ease-in-out",
      once: true,
    });
  }, []);

  return (
    <Fragment>
      <div className="Clint Page">
        <div
          className="headerDetailsPage jumbotron-fluid pb-5"
          style={{ padding: "4rem 2rem" }}
        >
          <div className="container text-center py-5">
            <h1 className="text-white display-3">Doctors {props.Doctors}</h1>
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
              <p className="m-0"> Doctors {props.Doctors}</p>
            </div>
          </div>
        </div>
        <Doctors />
      </div>
    </Fragment>
  );
}
