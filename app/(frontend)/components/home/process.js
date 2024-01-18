import React from 'react';

const Process = () => {
    return (
        <div className='lg:py-24'>
            <div className="container !mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-5 gap-y-5 lg:mt-0 mt-12">
                    <div className="flex flex-col items-center justify-center rounded-lg hover:shadow-primary hover:shadow-sm cursor-pointer shadow-md px-7 py-6">
                        <img src="/cloud.png" alt="" className='w-[100px] h-[100px] object-contain' />
                        <div className="paragraph_2 text-center">Download App</div>
                    </div>
                    <div className="mt-20 md:block hidden">
                        <img src="/arrow1.png" alt="" />
                    </div>
                    <div className="flex flex-col items-center justify-center rounded-lg hover:shadow-primary hover:shadow-sm cursor-pointer shadow-md px-7 py-6">
                        <img src="/userlist.png" alt="" className='w-[100px] h-[100px] object-contain' />
                        <div className="paragraph_2 text-center">Complete Registration</div>
                    </div>
                    <div className="md:block hidden">
                        <img src="/arrow.png" alt="" />
                    </div>
                    <div className="flex flex-col items-center justify-center rounded-lg hover:shadow-primary hover:shadow-sm cursor-pointer shadow-md px-7 py-6">
                        <img src="/hand.png" alt="" className='w-[100px] h-[100px] object-contain' />
                        <div className="paragraph_2 text-center">Enjoy Ride</div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Process;