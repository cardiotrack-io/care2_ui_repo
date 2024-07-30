import "./LandingPage.css";
import Header from "../Utility/Header";
import React, { useEffect } from 'react';

function LandingPage({ setCurrentPage }) {
  function handleGetStarted() {
    setCurrentPage("login");
  }

  useEffect(() => {
    window.scrollTo(0, 0); // Scroll to top on component mount
  }, []);

  return (
    <div className="relative flex flex-col items-center justify-center w-full h-screen overflow-hidden">
      <Header />
      <div 
        className="flip-in-hor-top absolute flex flex-col items-center -space-y-4 transform -translate-y-1/2 top-1/3" 
        style={{ top: 'calc(33.333% - 50px)' }}
      >
        <div className="cardiotrack">
          <p className="font-bold text-black">Cardiotrack</p>
        </div>
        <div className="flex justify-center space-x-1 care-medical-test">
          <div className="care ">
            <p className="tracking-tighter text-black">Care</p>
          </div>
          <div className="flex items-center justify-center medical-test ">
            <p className="px-4 tracking-tighter rounded-lg text-navyBlue bg-paleBlue ">
              Medical Home Visit
            </p>
          </div>
        </div>
      </div>
      <div 
        className="absolute bottom-10 left-0 w-full pb-8 text-center" 
        style={{ bottom: 'calc(2.5rem + 50px)' }}
      >
        <div className="warning m-1">
          <p className="text-black">
            *By clicking on “Get Started” you agree to our T&C  
            <a href="https://www.dropbox.com/scl/fi/ng4sqm70dvubja274f5yr/ct-Terms-Conditions.pdf?rlkey=v4v0irjr4aqr9d5kzrwp2jva3&e=1&st=tryaa605&dl=0"
          target="_blank" className="text-blue-500"
        >*** click here ***.</a> 
          </p>
        </div>
        <div className="w-full starting_button scale-in-ver-top">
          <button
            className="w-11/12 starting_button bg-darkGray lg:w-1/4"
            onClick={handleGetStarted}
          >
            <p className="font-light text-white">Get Started</p>
          </button>
        </div>
      </div>
    </div>
  );
}

export default LandingPage;
