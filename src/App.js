import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";

import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./components/header/Header.js";
import Home from "./components/home/Home.js";
import Footer from "./components/footer/Footer.js";
import Charity from "./components/Charity/CharityPage.js";
import Clients from "./components/clients/ClintPage.js";
import Contact from "./components/contact/conectPage.js";
import Doctors from "./components/doctors/DoctorPage.js";
import EquipmentPage from "./components/equipment/EquipmentPage.js";
import ServicesPage from "./components/services/ServicesPage.js";

function App() {
  const state = {
    Charity: "Charity",
    Clients: "Clients",
    Contact: "Contact",
    Doctors: "Doctors",
    Equipment: "Equipment",
    Services: "Services",
  };
  return (
    <>
      <Router>
        <div className="App">
          <Header />
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route
              exact
              path="/Charity"
              Charity={state.Charity}
              element={<Charity />}
            />
            <Route
              exact
              path="/Clint"
              Clients={state.Clients}
              element={<Clients />}
            />
            <Route
              exact
              path="/Contact"
              Contact={state.Contact}
              element={<Contact />}
            />
            <Route
              exact
              path="/Doctors"
              Doctors={state.Doctors}
              element={<Doctors />}
            />
            <Route
              exact
              path="/Equipment"
              Equipment={state.Equipment}
              element={<EquipmentPage />}
            />
            <Route
              exact
              path="/Services"
              Services={state.Services}
              element={<ServicesPage />}
            />
          </Routes>
          <Footer />
        </div>
      </Router>
    </>
  );
}

export default App;
