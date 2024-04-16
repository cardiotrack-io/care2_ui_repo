import './LandingPage.css';
function LandingPage() {
    return (
        <div className="w-full h-screen flex flex-col justify-center items-center relative">
            <div className="absolute top-1/2 transform -translate-y-1/2 flex flex-col items-center -space-y-4">
                <div className="cardiotrack">
                    <p className='font-bold text-black slide-in-blurred-top'>Cardiotrack</p>
                </div>
                <div className="care-medical-test flex justify-center space-x-1">
                    <div className='care slide-in-blurred-left'>
                        <p className='text-black tracking-tighter'>Care</p>
                    </div>
                    <div className="medical-test flex items-center justify-center slide-in-elliptic-top-fwd">
                        <p className='text-navyBlue bg-paleBlue px-4 rounded-lg tracking-tighter'>Medical Home Visit</p>
                    </div>
                </div>
            </div>
            <div className="absolute bottom-0 left-0 w-full text-center pb-8">
                <div className="warning">
                    <p className='text-black'>*by clicking on “Get Started” you have agreed to our T&C which are going to be applied</p>
                </div>
                <div className="starting_button w-full ">
                    <button className='starting_button bg-darkGray w-11/12 lg:w-1/4'>
                        <p className='text-white'>Get Started</p>
                    </button>
                </div>
            </div>
        </div>
    );
}

export default LandingPage;
