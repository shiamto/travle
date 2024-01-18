import Link from 'next/link';
import React from 'react';
import { FaDiscord, FaFacebookF, FaLinkedinIn } from 'react-icons/fa';
import { AiOutlineTwitter } from 'react-icons/ai';
import { GrInstagram } from 'react-icons/gr';

const Footer = () => {
    const currentYear = new Date().getFullYear();
    return (
        <section className="py-10 bg-[#212122] sm:pt-16 lg:pt-24">
            <h1 className='text-2xl text-white'>Footer</h1>
        </section>


    );
};

export default Footer;