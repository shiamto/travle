"use client"
import React from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import { MdArrowBackIos, MdArrowForwardIos } from 'react-icons/md'
import "swiper/css";
import "swiper/css/pagination";
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';

import { Autoplay, FreeMode, Pagination, Navigation } from 'swiper/modules';

const destinations = [
    {
        _id: 1,
        title: 'Deals of the week',
        description: 'Limited Time Offer Packed with adventure and savings.',
        image: './tour1.jpg',
    },
    {
        _id: 2,
        title: 'Deals of the week',
        description: 'Limited Time Offer Packed with adventure and savings.',
        image: './tour2.jpg',
    },
    {
        _id: 3,
        title: 'Deals of the week',
        description: 'Limited Time Offer Packed with adventure and savings.',
        image: './tour3.jpg',
    },
    {
        _id: 4,
        title: 'Deals of the week',
        description: 'Limited Time Offer Packed with adventure and savings.',
        image: './tour2.jpg',
    },
    {
        _id: 5,
        title: 'Deals of the week',
        description: 'Limited Time Offer Packed with adventure and savings.',
        image: './tour1.jpg',
    },
    {
        _id: 6,
        title: 'Deals of the week',
        description: 'Limited Time Offer Packed with adventure and savings.',
        image: './tour3.jpg',
    },
    {
        _id: 7,
        title: 'Deals of the week',
        description: 'Limited Time Offer Packed with adventure and savings.',
        image: './tour2.jpg',
    },
];

const Spotlight = () => {

    return (
        <div>
            <div className="container">
                <div className="flex flex-col items-center justify-center text-center py-12">
                    <h2 className="text-2xl font-semibold text-gray-800">Discovery Extraordinary Places</h2>
                    <p className='text-base'>
                        Explore our handpicked destinations that promise to ignite your wanderlust. From exotic
                        corners of Vietnam to renowned landmarks, our collection includes diverse landscapes,
                        vibrant cultures, and hidden gems waiting to be uncovered.
                    </p>
                </div>
                <div className='relative'>
                    <div className='absolute -left-4 top-[calc(50%-14px)]  text-2xl z-20  swiper-button-next bg-slate-200 pl-3 pr-1 py-2 rounded-full swiper-button-prev'>
                        <MdArrowBackIos></MdArrowBackIos>
                    </div>
                    <div>
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
                                    slidesPerView: 3,
                                    spaceBetween: 20,
                                },
                                1024: {
                                    slidesPerView: 4,
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
                            {destinations?.map((val) => (
                                <SwiperSlide key={val?._id}>
                                    <div className="max-w-lg mx-auto">
                                        <div className="bg-white shadow-md border border-gray-200 rounded-lg max-w-sm mb-5">
                                            <a href="#">
                                                <img className="rounded-t-lg object-cover w-full bg-opacity-20" src={val?.image} alt="" />
                                            </a>
                                            <div className="p-5">
                                                <a href="#">
                                                    <h5 className="text-gray-900 font-bold text-2xl tracking-tight mb-2">
                                                        {val?.title}
                                                    </h5>
                                                </a>
                                                <p className="font-normal text-gray-700 mb-3 lg:block hidden">{val?.description}</p>
                                                <button className="text-sm mt-2 px-3 py-1 rounded-lg before:block before:absolute hover:before:bg-primary before:w-0 before:h-0 hover:before:h-20 hover:before:w-40 before:-bottom-2 before:-right-2 before:duration-500 before:rounded-xl before:-z-10 relative inline-block transform hover:text-white text-primary bg-transparent border-2 overflow-hidden border-primary duration-700">
                                                    View Details
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </SwiperSlide>
                            ))}
                        </Swiper>
                    </div>
                    <div className='absolute -right-4 top-[calc(50%-14px)] text-2xl z-20  swiper-button-next bg-slate-200 p-2 rounded-full'>
                    <MdArrowForwardIos></MdArrowForwardIos>
                        
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Spotlight;


