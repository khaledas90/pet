import React, { useState, useEffect } from "react";
import "../header/header.css";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

const Navbar = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 989);
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 989);
    };
    const handleResizeDrob = () => {
      setIsMobile(window.innerWidth <= 989);
    };

    window.addEventListener("resize", handleResize);
    window.addEventListener("resize", handleResizeDrob);

    return () => {
      window.removeEventListener("resize", handleResize);
      window.addEventListener("resize", handleResizeDrob);
    };
  }, []);

  const toggleMenu = () => {
    const nav = document.querySelector(".nav ul");
    if (nav.style.display === "block") {
      nav.style.display = "none";
    } else if ((nav.style.display = "none")) {
      nav.style.display = "block";
    }
  };

  return (
    <div className="Navbar">
      <div className="content">
        <div className="content-left">
          <div className="logo">
            <h1 className="m-0 display-5 text-uppercase ">
              {" "}
              <Link className="logo" exact="true" to="/">
                pet.
              </Link>
            </h1>
          </div>
          <div className="navbar_links">
            <div className="nav">
              <ul style={{ display: isMobile ? "none" : "flex" }}>
                <li>
                  <Link exact="true" to="/">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link exact="true" to="/Services">
                    Services
                  </Link>
                </li>
                <li>
                  <Link exact="true" to="/Doctors">
                    Doctors
                  </Link>
                </li>
                <li>
                  <Link exact="true" to="/Equipment">
                    Equipment
                  </Link>
                </li>
                <li>
                  <Link exact="true" to="/Charity">
                    Charity
                  </Link>
                </li>
                <li>
                  <Link exact="true" to="/Clint">
                    Reviews
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div
          className="content-right"
          style={{ display: isMobile ? "none" : "flex" }}
        >
          <button className=" headBtn-one py-2 px-4 d-none d-lg-block">
            Questionnaire
          </button>
          <button className=" headBtn-two py-2 px-4 d-none d-lg-block">
            <Link exact="true" to="/Contact">
              Free Call
            </Link>
          </button>
        </div>
        <FontAwesomeIcon
          className="OpenNave"
          onClick={toggleMenu}
          icon={faBars}
        />
      </div>
    </div>
  );
};

export default Navbar;
