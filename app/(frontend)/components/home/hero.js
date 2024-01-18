import Image from 'next/image';
import React from 'react';

const Hero = () => {
    return (
        <div className=''>
            <div className="bg-[url('/BG1.png')] h-auto">
                <div className="px-24">
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 grid-cols-1 justify-items-center">
                        <div className='flex items-center lg:block hidden mt-24'>
                            <Image src="/man.png" width={297} height={770} alt="image" />
                        </div>

                        <div className='lg:w-[770px] w-auto flex flex-col items-center justify-center lg:mt-0 mt-8'>
                            <h2 className='header_2 text-white text-center'>Competitive rates, safety, and reliable on-time</h2>
                            <div className="flex lg:gap-x-8 gap-x-4 py-10 items-center">
                                <button className='w-auto py-3 lg:px-6 px-3 border-primary button_paragraph border rounded-md  text-primary hover:bg-primary hover:text-white whitespace-pre'>Download App</button>
                                <button className='w-auto py-3 lg:mt-0 lg:px-6 px-3 border-primary border button_paragraph rounded-md text-primary hover:text-white hover:bg-primary whitespace-pre'>Start Earning</button>
                            </div>
                        </div>

                        <div className='flex items-center lg:mt-36 mt-8 lg:block hidden'>
                            <Image src="/cc.png" width={643} height={770} alt="image" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Hero;