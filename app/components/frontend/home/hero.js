import React from 'react'
import { Carousel } from 'antd';

// import { Carousel } from 'react-responsive-carousel';
// import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader

const sliders = [
    {
        _id: 1,
        img: './s1.jpg'
    },
    {
        _id: 2,
        img: './s2.jpg'
    },
    {
        _id: 3,
        img: './s3.jpg'
    },
    {
        _id: 4,
        img: './s4.jpg'
    },
    {
        _id: 5,
        img: './s6.jpg'
    },
];


export const Hero = () => {

    return (
        <div className="relative">
            <div className="relative min-h-[500px]">
                <img src="/banner-2.jpeg" className='w-full  object-center' alt="" />
                <div className="absolute top-0 left-0 right-0 bottom-0 flex justify-center items-center text-center hero-overlay">
                    <div className="relative">
                        <h1 className='text-secondary font-satisfy lg:text-[130px] md:text-[80px] text-[40px] absolute -top-20 right-0 left-0'>Step into</h1>
                        <h1 className='lg:text-[150px] md:text-[100px] text-[60px] font-barlow text-white font-extrabold'>MAGNIFICENCE</h1>
                    </div>
                </div>
                <div className="container absolute left-0 right-0  -bottom-20 p-6 bg-white shadow-sm text-center">
                    <div className="">
                        <h1 className='text-[40px] text-primary font-semibold font-barlow'>Welcome to Wilh. Loesch Travel - A Journey Beyond The Ordinary!</h1>
                        <p className='text-secondaryText mt-2'>Embark on a journey of discovery with Wilh. Loesch Travel. As passionate explorers, we're committed to crafting bespoke travel experiences that transcend the ordinary. Whether you seek cultural immersion, thrilling adventures or serene escapes, we're here to make your travel dreams a reality.</p>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Hero;
