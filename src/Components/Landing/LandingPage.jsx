import "./LandingPage.css";
import Header from "../Utility/Header";

function LandingPage({ setCurrentPage }) {
  function handleGetStarted() {
    setCurrentPage("login");
  }

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
            *by clicking on “Get Started” you have agreed to our T&C which are
            going to be applied
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
