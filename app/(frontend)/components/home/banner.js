import React from 'react';
import ButtonHome from '../../../components/common/button_home';

const Banner = () => {
    return (
        <div className="lg:pt-36">
            <div className='lg:mt-64 lg:block hidden'>
                <div className='pb-8'>
                    <div style={{ backgroundImage: `url(./bgBanner.png)` }} className="bg-[url('./bgBanner.png)] h-[300px] bg-cover md:h-[571px] relative">
                        <div className="flex flex-col justify-center items-start h-full container">
                            <div className='banner_img mt-96'>
                                <img src="./bannerImg.png" alt="" />
                            </div>

                            <div className="text-start mt-10">
                                <h1 className="header_3 text-white">The One Ride experience you love, tailored for your business needs</h1>
                                <p className='paragraph_3 text-white mt-4'>A system for organizing global travel and dining, and local delivery needs, for enterprises of all sizes.</p>

                                <ButtonHome className={'paragraph_4 font-bold  mt-10 rounded-lg'}  >
                                    Get Started
                                </ButtonHome>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Banner;