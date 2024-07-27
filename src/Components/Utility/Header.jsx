import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import { faHeadset } from "@fortawesome/free-solid-svg-icons";
import "./Header.css"; // Import the CSS file for styling

const Header = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [isLandscape, setIsLandscape] = useState(false);

  const handleScroll = () => {
    if (window.scrollY > 30) {
      setIsVisible(false);
    } else {
      setIsVisible(true);
    }
  };

  const handleOrientationChange = () => {
    if (window.innerHeight < window.innerWidth) {
      setIsLandscape(true);
    } else {
      setIsLandscape(false);
    }
  };

  useEffect(() => {
    window.scrollTo(0, 0);
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    handleOrientationChange(); // Initial check
    window.addEventListener("resize", handleOrientationChange);

    return () => {
      window.removeEventListener("resize", handleOrientationChange);
    };
  }, []);

  return (
    <>
      <div className={`header-container ${isVisible ? "visible" : "hidden"}`}>
        <a
          href="https://wa.me/+918951217111"
          className="whatsapp-link"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon icon={faHeadset} className="whatsapp-icon" />
          <span className="company-number">+918951217111</span>
        </a>
      </div>
      <div className={`landscape-message ${isLandscape ? "" : "hidden"}`}>
        Please rotate your device to portrait mode.
      </div>
    </>
  );
};

export default Header;
