import React, { useState } from "react";
import './Screen.css';
import { FaSearchPlus, FaGgCircle, FaLightbulb, FaGlobe, FaMicrophone, FaArrowRight } from "react-icons/fa";
import { TbBoxModel } from "react-icons/tb";
import { AiOutlinePaperClip } from "react-icons/ai";
import { BsSoundwave } from "react-icons/bs";

import Searchone from "../Icons/Searchone";
import Research from "../Icons/Research";
import Labs from "../Icons/Labs";
import Globe from "../Icons/Globe";

const Screen = () => {
  const [activeCard, setActiveCard] = useState(null); 
  const [text, setText] = useState(""); // track textarea input

  // Unified handler to toggle cards
  const handleIconClick = (icon) => {
    setActiveCard(activeCard === icon ? null : icon);
  };

  

  return (
    <div className="screen-page">
      <div className="container">
        <h2 id="heading">perplexity</h2>
        <div className="place">
          <div className="input-wrapper">
            <textarea 
              placeholder="type anything here or @mention a space"
              value={text}
              onChange={(e) => setText(e.target.value)}
            />

            {/* Left icons */}
            <div className="icons">
              <FaSearchPlus
                className="icon"
                onClick={() => handleIconClick("searchone")}
              />
              <FaGgCircle
                className="icon"
                onClick={() => handleIconClick("research")}
              />
              <FaLightbulb
                className="icon"
                onClick={() => handleIconClick("labs")}
              />
            </div>

            {/* Right icons */}
            <div className="right-icons">
              <FaGlobe 
                className="icon"
                onClick={() => handleIconClick("globe")}
              />
              <TbBoxModel className="icon" />
              <AiOutlinePaperClip className="icon" />
              <FaMicrophone className="icon" />

              {/* Conditional right action icon */}
              {text.trim() === "" ? (
                <BsSoundwave style={{ color: "skyblue", cursor: "pointer" }} />
              ) : (
                <FaArrowRight style={{ color: "skyblue", cursor: "pointer" }} />
              )}
            </div>

            {/* Cards below the search bar */}
            {activeCard === "searchone" && (
              <div className="search-panel">
                <Searchone />
              </div>
            )}
            {activeCard === "research" && (
              <div className="search-panel">
                <Research />
              </div>
            )}
            {activeCard === "labs" && (
              <div className="search-panel">
                <Labs />
              </div>
            )}
            {activeCard === "globe" && (
              <div className="search-panel">
                <Globe />
              </div>
            )}

          </div>
        </div>
      </div>
    </div>
  );
};

export default Screen;
