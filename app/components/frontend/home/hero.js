'use client';
import React, { useEffect, useRef, useState } from 'react';

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

import { IoLocationOutline } from "react-icons/io5";
import { CiCalendar } from "react-icons/ci";

export const Hero = () => {
    const [open, setOpen] = useState(false)
    const ref = useRef()


    useEffect(() => {
        function handleClickOutside(event) {
            if (ref.current && !ref.current.contains(event.target)) {
                setOpen(false)
            }
        }

        document.addEventListener("click", handleClickOutside);
        return () => {
            document.removeEventListener("cli", handleClickOutside);
        };
    }, [ref, setOpen]);

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


            <div className="lg:-mt-10 md:mt-0 mt-20">
                <div className="w-full px-4 left-0 drop-shadow-lg text-white flex justify-center items-center flex-col">
                    <h1 className="lg:text-5xl mb-2 md:mb-3">Welcome to Wilh. Loesch Travel</h1>
                    <h1 className="text-lg font-bold uppercase text-[#FF0143]">A Journey Beyond The Ordinary!</h1>
                </div>
                    <div className='relative z-50 mt-1 md:mt-5 container'>
                        <div className='flex flex-col space-y-1 md:space-y-0 md:flex-row justify-center items-center md:bg-white bg-transparent p-2 md:p-3 rounded-xl md:rounded-full md:shadow-[0px_4px_20px_0px_rgba(0,0,0,0.3)]'>
                            <div className='flex items-center w-full group rounded-xl md:rounded-l-full md:border-none bg-transparent border hover:bg-slate-200 bg-slate-200 px-2 md:px-0'>
                                <IoLocationOutline className='text-lg md:text-3xl md:ml-2 md:mr-1 text-white group-hover:text-secondary' />
                                <input placeholder='Where?' className='w-full group-hover:text-black text-white  md:border-r-2 border-stone-300  py-1 md:py-4  group-hover:bg-slate-200 rounded-xl bg-transparent md:rounded-none outline-none' type="text" />
                            </div>
                            <div ref={ref} onClick={() => setOpen(!open)} className='flex items-center md:border-none w-full bg-transparent border hover:bg-slate-200 group md:pl-3 md:mr-2 bg-slate-200 rounded-xl md:rounded-none relative  px-2 md:px-0'>

                                <CiCalendar className='text-lg md:text-3xl mr-1 md:mr-2 text-white group-hover:text-secondary' />
                                <input className='w-full py-1 md:py-4 outline-none rounded-xl md:rounded-none bg-transparent group-hover:bg-slate-200  group-hover:text-black text-white ' type="text" placeholder='When?' />

                                {open && <div className='absolute md:-left-36 overflow-visible  rounded-lg md:top-[calc(100%-30px)] lg:top-[calc(100%+10px)] top-[calc(100%-80px)] -left-8 bg-white p-3 text-xs md:text-sm lg:text-base md:p-6 z-50'>
                                    <div className='grid grid-cols-3 gap-1 md:gap-4 w-80 md:w-[450px]'>
                                        <div className='md:space-y-3 space-y-1'>

                                            <h1 className='date'>January 2022</h1>
                                            <h1 className='date'>January 2022</h1>
                                            <h1 className='date'>January 2022</h1>
                                            <h1 className='date'>January 2022</h1>
                                        </div>
                                        <div className='md:space-y-3 space-y-1'>

                                            <h1 className='date'>January 2022</h1>
                                            <h1 className='date'>January 2022</h1>
                                            <h1 className='date'>January 2022</h1>
                                            <h1 className='date'>January 2022</h1>
                                        </div>
                                        <div className='md:space-y-3 space-y-1'>

                                            <h1 className='date'>January 2022</h1>
                                            <h1 className='date'>January 2022</h1>
                                            <h1 className='date'>January 2022</h1>
                                            <h1 className='date'>January 2022</h1>
                                        </div>
                                    </div>
                                </div>}
                            </div>
                            <button className='w-full md:w-fit py-1 md:py-4  px-16 bg-transparent border hover:bg-secondary md:bg-secondary text-white rounded-xl md:rounded-full'>Search</button>
                        </div>
                    </div>
            </div>

            <div className="w-1/2 ml-auto overflow-hidden absolute -right-5 px-4 lg:pt-[33rem] pt-[24rem] hidden md:block">
                <div className="absolute bottom-[23%] lg:bottom-1/4 flex justify-between">

                    <button onClick={prevSlider} className="flex items-center justify-center hover:bg-white/30 rounded-full w-6 h-6 md:w-8 md:h-8">
                        <svg viewBox="0 0 1024 1024" className="w-4 h-4 md:w-6 md:h-6 icon" xmlns="http://www.w3.org/2000/svg" fill="#000000"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"><path fill="#FF0143" d="M685.248 104.704a64 64 0 010 90.496L368.448 512l316.8 316.8a64 64 0 01-90.496 90.496L232.704 557.248a64 64 0 010-90.496l362.048-362.048a64 64 0 0190.496 0z"></path></g></svg>
                    </button>

                    <button onClick={nextSlider} className="flex items-center justify-center hover:bg-white/30 rounded-full w-6 h-6 md:w-8 md:h-8">
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
                            className={`lg:h-[180px] min-w-[160px] lg:min-w-[184px] ${currentSlider - 1 === inx ? 'scale-0' : 'scale-100 delay-500'
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
