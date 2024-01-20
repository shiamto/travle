"use client"
import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { FreeMode, Navigation, Thumbs, Autoplay } from 'swiper';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';
import 'swiper/css/autoplay';

// Initialize SwiperCore modules
SwiperCore.use([FreeMode, Navigation, Thumbs, Autoplay]);

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
    const [thumbsSwiper, setThumbsSwiper] = useState(null);

    return (
        <div>
            <div className="container">
                <div className="flex flex-col items-center justify-center text-center py-12">
                    <h1 className="text-2xl text-primary">Discovery Extraordinary Places</h1>
                    <p>
                        Explore our handpicked destinations that promise to ignite your wanderlust. From exotic
                        corners of Vietnam to renowned landmarks, our collection includes diverse landscapes,
                        vibrant cultures, and hidden gems waiting to be uncovered.
                    </p>
                </div>

                <Swiper
                    style={{
                        "--swiper-navigation-color": "#fff",
                        width: "100%",
                        marginBottom: "12px",
                        objectFit: "cover",
                    }}

                    loop={true}
                    spaceBetween={10}
                    centeredSlides={false}
                    slidesPerView={2}
                    navigation={false}
                    breakpoints={{
                        768: {
                            height: "auto",
                            slidesPerView: 3,
                        },
                        1024: {
                            height: "500px",
                            slidesPerView: 4,
                        },
                        1280: {
                            height: "500px",
                            slidesPerView: 4,
                        },
                    }}
                    autoplay={{
                        delay: 2000,
                        disableOnInteraction: true,
                        pauseOnMouseEnter: true,
                        pauseOnHover: true,
                    }}
                    thumbs={{ swiper: thumbsSwiper }}
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
        </div>
    );
};

export default Spotlight;
