import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import { faHeadset } from "@fortawesome/free-solid-svg-icons";
import "./Header.css"; // Import the CSS file for styling

const Header = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [isLandscape, setIsLandscape] = useState(false);
  const [deviceType, setDeviceType] = useState("");

  const handleScroll = () => {
    if (window.scrollY > 30) {
      setIsVisible(false);
    } else {
      setIsVisible(true);
    }
  };

  function getDeviceType() {
    const userAgent = navigator.userAgent || navigator.vendor || window.opera;

    // Detect iOS devices
    if (/iPad|iPhone|iPod/.test(userAgent) && !window.MSStream) {
      return setDeviceType("iOS");
    }

    // Detect Android devices
    if (/android/i.test(userAgent)) {
      return setDeviceType("Android");
    }

    // Detect Windows devices
    if (/windows phone/i.test(userAgent)) {
      return setDeviceType("WindowsPhone");
    }

    // Detect Mobile Devices
    if (/Mobi|Android/i.test(userAgent)) {
      return setDeviceType("Mobile");
    }

    // Default to Desktop
    return setDeviceType("Desktop");
  }

  const handleOrientationChange = () => {
    getDeviceType();
    if (deviceType === "Mobile" || deviceType === "iOS" || deviceType === "Android") {
      if (window.innerHeight < window.innerWidth) {
        setIsLandscape(true);
      } else {
        setIsLandscape(false);
      }
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
      <div
        className={`landscape-message ${
          isLandscape && isMobile ? "" : "hidden"
        }`}
      >
        Please rotate your device to portrait mode.
      </div>
    </>
  );
};

export default Header;
