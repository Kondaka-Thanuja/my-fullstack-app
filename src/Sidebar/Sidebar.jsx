import { IoMenu } from "react-icons/io5"; 
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import './Sidebar.css';
import { SiPerplexity } from "react-icons/si";
import { GoPlusCircle } from "react-icons/go";
import { IoHome } from "react-icons/io5";
import { HiOutlineGlobe } from "react-icons/hi";
import { AiFillCodeSandboxSquare } from "react-icons/ai";
import { FaBell } from "react-icons/fa6";
import { TfiMoney } from "react-icons/tfi";
import { MdModeOfTravel } from "react-icons/md";
import { SiUnacademy } from "react-icons/si";
import { FcSportsMode } from "react-icons/fc";
import { GiOverdrive } from "react-icons/gi";
import { FaRegStar } from "react-icons/fa";

const Sidebar = () => {
  const [hoverMenu, setHoverMenu] = useState(null);
  const [mobileOpen, setMobileOpen] = useState(false); // mobile toggle state
  const navigate = useNavigate();

  return (
    <>
      {/* Mobile hamburger icon */}
      <div className="mobile-hamburger" onClick={() => setMobileOpen(!mobileOpen)}>
        <IoMenu size={35} />
      </div>

      {/* Sidebar */}
      <div className={`sidebar ${mobileOpen ? "sidebar-mobile-open" : ""}`}>
        <div className="sidebar-logo">
          <SiPerplexity size={60} />
        </div>

        <ul className="sidebar-menu">
          <li className="menu-circle">
            <GoPlusCircle size={50} />
            <span>Add</span>
          </li>

          {/* Home */}
          <li
            className="menu-Home"
            onMouseEnter={() => setHoverMenu("home")}
            onMouseLeave={() => setHoverMenu(null)}
          >
            <div onClick={() => navigate("/")}>
              <IoHome size={50} /><br/>
              <span>Home</span>
            </div>

            {hoverMenu === "home" && (
              <div className="flyout">
                <ul>
                  <li>
                    <Link to="/finance"><TfiMoney style={{ fontSize: "25px", marginRight: "8px" }}/> Finance</Link>
                  </li>
                  <li>
                    <Link to="/travel"><MdModeOfTravel style={{ fontSize: "25px", marginRight: "8px" }}/> Travel</Link>
                  </li>
                  <li>
                    <Link to="/acadamics"><SiUnacademy style={{ fontSize: "25px", marginRight: "8px" }}/> Academics</Link>
                  </li>
                  <li>
                    <Link to="/sports"><FcSportsMode style={{ fontSize: "25px", marginRight: "8px" }} /> Sports</Link>
                  </li>
                </ul>
              </div>
            )}
          </li>

          {/* Explore */}
          <li
            className="menu-globe"
            onMouseEnter={() => setHoverMenu("explore")}
            onMouseLeave={() => setHoverMenu(null)}
          >
            <div onClick={() => navigate("/")}>
              <HiOutlineGlobe size={50} style={{ marginLeft: "25px" }} />
              <span style={{ marginLeft: "25px" }}>Explore</span>
            </div>

            {hoverMenu === "explore" && (
              <div className="flyout">
                <ul>
                  <li><Link to="/foryou"><GiOverdrive style={{ fontSize: "25px", marginRight: "8px" }}/> ForYou</Link></li>
                  <li><Link to="/top"><FaRegStar style={{ fontSize: "25px", marginRight: "8px" }}/> Top</Link></li>
                </ul>
              </div>
            )}
          </li>

          <li className="menu-square">
            <AiFillCodeSandboxSquare size={50} />
            <span>Spaces</span>
          </li>

          <li className="menu-bell">
            <FaBell size={50} />
            <span>Notifications</span>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Sidebar;
