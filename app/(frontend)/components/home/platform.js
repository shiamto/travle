import React from 'react';
import { LuCopy } from "react-icons/lu";
import ButtonHome from '../../../components/common/button_home';


const Platform = () => {
    return (
        <div>
            <div className="background_image">
                <div className='py-4 lg:py-24'>
                    <div className="container">
                        <div className='w-full flex flex-col items-center mt-24'>
                            <h2 className='header_2 md:text-white text-dark_text lg:mt-0 mt-20'>OneRide Ride share Platform</h2>
                            <p className=' mt-[12px] paragraph_5 text-xs lg:text-body_text text-dark_text text-justify'>Get your food delivered in less that’s as fast as it can get. Get your food delivered in less that’s as fast as it can get.</p>
                            <div className='mt-[24px] flex flex-col md:flex-row gap-6'>
                                <div className='lg:max-w-[200px] w-auto bg-white rounded-md p-3 border hover:border-primary hover:ease-in-out hover:shadow-lg transition-all duration-300 hover:-translate-y-1 cursor-pointer'>
                                    <div className="flex flex-row gap-x-4 items-center">
                                        <div className="">
                                            <img src="/icon.png" alt="playStore" className='object-contain h-8 w-8' />
                                        </div>
                                        <div className='button_paragraph text-dark_text'>About Ride</div>
                                    </div>
                                </div>

                                <div className='lg:max-w-[200px] w-auto bg-white rounded-md p-3 border hover:border-primary hover:ease-in-out hover:shadow-lg transition-all duration-300 hover:-translate-y-1 cursor-pointer'>
                                    <div className="flex flex-row gap-x-4 items-center">
                                        <div className="">
                                            <img src="/icon2.png" alt="playStore" className='object-contain w-8 h-8' />
                                        </div>
                                        <div className='button_paragraph text-dark_text'>About Rent</div>
                                    </div>
                                </div>

                                <div className='lg:max-w-[200px] w-auto bg-white rounded-md p-3 border hover:border-primary hover:ease-in-out hover:shadow-lg transition-all duration-300 hover:-translate-y-1 cursor-pointer'>
                                    <div className="flex flex-row gap-x-4 items-center">
                                        <div className="">
                                            <img src="/share.png" alt="playStore" className='object-contain w-8 h-8' />
                                        </div>
                                        <div className='button_paragraph text-dark_text'>About Share</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='flex flex-col lg:flex-row items-center justify-between '>
                            <div className='lg:mt-4'>
                                <div className='flex mt-8 gap-x-3'>
                                    <LuCopy color="#F79C39" size={24} className='mt-1' />
                                    <div className=''>
                                        <h4 className='header_4 lg:text-body_text text-dark_text'>Beat Traffic, Save Time</h4>
                                        <p className='mt-4 paragraph_3 md:max-w-[542px] lg:text-body_text text-dark_text'>
                                            Lorem ipsum dolor sit amet, consectetur adipiscing. Utelit tellus luctus nec ullamcorper pulvinar dapibus leo.</p>
                                    </div>
                                </div>
                                <div className='flex mt-8 gap-x-3'>
                                    <LuCopy color="#F79C39" size={24} className='mt-1' />
                                    <div className=''>
                                        <h4 className='header_4 lg:text-body_text text-dark_text'>Beat Traffic, Save Time</h4>
                                        <p className='mt-4 paragraph_3 md:max-w-[542px] lg:text-body_text text-dark_text'>
                                            Lorem ipsum dolor sit amet, consectetur adipiscing. Utelit tellus luctus nec ullamcorper pulvinar dapibus leo.</p>
                                    </div>
                                </div>
                                <div className='flex mt-8 gap-x-3'>
                                    <LuCopy color="#F79C39" size={24} className='mt-1' />
                                    <div className=''>
                                        <h4 className='header_4 lg:text-body_text text-dark_text'>Beat Traffic, Save Time</h4>
                                        <p className='mt-4 paragraph_3 md:max-w-[542px] lg:text-body_text text-dark_text'>
                                            Lorem ipsum dolor sit amet, consectetur adipiscing. Utelit tellus luctus nec ullamcorper pulvinar dapibus leo.</p>
                                    </div>
                                </div>

                                <ButtonHome className={'paragraph_4 font-bold  mt-10 rounded-lg'}  >
                                    Get Started
                                </ButtonHome>
                            </div>

                            <div className='lg:mt-32 mt-12'>
                                <img src="/platform.png" alt="" className='lg:w-[943px] w-auto lg:h-[490px] h-auto object-contain'></img>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Platform;