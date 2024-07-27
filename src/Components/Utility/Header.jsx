import React, { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import { faHeadset } from '@fortawesome/free-solid-svg-icons';
import './Header.css'; // Import the CSS file for styling

const Header = () => {
  const [isVisible, setIsVisible] = useState(true);

  const handleScroll = () => {
    if (window.scrollY > 30) {
      setIsVisible(false);
    } else {
      setIsVisible(true);
    }
  };

  useEffect(() => {
    window.scrollTo(0,0);
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className={`header-container ${isVisible ? 'visible' : 'hidden'}`}>
       <a href="https://wa.me/+918951217111" className="whatsapp-link" target="_blank" rel="noopener noreferrer">
        <FontAwesomeIcon icon={faHeadset} className="whatsapp-icon" />
        <span className="company-number">+918951217111</span>
      </a>
    </div>
  );
};

export default Header;
