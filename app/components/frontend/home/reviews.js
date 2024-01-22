"use client"
import Image from 'next/image';
import React from 'react'
import { FaStar } from "react-icons/fa";
import { Swiper, SwiperSlide } from 'swiper/react';
import "swiper/css";
import "swiper/css/pagination";
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';

import { Autoplay } from 'swiper/modules';



const Reviews = () => {
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
            
        </div>
    )
}

export default Reviews