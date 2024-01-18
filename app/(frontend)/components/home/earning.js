import React from 'react';
import { FaArrowRightLong } from "react-icons/fa6";

const Earning = () => {
    return (
        <div className='lg:py-24'>
            <h2 className='header_2 text-dark_text text-center pt-5'>Start Earning with Us</h2>
            <div className="container">
                <div className="flex flex-col md:flex-row justify-between">
                    <div>
                        <div className='md:max-w-[537px] md:max-h-[434px] mt-10'>
                            <img src='/bike.png' alt='earning' className='w-auto h-full object-fit' />
                        </div>

                        <h4 className='header_4 text-[#5A5A5A] mt-6'>Have a Bike?</h4>
                        <div className="flex gap-x-4 items-center">
                            <h3 className='header_4 text-dark_text mt-4 hover:text-primary cursor-pointer'>
                                Start Earning with Us
                            </h3>
                            <FaArrowRightLong size={20} className='text-[#212121] mt-4  hover:text-primary cursor-pointer' />
                        </div>
                        <hr className='border-[#212121] md:w-[300px] w-auto mt-4' />
                    </div>


                    <div>
                        <div className='md:max-w-[537px] md:max-h-[434px] md:mt-24'>
                            <img src='/car.png' alt='earning' className='w-auto h-full object-fit' />
                        </div>

                        <h4 className='header_4 text-[#5A5A5A] mt-6 md:text-right'>Have a Car?</h4>

                        <div className="flex gap-x-4 items-center flex-reverse md:justify-end">
                            <h3 className='header_4 text-dark_text mt-4'>
                                Start Earning with Us
                            </h3>
                            <FaArrowRightLong size={20} className='text-[#212121] mt-4' />
                        </div>

                        <div className='flex md:justify-end justify-start'>
                            <hr className='border-[#212121] md:w-[300px] w-auto self-end mt-4' />
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Earning;