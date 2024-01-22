"use client"
import Image from 'next/image';
import React, { useState } from 'react'
import { FaStar } from "react-icons/fa";
import { Swiper, SwiperSlide } from 'swiper/react';
import "swiper/css";
import "swiper/css/pagination";
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';

import { Autoplay } from 'swiper/modules';
import { IoLocationOutline } from "react-icons/io5";
import { CiCalendar } from "react-icons/ci";


const Reviews = () => {
    const [open, setOpen] = useState(false)
    return (
        <div className=' bg-slate-200'>
            <div className='container p-16'>
                <h1 className="text-3xl text-center font-semibold text-gray-800 pt-16 md:pt-0">Ture Reviews</h1>
                <div className='mt-12 pb-10'>
                    <Swiper
                        slidesPerView={1}
                        spaceBetween={24}
                        loop={true}
                        modules={[Autoplay]}
                        autoplay={{
                            delay: 1500,
                            disableOnInteraction: true,
                            pauseOnMouseEnter: true,
                            pauseOnMouseEnter: true,

                        }}
                    >

                        {
                            Array.from({ length: 4 }).map((_, index) => <SwiperSlide key={index}>
                                <div className='bg-white p-6 md:p-16 text-center space-y-5 relative rounded-lg'>
                                    <div className='flex justify-center'>
                                        <div className='flex items-center gap-3 text-orange-400 mx-auto '>
                                            <FaStar />
                                            <FaStar />
                                            <FaStar />
                                            <FaStar />
                                            <FaStar />
                                        </div>
                                    </div>
                                    <h1 className='text-2xl font-semibold'>UI components to enrich your web applications</h1>
                                    <p className='z-20 relative'> Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.  Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit. </p>
                                    <div className='rounded-lg bg-white w-28 h-28 rotate-45 absolute -bottom-1 left-[calc(50%-56px)]'></div>
                                </div>
                                <div className='flex justify-center mt-14'>
                                    <div>
                                        <div className='flex justify-center'><Image className='w-20 h-20' src="/loader.png" width={300} height={300} alt="image" /></div>
                                        <h1 className='text-2xl font-semibold text-center'> consectetur adipiscing</h1>
                                    </div>
                                </div>
                            </SwiperSlide>)
                        }

                    </Swiper>

                </div>
            </div>
            <div className='container'>
                <div className='flex flex-col space-y-3 md:space-y-0 md:flex-row justify-center items-center bg-white p-3 rounded-xl md:rounded-full shadow-[0px_4px_20px_0px_rgba(0,0,0,0.3)]'>
                    <div className='flex items-center w-full group rounded-xl md:rounded-l-full  md:border-r-2 border-stone-300 hover:bg-slate-200'>
                        <IoLocationOutline className='text-3xl ml-2 mr-1' />
                        <input placeholder='Where?' className='w-full py-4 group-hover:bg-slate-200 rounded-xl md:rounded-none outline-none' type="text" />
                    </div>
                    <div onClick={() => setOpen(!open)} className='flex items-center w-full hover:bg-slate-200 group pl-3 mr-2 rounded-xl md:rounded-none relative'>

                        <CiCalendar className='text-3xl mr-2' />
                        <input className='w-full py-4 outline-none rounded-xl md:rounded-none group-hover:bg-slate-200' type="text" placeholder='When?' />

                        {open && <div className='absolute left-0 rounded-lg top-[calc(100%+10px)] z-30 bg-white p-6'>
                            <div className='grid grid-cols-3 gap-4 w-60 md:w-96 lg:w-full'>
                                <div className='space-y-3'>

                                    <h1 className='date'>January 2022</h1>
                                    <h1 className='date'>January 2022</h1>
                                    <h1 className='date'>January 2022</h1>
                                    <h1 className='date'>January 2022</h1>
                                </div>
                                <div className='space-y-3'>

                                    <h1 className='date'>January 2022</h1>
                                    <h1 className='date'>January 2022</h1>
                                    <h1 className='date'>January 2022</h1>
                                    <h1 className='date'>January 2022</h1>
                                </div>
                                <div className='space-y-3'>

                                    <h1 className='date'>January 2022</h1>
                                    <h1 className='date'>January 2022</h1>
                                    <h1 className='date'>January 2022</h1>
                                    <h1 className='date'>January 2022</h1>
                                </div>
                            </div>
                        </div>}
                    </div>
                    <button className='py-4 px-16 bg-orange-600 text-white rounded-full'>Search</button>
                </div>
            </div>
        </div>
    )
}

export default Reviews