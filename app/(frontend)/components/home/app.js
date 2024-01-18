import Link from 'next/link';
import React from 'react';

const DownloadApp = () => {
    return (
        <div className="lg:py-24">
            <div className='container mx-auto'>
                <div className={`flex justify-between lg:flex-row flex-col-reverse lg:gap-0 gap-12 items-center`}>
                    <div className="md:max-w-[574px]">
                        <h3 className='header_3 text-[#212121]'>It’s easier with the apps</h3>
                        <p className='paragraph_1 text-[#888AA0]'>Download our mobile apps and make your life easier.</p>
                    </div>
                    <div className='md:max-w-[357px] md:max-h-[215px]'>
                        <img
                            src='/car2.png'
                            alt='device'
                            className='w-auto h-full object-fit lg:pl-20 xl:mt-24 lg:block hidden mt-12 md:mt-12 lg:mt-12'
                        />
                    </div>
                </div>
                <div className={`flex lg:flex-row flex-col gap-x-52 md:gap-y-8 gap-y-8 items-center`}>

                    <div className='w-auto h-auto'>
                        <img src='/app.png' alt='device' className='object-fill' />
                    </div>

                    <div className='flex flex-col'>
                        <h4 className='header_4 text-[#5A5A5A]'>Download One Ride App</h4>
                        <div className="flex flex-row gap-x-8 mt-3">
                            <Link href="/https://play.google.com/store/games?device=windows" className='mt-2'>
                                <img src="/play.svg" alt="playStore" className='lg:max-w-[192px] h-14' />
                            </Link>
                            <Link href="/https://www.apple.com/app-store/" className='mt-2'>
                                <img src="/apple.svg" alt="appStore" className='lg:max-w-[192px] h-14' />
                            </Link>
                        </div>

                        <h4 className='header_4 text-[#5A5A5A] mt-10'>One Ride Driver App</h4>
                        <div className="flex flex-row gap-x-8 mt-3">
                            <Link href="/https://play.google.com/store/games?device=windows" className='mt-2'>
                                <img src="/play.svg" alt="playStore" className='lg:max-w-[192px] h-14' />
                            </Link>
                            <Link href="/https://www.apple.com/app-store/" className='mt-2'>
                                <img src="/apple.svg" alt="appStore" className='lg:max-w-[192px] h-14' />
                            </Link>
                        </div>
                        <h4 className='header_4 text-[#5A5A5A] mt-8'>One Ride Car owner App</h4>
                        <div className="flex flex-row gap-x-8 mt-3">
                            <Link href="/https://play.google.com/store/games?device=windows" className='mt-2'>
                                <img src="/play.svg" alt="playStore" className='lg:max-w-[192px] h-14' />
                            </Link>
                            <Link href="/https://www.apple.com/app-store/" className='mt-2'>
                                <img src="/apple.svg" alt="appStore" className='lg:max-w-[192px] h-14' />
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DownloadApp;