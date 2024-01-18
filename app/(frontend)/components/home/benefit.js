import React from 'react';

const Benefit = () => {
    return (
        <div className='lg:-mt-[30rem] -mt-[16rem] relative'>
            <div className='container mx-auto'>
                <h1 className='header_2 text-center lg:text-white text-dark_text mt-32 lg:mt-0'>One Ride Benefit</h1>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 pt-24 lg:gap-x-4 gap-16">
                    <div className="lg:max-w-[446px] w-auto h-auto md:h-[248px] rounded-lg shadow-lg border-2 bg-white z-20">
                        <div className="flex flex-col items-center justify-center p-4 relative">
                            <h3 className='text-dark_secondary header_3 text-center lg:max-w-[295px] mt-6'>Earnings</h3>
                            <p className='text-dark_text paragraph_3 text-center'>By driving with tere you can earn more.By driving with tere you can earn more.By driving with tere you can earn more.    </p>

                            <div className="absolute top-[-5rem] bg-white rounded-full shadow-md h-28 w-28 border !z-40">

                                <img src="/i1.png" alt='bike' className='mx-auto w-20 h-16 object-contain mt-6' />

                            </div>
                        </div>
                    </div>

                    <div className="lg:max-w-[446px] h-auto md:h-[248px] rounded-lg shadow-lg border-2 md:mt-0 mt-8 bg-white z-20">
                        <div className="flex flex-col items-center justify-center p-4 relative">
                            <h3 className='text-dark_secondary header_3 text-center lg:max-w-[295px] mt-6'>Flexible working
                                hours</h3>
                            <p className='text-dark_text paragraph_3 text-center'>By driving with tere you can earn more.By driving with tere you can earn more.By driving with tere you can earn more.    </p>
                            <div
                                className=" absolute top-[-5rem] bg-white rounded-full shadow-md h-28 w-28 border !z-40"
                            >
                                <img src="/i4.png" alt='bike' className='mx-auto w-20 h-16 object-contain mt-6 flex items-center justify-center' />
                            </div>
                        </div>

                    </div>

                    <div className="lg:max-w-[446px] h-auto lg:h-[248px] rounded-lg shadow-lg border-2 md:mt-0 mt-8 bg-white z-20">
                        <div className="flex flex-col items-center justify-center p-4 relative">
                            <h3 className='text-dark_secondary header_3 text-center lg:max-w-[295px] mt-6'>Customer support 24/7</h3>
                            <p className='text-dark_text paragraph_3 text-center'>By driving with tere you can earn more.By driving with tere you can earn more.By driving with tere you can earn more.    </p>
                            <div
                                className=" absolute top-[-5rem] bg-white rounded-full shadow-md h-28 w-28 border !z-40"
                            >
                                <img src="/i2.png" alt='bike' className='mx-auto w-20 h-16 object-contain mt-6 flex items-center justify-center' />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Benefit;