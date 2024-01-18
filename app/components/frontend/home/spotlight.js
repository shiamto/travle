import React from 'react';

const Spotlight = () => {
    return (
        <div>
            <div className="container">

                <div className="flex flex-col items-center justify-center text-center py-12">
                    <h1 className='text-2xl text-primary'>Discovery Extraordinary Places</h1>
                    <p>Explore our handpicked destinations that promise to ignite your wanderlust. From exotic corners of Vietnam to renowned landmarks, our collection includes diverse landscapes, vibrant cultures and hidden gems waiting to be uncovered.

                    </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    <div class="max-w-lg mx-auto">
                        <div class="bg-white shadow-md border border-gray-200 rounded-lg max-w-sm mb-5">
                            <a href="#">
                                <img class="rounded-t-lg" src="https://flowbite.com/docs/images/blog/image-1.jpg" alt="" />
                            </a>
                            <div class="p-5">
                                <a href="#">
                                    <h5 class="text-gray-900 font-bold text-2xl tracking-tight mb-2">Deals of the week</h5>
                                </a>
                                <p class="font-normal text-gray-700 mb-3">Limited Time Offer Package.</p>
                                <a class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-3 py-2 text-center inline-flex items-center" href="#">
                                    Read more
                                </a>
                            </div>
                        </div>
                    </div>

                    <div class="max-w-lg mx-auto">
                        <div class="bg-white shadow-md border border-gray-200 rounded-lg max-w-sm mb-5">
                            <a href="#">
                                <img class="rounded-t-lg" src="https://flowbite.com/docs/images/blog/image-1.jpg" alt="" />
                            </a>
                            <div class="p-5">
                                <a href="#">
                                    <h5 class="text-gray-900 font-bold text-2xl tracking-tight mb-2">Noteworthy technology acquisitions 2021</h5>
                                </a>
                                <p class="font-normal text-gray-700 mb-3">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
                                <a class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-3 py-2 text-center inline-flex items-center" href="#">
                                    Read more
                                </a>
                            </div>
                        </div>
                    </div>

                    <div class="max-w-lg mx-auto">
                        <div class="bg-white shadow-md border border-gray-200 rounded-lg max-w-sm mb-5">
                            <a href="#">
                                <img class="rounded-t-lg" src="https://flowbite.com/docs/images/blog/image-1.jpg" alt="" />
                            </a>
                            <div class="p-5">
                                <a href="#">
                                    <h5 class="text-gray-900 font-bold text-2xl tracking-tight mb-2">Noteworthy technology acquisitions 2021</h5>
                                </a>
                                <p class="font-normal text-gray-700 mb-3">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
                                <a class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-3 py-2 text-center inline-flex items-center" href="#">
                                    Read more
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Spotlight;