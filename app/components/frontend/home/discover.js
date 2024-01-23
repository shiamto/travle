"use client"
import React from 'react'
import { FaHeart } from "react-icons/fa";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';

import { Autoplay, FreeMode, Pagination, Navigation } from 'swiper/modules';

const discover =[
    {
        id: 1,
        title : "Phong Nha-Ke Bang National Park",
        image : "discover.jpg",
        points : [
            "Journey to the breathtaking Halong Bay.",
            "Journey to the breathtaking Halong Bay."
        ]
    },
    {
        id: 2,
        title : "Phong Nha-Ke Bang National Park",
        image : "discover.jpg",
        points : [
            "Journey to the breathtaking Halong Bay.",
            "Journey to the breathtaking Halong Bay."
        ]
    },
    {
        id: 3,
        title : "Phong Nha-Ke Bang National Park",
        image : "discover.jpg",
        points : [
            "Journey to the breathtaking Halong Bay.",
            "Journey to the breathtaking Halong Bay."
        ]
    },
    {
        id: 4,
        title : "Phong Nha-Ke Bang National Park",
        image : "discover.jpg",
        points : [
            "Journey to the breathtaking Halong Bay.",
            "Journey to the breathtaking Halong Bay."
        ]
    },
    {
        id: 4,
        title : "Phong Nha-Ke Bang National Park",
        image : "discover.jpg",
        points : [
            "Journey to the breathtaking Halong Bay.",
            "Journey to the breathtaking Halong Bay."
        ]
    }

];
const Discover = () => {
    return (
        <div className='py-20'>
            <div className="container mx-auto">
            <div className="mx-auto max-w-[1000px] text-center">
                 <h1 className='text-primary font-barlow text-[50px] font-semibold text-center'>Discover Extraordinary Places</h1>
                <p className='text-secondaryText mb-10' >Explore our handpicked destinations that promise to ignite your wanderlust. From exotic corners of Vietnam to renowned landmarks, our collection includes diverse landscapes, vibrant cultures and hidden gems waiting to be uncovered.</p>
            </div>
               
                <div className="relative">
                    <Swiper
                        slidesPerView={1}
                        spaceBetween={24}
                        freeMode={true}
                        breakpoints={{
                            640: {
                                slidesPerView: 1,
                                spaceBetween: 20,
                            },
                            768: {
                                slidesPerView: 2,
                                spaceBetween: 20,
                            },
                            1024: {
                                slidesPerView: 3,
                                spaceBetween: 24,
                            },
                        }}
                        loop={true}
                        modules={[Autoplay, FreeMode, Pagination, Navigation]}
                        autoplay={{
                            delay: 1500,
                            disableOnInteraction: true,
                            pauseOnMouseEnter: true,
                            pauseOnMouseEnter: true,

                        }}
                        navigation={{ nextEl: ".swiper-button-next", prevEl: ".swiper-button-prev" }}
                        className="mySwiper"
                    >
                        {discover?.map((val,i) => (
                            <SwiperSlide key={i}>
                                <div className="group border">
                                    <div className="w-full relative">
                                        <img src={val?.image} className='w-full  duration-500' alt="" />
                                        <div className="absolute top-5 right-5 bg-[rgba(0,0,0,0.5)] group-hover:bg-white group-hover:scale-105 rounded-full p-2 flex justify-center items-center ">
                                            <FaHeart className='text-white group-hover:text-secondary' />
                                        </div>
                                    </div>
                                    <div className="px-6 py-2">
                                        <h1 className='text-[25px] font-barlow leading-[34px] font-semibold text-primary'>{val?.title}</h1>
                                        <ul className=' list-disc ps-5'>
                                        {
                                            val?.points?.map((point,i) => (
                                                <li className='py-2 text-primary' key={i}><p className='text-secondaryText'>{point}</p></li>
                                            ))
                                        }
                                            
                                        </ul>
                                    </div>
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>

                </div>
            </div>
        </div>
    )
}

export default Discover