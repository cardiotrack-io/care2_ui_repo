import './LandingPage.css';
function LandingPage({setLandingState , setLoginState}) {
    function handleGetStarted() {
        setLandingState(true);
        setLoginState(true);
    }
    return (
        <div className="relative flex flex-col items-center justify-center w-full h-screen">
            <div className="absolute flex flex-col items-center -space-y-4 transform -translate-y-1/2 top-1/2">
                <div className="cardiotrack">
                    <p className='font-bold text-black puff-in-center'>Cardiotrack</p>
                </div>
                <div className="flex justify-center space-x-1 care-medical-test">
                    <div className='care puff-in-center'>
                        <p className='tracking-tighter text-black'>Care</p>
                    </div>
                    <div className="flex items-center justify-center medical-test flip-in-hor-bottom">
                        <p className='px-4 tracking-tighter rounded-lg text-navyBlue bg-paleBlue '>Medical Home Visit</p>
                    </div>
                </div>
            </div>
            <div className="absolute bottom-0 left-0 w-full pb-8 text-center">
                <div className="warning">
                    <p className='text-black'>*by clicking on “Get Started” you have agreed to our T&C which are going to be applied</p>
                </div>
                <div className="w-full starting_button scale-in-ver-top">
                    <button className='w-11/12 starting_button bg-darkGray lg:w-1/4'
                    onClick={(e) => {
                        handleGetStarted()
                    }}>
                        <p className='font-light text-white'>Get Started</p>
                    </button>
                </div>
            </div>
        </div>
    );
}

export default LandingPage;
