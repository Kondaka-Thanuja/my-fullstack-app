import React, { useState } from "react";
import './Labsupgrade.css'
import { useNavigate } from "react-router-dom";
import { IoClose } from "react-icons/io5";
import Education from "./Education";  // import your Education component

const Labsupgrade = () => {
  const [activeCard, setActiveCard] = useState(null);

  const handleClick = (page) => {
    setActiveCard(activeCard === page ? null : page);
  };

  const navigate = useNavigate();
  const goBack = () => {
    navigate("/");
  };

  return (
    <div>
      <div className="heading">
        <h1>Try Perplexity Labs</h1>
        <h3>Exclusive access for Subscribers</h3>
      </div>

      {/* Toggle Buttons */}
      <div className="buttons">
        <button onClick={() => handleClick("Personal")}>Personal</button>
        <button onClick={() => handleClick("Education")}>Education</button>
        <button onClick={() => handleClick("Business")}>Business</button>
      </div>

      {/* Show Education card when active */}
      {activeCard === "Education" && <Education />}

      {/* Pricing Boxes (only show when no Education card is open) */}
      {activeCard !== "Education" && (
        <div className="main-box">
          {/* Pro Plan */}
          <div className="left-box">
            <h2 className="h2">Pro</h2>
            <button id="btn">Popular</button>
            <h2 className="h2">$20.00/month</h2>
            <h3 className="h3">$16.67 when billed annually</h3>
            <h4>Upgrade productivity and learning with additional access</h4>
            <button className="main-btn">Get Pro</button>
            <div className="list">
              <ul>
                <li>10x as many citations in answers</li>
                <li>Access to Comet, the agentic browser</li>
                <li>Access to Perplexity Labs</li>
                <li>Unlimited file and photo uploads</li>
                <li>Extended access to Perplexity Research</li>
                <li>Extended access to image generation</li>
                <li>Limited access to video generation</li>
              </ul>
            </div>
          </div>

          {/* Max Plan */}
          <div className="right-box">
            <h2 className="h2">Max</h2>
            <h2 className="h2">$200.00/month</h2>
            <h3 className="h3">
              Unlock Perplexity's full capabilities with early access to new products
            </h3>
            <button className="main-btn">Get Max</button>
            <div className="list">
              <ul>
                <li>Everything in Pro</li>
                <li>Early access to Comet, the agentic browser</li>
                <li>Unlimited access to Perplexity</li>
                <li>Unlimited access to Perplexity Research</li>
                <li>Use advanced AI models like OpenAI o3-pro & Anthropic Claude Opus 4.1</li>
                <li>Enhanced access to video generation</li>
                <li>Priority support</li>
              </ul>
            </div>
          </div>
        </div>
      )}

      {/* Back button */}
      <button onClick={goBack} className="home_btn">
        <IoClose />
      </button>
    </div>
  );
};

export default Labsupgrade;
