import React, { useState } from "react";
import { FaGlobe, FaGraduationCap } from "react-icons/fa";
import { TbSocial, TbReportMoney } from "react-icons/tb";
import "./Globe.css";

const Globe = () => {
  const [toggles, setToggles] = useState({
    web: false,
    academic: false,
    social: false,
    finance: false,
  });

  const handleToggle = (key) => {
    setToggles((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  return (
    <div className="globe-icons">
      {/* Web */}
      <div className={`globe-card ${toggles.web ? "active" : ""}`}>
        <div className="globe-icon-left">
          <FaGlobe size={24} />
          <div>
            <h3>Web</h3>
            <h4>Search across the entire Internet</h4>
          </div>
        </div>
        <button
          className={`globe-toggle-btn ${toggles.web ? "on" : "off"}`}
          onClick={() => handleToggle("web")}
        >
          {toggles.web ? "ON" : "OFF"}
        </button>
      </div>

      {/* Academic */}
      <div className={`globe-card ${toggles.academic ? "active" : ""}`}>
        <div className="globe-icon-left">
          <FaGraduationCap size={24} />
          <div>
            <h3>Academic</h3>
            <h4>Search academic papers</h4>
          </div>
        </div>
        <button
          className={`globe-toggle-btn ${toggles.academic ? "on" : "off"}`}
          onClick={() => handleToggle("academic")}
        >
          {toggles.academic ? "ON" : "OFF"}
        </button>
      </div>

      {/* Social */}
      <div className={`globe-card ${toggles.social ? "active" : ""}`}>
        <div className="globe-icon-left">
          <TbSocial size={24} />
          <div>
            <h3>Social</h3>
            <h4>Discussions and Opinions</h4>
          </div>
        </div>
        <button
          className={`globe-toggle-btn ${toggles.social ? "on" : "off"}`}
          onClick={() => handleToggle("social")}
        >
          {toggles.social ? "ON" : "OFF"}
        </button>
      </div>

      {/* Finance */}
      <div className={`globe-card ${toggles.finance ? "active" : ""}`}>
        <div className="globe-icon-left">
          <TbReportMoney size={24} />
          <div>
            <h3>Finance</h3>
            <h4>Search SEC filings</h4>
          </div>
        </div>
        <button
          className={`globe-toggle-btn ${toggles.finance ? "on" : "off"}`}
          onClick={() => handleToggle("finance")}
        >
          {toggles.finance ? "ON" : "OFF"}
        </button>
      </div>
    </div>
  );
};

export default Globe;
