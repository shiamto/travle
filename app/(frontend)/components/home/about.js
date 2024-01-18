'use client'
import React from 'react';
import ButtonHome from '../../../components/common/button_home';
import { useRouter } from 'next/navigation';

const WeAre = () => {
    const router = useRouter()
    return (
        <div className='lg:py-10'>
            <div className="container mx-auto">
                <div className="flex flex-col-reverse lg:flex-row lg:justify-between items-center xl:gap-x-32 lg:gap-x-8">

                    <div className="flex flex-col lg:gap-0 gap-4 relative lg:w-[60%] w-full">
                        <div className="">
                            <img src="/img1.png" alt="" className='lg:w-[530px] md:w-[500px] w-auto rounded-md' />
                        </div>
                        <div className="md:absolute xl:left-[220px] lg:left-[120px] md:left-[300px] lg:mt-[10rem]">
                            <img src="/img2.png" alt="" className='lg:w-[530px] md:w-[500px] w-auto rounded-md' />
                        </div>
                    </div>

                    <div className="md:mt-24 py-5 lg:w-[40%]">
                        <div className="header_3 text-dark_text">
                            Who We Are ?
                        </div>
                        <div className="py-2 paragraph_1 text-[#888AA0] ">
                            Publish your eCommerce site quickly with our easy-to-use store builder— no coding required. Migrate your items from your point of sale system or turn your Instagram feed into a shopping site and start selling fast. Square Online works for all kinds of businesses—retail, restaurants, services without costly customization or add ons. Get orders to your customers in lots of ways by offering shipping, pickup, delivery, and even QR code ordering.
                        </div>
                        <div className="pt-4 paragraph_1 text-[#888AA0] ">
                            Expand your reach and sell more using seamless integrations with Google, Instagram, Facebook, and more. Built- in SEO tools make it easy for shoppers to find your business on search engines. Get access to the entire suite of integrated Square solutions to help you run your business.
                        </div>
                        <ButtonHome className={'paragraph_4 font-bold  mt-10 rounded-lg'} onClick={() => router.push('/about-us')} >
                            Read More
                        </ButtonHome>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default WeAre;