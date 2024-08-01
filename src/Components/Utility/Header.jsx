import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeadset } from "@fortawesome/free-solid-svg-icons";
import "./Header.css"; // Import the CSS file for styling

const Header = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [isLandscape, setIsLandscape] = useState(false);

  const handleScroll = () => {
    setIsVisible(window.scrollY <= 30);
  };

  const isMobileDevice = () => {
    const userAgent = navigator.userAgent || navigator.vendor || window.opera;
    // Detect iOS devices
    if (/iPad|iPhone|iPod/.test(userAgent) && !window.MSStream) {
      return true;
    }
    // Detect Android devices
    if (/android/i.test(userAgent)) {
      return true;
    }
    // Detect other mobile devices
    return /Mobi|Android/i.test(userAgent);
  };

  const handleOrientationChange = () => {
    const isMobile = isMobileDevice();
    console.log(isMobile,window.innerHeight,window.innerWidth)
    if (isMobile && window.innerWidth < 768) { // Only block landscape mode for mobile devices with a width less than 768px
      setIsLandscape(window.innerHeight < window.innerWidth);
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
