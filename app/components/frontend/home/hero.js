'use client';
import React, { useState } from 'react';

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
    const [currentSlider, setCurrentSlider] = useState(0);

    const prevSlider = () =>
        setCurrentSlider((currentSlider) => (currentSlider === 0 ? sliders.length - 1 : currentSlider - 1));

    const nextSlider = () =>
        setCurrentSlider((currentSlider) => (currentSlider === sliders.length - 1 ? 0 : currentSlider + 1));

    return (
        <div className="w-full h-80 -mt-20 sm:h-96 md:h-[540px] lg:h-[640px] xl:h-[780px] flex flex-col xl:flex-row items-center justify-center gap-5 lg:gap-10 relative bg-cover before:absolute before:bg-black/50 before:inset-0 transform duration-1000 ease-linear overflow-hidden object-cover"
            style={{
                backgroundImage: `url(${currentSlider === 0 ? sliders[sliders.length - 1].img : sliders[currentSlider - 1].img})`,
            }}>


            <div className="lg:-mt-12">
                <div className="w-full z-50 px-4 left-0 drop-shadow-lg text-white rounded-lg flex justify-center items-center flex-col">
                    <h1 className="lg:text-5xl mb-3">Welcome to Wilh. Loesch Travel</h1>
                    <h1 className="text-lg font-bold uppercase text-[#FF0143]">A Journey Beyond The Ordinary!</h1>
                </div>
            </div>

            <div className="w-1/2 ml-auto overflow-hidden absolute -right-5 px-4 lg:pt-[36rem] pt-[14rem]">
                <div className="absolute bottom-1/4 flex justify-between">

                    <button onClick={prevSlider} className="flex items-center hover:bg-white/30 rounded-full w-6 h-6 md:w-8 md:h-8">
                        <svg viewBox="0 0 1024 1024" className="w-4 h-4 md:w-6 md:h-6 icon" xmlns="http://www.w3.org/2000/svg" fill="#000000"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"><path fill="#FF0143" d="M685.248 104.704a64 64 0 010 90.496L368.448 512l316.8 316.8a64 64 0 01-90.496 90.496L232.704 557.248a64 64 0 010-90.496l362.048-362.048a64 64 0 0190.496 0z"></path></g></svg>
                    </button>

                    <button onClick={nextSlider} className="flex items-center hover:bg-white/30 rounded-full w-6 h-6 md:w-8 md:h-8">
                        <svg viewBox="0 0 1024 1024" className="w-4 h-4 md:w-6 md:h-6 icon" xmlns="http://www.w3.org/2000/svg" fill="#000000" transform="rotate(180)"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"><path fill="#FF0143" d="M685.248 104.704a64 64 0 010 90.496L368.448 512l316.8 316.8a64 64 0 01-90.496 90.496L232.704 557.248a64 64 0 010-90.496l362.048-362.048a64 64 0 0190.496 0z"></path></g></svg>
                    </button>
                </div>
                <div
                    className="ease-linear duration-300 flex gap-4 items-center"
                    style={{ transform: `translateX(-${currentSlider * 20}%)` }}
                >
                    {/* sliders */}
                    {sliders.map((slide, inx) => (
                        <img
                            key={inx}
                            src={slide.img}
                            className={`lg:h-[180px] min-w-[90px] lg:min-w-[184px] ${currentSlider - 1 === inx ? 'scale-0' : 'scale-100 delay-500'
                                } drop-shadow-lg shadow-lg shadow-black bg-black/50 duration-300 rounded-lg`}
                            alt="Slider"
                        />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Hero;
