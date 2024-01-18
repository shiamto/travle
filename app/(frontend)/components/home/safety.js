'use client';
import React from 'react';
// import Zoom from 'react-medium-image-zoom'
import 'react-medium-image-zoom/dist/styles.css'

import dynamic from 'next/dynamic';
const Zoom = dynamic(() => import('react-medium-image-zoom'), { ssr: false });


const Safety = () => {
    return (
        <div className='py-12'>
            <h2 className='header_2 text-dark_text text-center pt-5'>Ride Safely with Us</h2>
            <div className='mt-10'>
                <div className="container mx-auto grid grid-cols-3 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-3">
                    <Zoom>
                        <img src='/safety2.png' alt='safety1' className='lg:w-[440px] lg:h-[345px] h-full object-cover' />
                    </Zoom>
                    <Zoom>
                        <img src='/safety3.png' alt='safety1' className='lg:w-[440px] lg:h-[345px] h-full object-cover' />
                    </Zoom>
                    <Zoom>
                        <img src='/safety2.png' alt='safety1' className='lg:w-[440px] lg:h-[345px] h-full object-cover' />
                    </Zoom>
                </div>
                <div className="container mx-auto grid grid-cols-2 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 pt-8 lg:gap-6 gap-4 mt-3">
                    <Zoom>
                        <img src='/s4.png' alt='safety1' className='lg:w-[648px] w-auto lg:h-[385px] h-full mt-2' />
                    </Zoom>
                    <Zoom>
                        <img src='/s5.png' alt='safety1' className='lg:w-[648px] w-auto lg:h-[385px] h-full mt-2' />
                    </Zoom>
                </div>
            </div>
        </div>
    );
};

export default Safety;