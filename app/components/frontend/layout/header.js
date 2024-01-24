'use client';
import { Dropdown, Menu } from 'antd';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import { AppstoreOutlined, MailOutlined, SettingOutlined } from '@ant-design/icons';

import { GoChevronDown } from "react-icons/go";
import { FaFacebook, FaInstagram, FaLinkedin, FaPhone, FaRegEnvelope, FaXTwitter } from 'react-icons/fa6';


function getItem(label, key, icon, children, type) {
    return {
        key,
        icon,
        children,
        label,
        type,
    };
}


const FrontHeader = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isNavbarFixed, setIsNavbarFixed] = useState(false);
    const [isGroupTour, setIsGroupTour] = useState(false);

    const handleMenuToggle = () => {
        setIsMenuOpen((isMenuOpen) => !isMenuOpen);
    };

    useEffect(() => {
        const handleScroll = () => {
            const scrollY = window.scrollY || document.documentElement.scrollTop;
            setIsNavbarFixed(scrollY > 0);
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const items = [
        {
            key: 'sub1',
            label: <span className='text-primary'>International</span>,
            children: [
                { key: '1', label: 'Item 1', icon: null, children: [{ key: '1', label: 'Option 1' }, { key: '2', label: 'Option 2' }], type: 'group' },
                { key: '2', label: 'Item 2', icon: null, children: [{ key: '3', label: 'Option 3' }, { key: '4', label: 'Option 4' }], type: 'group' },
            ],
        },
        {
            key: 'sub2',
            label: <span className="text-primary">Domestic</span>,
            children: [
                { key: '5', label: 'Option 5', icon: null },
                { key: '6', label: 'Option 6', icon: null },
            ],
        },
    ];

    const onClick = (e) => {
        console.log('click', e);
    };

    const handleTour = () => {
        setIsGroupTour((isGroupTour) => !isGroupTour);
    }


    return (
        <div className="relative">
            <div className="md:flex hidden justify-between bg-primary py-2 px-20 ">
                <div className="flex items-center text-sm">
                    <div className=" text-gray-300 cursor-pointer hover:text-white duration-300 flex items-center">
                        <FaRegEnvelope className='mr-2' />
                        <p> travel@wilhloesch.com</p>
                    </div>
                    <div className=" text-gray-300 cursor-pointer hover:text-white duration-300 flex items-center ml-5">
                        <FaPhone className='mr-2' />
                        <p>+84 584072398</p>
                    </div>
                </div>
                <div className="text-gray-300 ">
                    <ul className='flex space-x-4'>
                        <li><Link href={"/"} className='hover:text-[#ffa801] duration-300'><FaFacebook/></Link></li>
                        <li><Link href={"/"} className='hover:text-[#ffa801] duration-300'><FaXTwitter/></Link></li>
                        <li><Link href={"/"} className='hover:text-[#ffa801] duration-300'><FaInstagram/></Link></li>
                        <li><Link href={"/"} className='hover:text-[#ffa801] duration-300'><FaLinkedin/></Link></li>
                    </ul>
                </div>
            </div>
            <header className='md:px-20 px-5 absolute md:top-10 top-0 left-0 right-0'>
                <div className="relative bg-transparent" style={{ zIndex: 999 }}>
                    <div className="relative">
                        <nav className={` items-center justify-between h-16 lg:h-20 ${isMenuOpen ? "fixed" : "flex"} `}>
                            <div className="flex-shrink-0">
                                <Link href="/" title="" className="flex">
                                    <img className="w-auto h-8 lg:h-10" src="../logo.png" alt="" />
                                </Link>
                            </div>
                            <button
                                type="button"
                                className="inline-flex p-2 text-white transition-all duration-200 rounded-md lg:hidden focus:bg-gray-800 hover:bg-gray-800"
                                onClick={() => handleMenuToggle()}
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="w-6 h-6"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
                                </svg>
                            </button>



                            <div className="hidden lg:flex lg:items-center lg:space-x-10 font-barlow">

                                <Link href="/" title="" className="text-lg font-medium text-white"> Home </Link>
                                <Link href="/about" title="" className="text-lg font-medium text-white"> About </Link>
                                <Link href="/tours" title="" className="text-lg font-medium text-white">Vietnam Tours</Link>
                                <Link href="/gallery" title="" className="text-lg font-medium text-white"> Gallery </Link>
                                <Link href="/contact" title="" className="text-lg font-medium text-white"> Contact </Link>
                            </div>

                            <a href="#" title="" className="items-center justify-center hidden px-4 py-2 text-base font-semibold text-primary transition-all duration-600 bg-[#ffa801] hover:bg-[#007bff] border border-transparent  lg:inline-flex hover:text-white duration-300" role="button"> Book Now </a>
                        </nav>
                    </div>
                </div>

                {isMenuOpen && (
                    <nav className="flex fixed left-0 top-0 flex-col justify-between !w-full h-screen bg-primary sm:px-6"
                        style={{
                            zIndex: 998,
                        }}
                    >
                        <div className='container ' >
                            <div className="flex items-center justify-between mt-5">
                                <Link href="/" title="" className="flex">
                                    <img className="w-auto h-8 lg:h-10" src="./logo.png" alt="" />
                                </Link>

                                <button
                                    type="button"
                                    className="inline-flex p-2 text-white transition-all duration-200 rounded-md lg:hidden focus:bg-gray-800 hover:bg-gray-800"
                                    onClick={() => handleMenuToggle()}
                                >
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="w-6 h-6"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                    >
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                                    </svg>
                                </button>
                            </div>
                        </div>
                        <div className="flex flex-col flex-grow h-full container">
                            <nav className="flex flex-col mt-10 space-y-2">
                                <Link href="/" onClick={() => { setIsMenuOpen(false) }}
                                    title="" className="flex w-full py-2 font-medium text-white transition-all duration-200 focus:text-opacity-70">Home</Link>

                                <Link href="/about" title="" className="flex w-full py-2 font-medium text-white transition-all duration-200 focus:text-opacity-70"> About </Link>

                                <Link href="/tours" title="" className="flex w-full py-2 font-medium text-white transition-all duration-200 focus:text-opacity-70">Vietnam tours</Link>


                                <Link href="/gallery" title="" className="flex w-full py-2 font-medium text-white transition-all duration-200 focus:text-opacity-70"> Gallery </Link>

                                <Link href="/contact" title="" className="flex w-full py-2 font-medium text-white transition-all duration-200 focus:text-opacity-70"> Contact </Link>
                            </nav>

                            <div className="flex flex-col items-start mt-6">
                                <a href="#" title="" className="inline-flex items-center justify-center w-full px-6 py-3 mt-auto text-base font-semibold text-black transition-all duration-200 bg-[#FF0143] border border-transparent rounded-full hover:bg-yellow-500 focus:bg-[#413438]" role="button"> Book Now </a>
                            </div>
                        </div>
                    </nav>
                )}
            </header>

        </div>

    );
};

export default FrontHeader;