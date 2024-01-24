"use client"
import React from 'react';

import 'react-medium-image-zoom/dist/styles.css'
import dynamic from 'next/dynamic';
import { FaEnvelope, FaInbox, FaMessage, FaPhone, FaRegEnvelope } from 'react-icons/fa6';

const Zoom = dynamic(() => import('react-medium-image-zoom'), { ssr: false });


const FrontFooter = () => {
    const currentYear = new Date().getFullYear();

    return (
        <>
            <section className=" bg-[url('/footerbg.png')] bg-no-repeat bg-cover ">
            <hr className=' border-t border-[0px] bg-gray-500'/>
                <div className="bg-[rgba(255,255,255,0.9)] text-secondaryText py-20">
                    <div className="mx-auto container">
                        <div className="grid grid-cols-2 md:col-span-3 lg:grid-cols-6 gap-y-16 gap-x-12">
                            <div className="col-span-2 md:col-span-3 lg:col-span-2 lg:pr-8">
                                <img className="w-auto h-9" src="/logo-dark.png" alt="" />
                                <p className="text-base leading-relaxed  my-7">Embark on a discovery journey with Wilh. Loesch Travel, crafting bespoke experiences that transcend the ordinary.</p>
                                <div className=" text-secondary cursor-pointer hover:text-primary duration-300 flex items-center">
                                    <FaRegEnvelope className='mr-2'/>
                                    <p> travel@wilhloesch.com</p>
                                </div>
                                <div className=" text-secondary cursor-pointer hover:text-primary duration-300 flex items-center mt-2">
                                    <FaPhone className='mr-2'/>
                                    <p>+84 584072398</p>
                                </div>
                            </div>
                            <div>
                                <p className="text-sm font-semibold tracking-widest text-gray-400 uppercase">Company</p>

                               
                                <ul className="mt-6 space-y-4">
                                    <li>
                                        <a href="#" title="" className="flex text-base transition-all duration-200 hover:text-secondary focus:text-secondary"> Terms & Condition </a>
                                    </li>

                                    <li>
                                        <a href="#" title="" className="flex text-base transition-all duration-200 hover:text-secondary focus:text-secondary"> Privacy Policy </a>
                                    </li>

                                    <li>
                                        <a href="#" title="" className="flex text-base transition-all duration-200 hover:text-secondary focus:text-secondary"> Terms & Conditions </a>
                                    </li>

                                    <li>
                                        <a href="#" title="" className="flex text-base transition-all duration-200 hover:text-secondary focus:text-secondary"> Privacy Policy </a>
                                    </li>
                                </ul>
                            </div>
                            <div>
                                <p className="text-sm font-semibold tracking-widest text-gray-400 uppercase">Help</p>

                                <ul className="mt-6 space-y-4">
                                    <li>
                                        <a href="#" title="" className="flex text-base transition-all duration-200 hover:text-secondary focus:text-secondary"> Home </a>
                                    </li>
                                    <li>
                                        <a href="#" title="" className="flex text-base transition-all duration-200 hover:text-secondary focus:text-secondary"> About </a>
                                    </li>

                                    <li>
                                        <a href="#" title="" className="flex text-base transition-all duration-200 hover:text-secondary focus:text-secondary"> Contact </a>
                                    </li>

                                    <li>
                                        <a href="#" title="" className="flex text-base transition-all duration-200 hover:text-secondary focus:text-secondary"> Gallery </a>
                                    </li>

                                </ul>
                            </div>
                            <div className="col-span-2 md:col-span-1 lg:col-span-2 lg:pl-8">
                                <p className="text-sm font-semibold tracking-widest text-gray-400 uppercase">Gallery</p>

                                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4 mt-4">

                                    <div className="group cursor-pointer relative">
                                        <Zoom>
                                            <img
                                                src="https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NzEyNjZ8MHwxfHNlYXJjaHw1fHxuYXR1cmV8ZW58MHwwfHx8MTY5NDA5OTcyOXww&ixlib=rb-4.0.3&q=80&w=1080"
                                                alt="Image 1"
                                                className="w-auto h-20 object-cover rounded-lg transition-transform transform scale-100 group-hover:scale-105"
                                            />
                                        </Zoom>

                                    </div>

                                    <div className="group cursor-pointer relative">
                                        <Zoom>
                                            <img
                                                src="https://images.unsplash.com/photo-1441974231531-c6227db76b6e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NzEyNjZ8MHwxfHNlYXJjaHw5fHxuYXR1cmV8ZW58MHwwfHx8MTY5NDA5OTcyOXww&ixlib=rb-4.0.3&q=80&w=1080"
                                                alt="Image 1"
                                                className="w-auto h-20 object-cover rounded-lg transition-transform transform scale-100 group-hover:scale-105"
                                            />
                                        </Zoom>
                                    </div>

                                    <div className="group cursor-pointer relative">
                                        <Zoom>
                                            <img
                                                src="https://images.unsplash.com/photo-1501854140801-50d01698950b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NzEyNjZ8MHwxfHNlYXJjaHwxMHx8bmF0dXJlfGVufDB8MHx8fDE2OTQwOTk3Mjl8MA&ixlib=rb-4.0.3&q=80&w=1080"
                                                alt="Image 1"
                                                className="w-auto h-20 object-cover rounded-lg transition-transform transform scale-100 group-hover:scale-105"
                                            />
                                        </Zoom>
                                    </div>

                                    <div className="group cursor-pointer relative">
                                        <Zoom>
                                            <img
                                                src="https://images.unsplash.com/photo-1469474968028-56623f02e42e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NzEyNjZ8MHwxfHNlYXJjaHwyfHxuYXR1cmV8ZW58MHwwfHx8MTY5NDA5OTcyOXww&ixlib=rb-4.0.3&q=80&w=1080"
                                                alt="Image 1"
                                                className="w-auto h-20 object-cover rounded-lg transition-transform transform scale-100 group-hover:scale-105"
                                            />
                                        </Zoom>
                                    </div>

                                    <div className="group cursor-pointer relative">
                                        <Zoom>
                                            <img
                                                src="https://images.unsplash.com/photo-1505765050516-f72dcac9c60e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NzEyNjZ8MHwxfHNlYXJjaHwxNHx8bmF0dXJlfGVufDB8MHx8fDE2OTQwOTk3Mjl8MA&ixlib=rb-4.0.3&q=80&w=1080"
                                                alt="Image 1"
                                                className="w-auto h-20 object-cover rounded-lg transition-transform transform scale-100 group-hover:scale-105"
                                            />
                                        </Zoom>
                                    </div>

                                    <div className="group cursor-pointer relative">
                                        <Zoom>
                                            <img
                                                src="https://images.unsplash.com/photo-1475924156734-496f6cac6ec1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NzEyNjZ8MHwxfHNlYXJjaHwxMXx8bmF0dXJlfGVufDB8MHx8fDE2OTQwOTk3Mjl8MA&ixlib=rb-4.0.3&q=80&w=1080"
                                                alt="Image 1"
                                                className="w-auto h-20 object-cover rounded-lg transition-transform transform scale-100 group-hover:scale-105"
                                            />
                                        </Zoom>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className='bg-[#ECEEEF]'>
                <hr className=" border-gray-200" />
                <div className="flex justify-between items-center container">
                    <div className="">
                        <p className="text-sm text-center  my-10">© Copyright {currentYear}, All Rights Reserved by Dahlia</p>
                    </div>
                    <div className="">
                        <ul className="flex items-center space-x-3 mt-9">
                            <li>
                                <a href="#" title="" className="flex items-center justify-center text-primary transition-all duration-200 bg-white rounded-full w-10 h-10 hover:bg-[#007bff] hover:text-white">
                                    <svg className="w-4 h-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                                        <path
                                            d="M19.633 7.997c.013.175.013.349.013.523 0 5.325-4.053 11.461-11.46 11.461-2.282 0-4.402-.661-6.186-1.809.324.037.636.05.973.05a8.07 8.07 0 0 0 5.001-1.721 4.036 4.036 0 0 1-3.767-2.793c.249.037.499.062.761.062.361 0 .724-.05 1.061-.137a4.027 4.027 0 0 1-3.23-3.953v-.05c.537.299 1.16.486 1.82.511a4.022 4.022 0 0 1-1.796-3.354c0-.748.199-1.434.548-2.032a11.457 11.457 0 0 0 8.306 4.215c-.062-.3-.1-.611-.1-.923a4.026 4.026 0 0 1 4.028-4.028c1.16 0 2.207.486 2.943 1.272a7.957 7.957 0 0 0 2.556-.973 4.02 4.02 0 0 1-1.771 2.22 8.073 8.073 0 0 0 2.319-.624 8.645 8.645 0 0 1-2.019 2.083z"
                                        ></path>
                                    </svg>
                                </a>
                            </li>

                            <li>
                                <a href="#" title="" className="flex items-center justify-center text-primary transition-all duration-200 bg-white rounded-full w-10 h-10 hover:bg-[#007bff] hover:text-white">
                                    <svg className="w-4 h-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                                        <path d="M13.397 20.997v-8.196h2.765l.411-3.209h-3.176V7.548c0-.926.258-1.56 1.587-1.56h1.684V3.127A22.336 22.336 0 0 0 14.201 3c-2.444 0-4.122 1.492-4.122 4.231v2.355H7.332v3.209h2.753v8.202h3.312z"></path>
                                    </svg>
                                </a>
                            </li>

                            <li>
                                <a href="#" title="" className="flex items-center justify-center text-primary transition-all duration-200 bg-white rounded-full w-10 h-10 hover:bg-[#007bff] hover:text-white">
                                    <svg className="w-4 h-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                                        <path d="M11.999 7.377a4.623 4.623 0 1 0 0 9.248 4.623 4.623 0 0 0 0-9.248zm0 7.627a3.004 3.004 0 1 1 0-6.008 3.004 3.004 0 0 1 0 6.008z"></path>
                                        <circle cx="16.806" cy="7.207" r="1.078"></circle>
                                        <path
                                            d="M20.533 6.111A4.605 4.605 0 0 0 17.9 3.479a6.606 6.606 0 0 0-2.186-.42c-.963-.042-1.268-.054-3.71-.054s-2.755 0-3.71.054a6.554 6.554 0 0 0-2.184.42 4.6 4.6 0 0 0-2.633 2.632 6.585 6.585 0 0 0-.419 2.186c-.043.962-.056 1.267-.056 3.71 0 2.442 0 2.753.056 3.71.015.748.156 1.486.419 2.187a4.61 4.61 0 0 0 2.634 2.632 6.584 6.584 0 0 0 2.185.45c.963.042 1.268.055 3.71.055s2.755 0 3.71-.055a6.615 6.615 0 0 0 2.186-.419 4.613 4.613 0 0 0 2.633-2.633c.263-.7.404-1.438.419-2.186.043-.962.056-1.267.056-3.71s0-2.753-.056-3.71a6.581 6.581 0 0 0-.421-2.217zm-1.218 9.532a5.043 5.043 0 0 1-.311 1.688 2.987 2.987 0 0 1-1.712 1.711 4.985 4.985 0 0 1-1.67.311c-.95.044-1.218.055-3.654.055-2.438 0-2.687 0-3.655-.055a4.96 4.96 0 0 1-1.669-.311 2.985 2.985 0 0 1-1.719-1.711 5.08 5.08 0 0 1-.311-1.669c-.043-.95-.053-1.218-.053-3.654 0-2.437 0-2.686.053-3.655a5.038 5.038 0 0 1 .311-1.687c.305-.789.93-1.41 1.719-1.712a5.01 5.01 0 0 1 1.669-.311c.951-.043 1.218-.055 3.655-.055s2.687 0 3.654.055a4.96 4.96 0 0 1 1.67.311 2.991 2.991 0 0 1 1.712 1.712 5.08 5.08 0 0 1 .311 1.669c.043.951.054 1.218.054 3.655 0 2.436 0 2.698-.043 3.654h-.011z"
                                        ></path>
                                    </svg>
                                </a>
                            </li>

                            <li>
                                <a href="#" title="" className="flex items-center justify-center text-primary transition-all duration-200 bg-white rounded-full w-10 h-10 hover:bg-[#007bff] hover:text-white">
                                    <svg className="w-4 h-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                                        <path
                                            fillRule="evenodd"
                                            clipRule="evenodd"
                                            d="M12.026 2c-5.509 0-9.974 4.465-9.974 9.974 0 4.406 2.857 8.145 6.821 9.465.499.09.679-.217.679-.481 0-.237-.008-.865-.011-1.696-2.775.602-3.361-1.338-3.361-1.338-.452-1.152-1.107-1.459-1.107-1.459-.905-.619.069-.605.069-.605 1.002.07 1.527 1.028 1.527 1.028.89 1.524 2.336 1.084 2.902.829.091-.645.351-1.085.635-1.334-2.214-.251-4.542-1.107-4.542-4.93 0-1.087.389-1.979 1.024-2.675-.101-.253-.446-1.268.099-2.64 0 0 .837-.269 2.742 1.021a9.582 9.582 0 0 1 2.496-.336 9.554 9.554 0 0 1 2.496.336c1.906-1.291 2.742-1.021 2.742-1.021.545 1.372.203 2.387.099 2.64.64.696 1.024 1.587 1.024 2.675 0 3.833-2.33 4.675-4.552 4.922.355.308.675.916.675 1.846 0 1.334-.012 2.41-.012 2.737 0 .267.178.577.687.479C19.146 20.115 22 16.379 22 11.974 22 6.465 17.535 2 12.026 2z"
                                        ></path>
                                    </svg>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>


            </section>
        </>

    );
};

export default FrontFooter;