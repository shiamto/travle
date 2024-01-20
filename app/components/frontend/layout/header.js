'use client';
import Link from 'next/link';
import React, { useState } from 'react';

const FrontHeader = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const handleMenuToggle = () => {
        setIsMenuOpen((isMenuOpen) => !isMenuOpen);
    };

    return (
        <div className='container'>
            <header className=''>
                <div className="relative bg-transparent" style={{ zIndex: 999 }}>
                    <div className="relative">
                        <nav className="flex items-center justify-between h-16 lg:h-20">
                            <div className="flex-shrink-0">
                                <a href="#" title="" className="flex">
                                    <img className="w-auto h-8 lg:h-10" src="./logo.png" alt="" />
                                </a>
                            </div>
                            <button type="button" className="inline-flex p-2 text-primary transition-all duration-200 rounded-md lg:hidden focus:bg-gray-800 hover:bg-gray-800" onClick={() => handleMenuToggle()}>
                                <svg className="w-6 h-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16m-7 6h7" />
                                </svg>
                            </button>


                            <div className="hidden lg:flex lg:items-center lg:space-x-10">
                                <a href="#" title="" className="text-base font-medium text-white"> Features </a>

                                <a href="#" title="" className="text-base font-medium text-white"> Solutions </a>

                                <a href="#" title="" className="text-base font-medium text-white"> Resources </a>

                                <a href="#" title="" className="text-base font-medium text-white"> Pricing </a>
                            </div>

                            <a href="#" title="" className="items-center justify-center hidden px-6 py-3 text-base font-semibold text-black transition-all duration-200 bg-yellow-400 border border-transparent rounded-full lg:inline-flex hover:bg-yellow-500 focus:bg-yellow-500" role="button"> Join Now </a>
                        </nav>
                    </div>
                </div>

                <nav className="flex flex-col justify-between w-full max-w-xs min-h-screen px-4 py-10 bg-white sm:px-6 hidden">
                    <button
                        type="button"
                        // onClick={handleMenuToggle}
                        className="inline-flex p-2 text-primary transition-all duration-200 rounded-md lg:hidden focus:bg-gray-800 hover:bg-gray-800"
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="w-6 h-6"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    </button>

                    <div className="flex flex-col flex-grow h-full">
                        <nav className="flex flex-col flex-1 mt-10 space-y-2">
                            <a href="#" title="" className="flex w-full py-2 font-medium text-primary transition-all duration-200 focus:text-opacity-70"> Features mobile</a>

                            <a href="#" title="" className="flex w-full py-2 font-medium text-primary transition-all duration-200 focus:text-opacity-70"> Solutions </a>

                            <a href="#" title="" className="flex w-full py-2 font-medium text-primary transition-all duration-200 focus:text-opacity-70"> Resources </a>

                            <a href="#" title="" className="flex w-full py-2 font-medium text-primary transition-all duration-200 focus:text-opacity-70"> Pricing </a>
                        </nav>

                        <div className="flex flex-col items-start">
                            <a href="#" title="" className="inline-flex items-center justify-center w-auto px-6 py-3 mt-auto text-base font-semibold text-black transition-all duration-200 bg-yellow-400 border border-transparent rounded-full hover:bg-yellow-500 focus:bg-yellow-500" role="button"> Join Now </a>
                        </div>
                    </div>
                </nav>
            </header>

        </div>

    );
};

export default FrontHeader;