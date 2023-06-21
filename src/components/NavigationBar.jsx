import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faTimes, faBars} from "@fortawesome/free-solid-svg-icons";
import {
  faHome,
  faCircleInfo,
  faTools,
  faUserGroup,
  faCalendar,
  faComment
} from "@fortawesome/free-solid-svg-icons";

function NavigationBar() {
  const [navbar, setNavbar] = useState(false);
  const [activeLinkText, setActiveLink] = useState("");
  const [menuVisible, setMenuVisible] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  

  const changeBackground = () => {
    if (window.scrollY > 80) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", changeBackground);
    return () => {
      window.removeEventListener("scroll", changeBackground);
    };
  }, []);

  const location = useLocation();

  useEffect(() => {
    const currentPath = location.pathname;
    setActiveLink(currentPath);

    if (currentPath === "/") {
      setActiveLink("");
    } else if (currentPath === "/tentang") {
      setActiveLink("Tentang");
    } else if (currentPath === "/layanan") {
      setActiveLink("Layanan");
    } else if (currentPath === "/startup") {
      setActiveLink("Startup");
    } else if (currentPath === "/acara") {
      setActiveLink("Acara");
    } else if (currentPath === "/kontak") {
      setActiveLink("Kontak");
    }
  }, [location]);

  const toggleMenu = () => {
    setIsMobile(!isMobile);
  };

  const handleLinkClick = (path) => {
    setActiveLink(path);
    setIsMobile(false);
  };

  return (
    <nav
      className={`navbar ${navbar ? "active" : "#000"}`}
      style={{
        position: "sticky",
        color: navbar || activeLinkText === "" ? "#000" : "",
      }}
    >
      <div className="logo">
        <img
          src="http://binari.lskk.co.id/images/logo/logo.png"
          alt="Logo"
        />
      </div>
      <div className={isMobile ? "items-menu-mobile" : "items-menu"}>
        <ul
          className={`items-menu ${isMobile ? "visible" : ""}`}
          style={{ marginTop: navbar ? "navbar" : "0" }}
        >
          <li>
            <Link
              to="/"
              onClick={() => handleLinkClick("/")}
              className={activeLinkText === "" ? "active" : ""}
              style={{ color: activeLinkText === "" ? "#e20782" : "" }}
            >
              <FontAwesomeIcon icon={faHome} /> Beranda
            </Link>
          </li>
          <li>
            <Link
              to="/tentang"
              onClick={() => handleLinkClick("/tentang")}
              className={activeLinkText === "Tentang" ? "active" : ""}
              style={{ color: activeLinkText === "Tentang" ? "#e20782" : "" }}
            >
              <FontAwesomeIcon icon= {faCircleInfo} /> Tentang
            </Link>
          </li>
          <li className="first-menu">
            <Link
              to="/layanan"
              className={activeLinkText === "Layanan" ? "active" : ""}
              style={{ color: activeLinkText === "Layanan" ? "#e20782" : "" }}
            >
              <FontAwesomeIcon icon={faTools} /> Layanan
            </Link>
            <ul className="dropdown-content">
              <h7>
                <Link
                  to="/layanan"
                  className="text-dropdown"
                  style={{ color: "#000", fontWeight: "bold" }}
                >
                  Product Accelerator
                </Link>
              </h7>
              <h7>
                <Link
                  to="/layanan"
                  className="text-dropdown"
                  style={{ color: "#000", fontWeight: "bold" }}
                >
                  Founder Bootcamp
                </Link>
              </h7>
              <h7>
                <Link
                  to="/layanan"
                  className="text-dropdown"
                  style={{ color: "#000", fontWeight: "bold" }}
                >
                  Digital Marketing
                </Link>
              </h7>
              <h7>
                <Link
                  to="/layanan"
                  className="text-dropdown"
                  style={{ color: "#000", fontWeight: "bold" }}
                >
                  Finance & Tax
                </Link>
              </h7>
            </ul>
          </li>
          <li>
            <Link
              to="/startup"
              onClick={() => handleLinkClick("/startup")}
              className={activeLinkText === "Startup" ? "active" : ""}
              style={{ color: activeLinkText === "Startup" ? "#e20782" : "" }}
            >
              <FontAwesomeIcon icon={faUserGroup} /> Startup
            </Link>
          </li>
          <li>
            <Link
              to="/acara"
              onClick={() => handleLinkClick("/acara")}
              className={activeLinkText === "Acara" ? "active" : ""}
              style={{ color: activeLinkText === "Acara" ? "#e20782" : "" }}
            >
              <FontAwesomeIcon icon={faCalendar} /> Acara
            </Link>
          </li>
          <li>
            <Link
              to="/kontak"
              onClick={() => handleLinkClick("/kontak")}
              className={activeLinkText === "Kontak" ? "active" : ""}
              style={{ color: activeLinkText === "Kontak" ? "#e20782" : "" }}
            >
              <FontAwesomeIcon icon={faComment} /> Kontak
            </Link>
          </li>
        </ul>
      </div>
      <button className="mobile-menu-icon" onClick={toggleMenu}>
  {menuVisible ? (
    <FontAwesomeIcon icon={faTimes} className="times" />
  ) : (
    <FontAwesomeIcon icon={faBars} className="bars" />
  )}
</button>

    </nav>
  );
}

export default NavigationBar;
