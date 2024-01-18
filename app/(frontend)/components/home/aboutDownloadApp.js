import Link from 'next/link';
import React from 'react';

const AboutDownloadApp = ({ aboutData }) => {
    const data = aboutData?.content;
    let downloadData;

    try {
        downloadData = JSON.parse(data)?.download_app;
    } catch (e) {
        console.error("Error parsing JSON:", e);
    }

    return (
        <div className='container mx-auto'>
            <div className={`flex lg:flex-row flex-col gap-x-52 md:gap-y-8 gap-y-8 items-center`}>

                <div className='flex flex-col'>
                    <h4 className='header_3 text-dark_text'>{downloadData?.heading}</h4>
                    <p className='paragraph_3 text-web_text mt-3'>
                        {downloadData?.description}
                    </p>

                    <h4 className='header_4 text-[#5A5A5A] mt-2'>One Ride User App</h4>
                    <div className="flex flex-row gap-x-8 mt-1">
                        <a href={downloadData?.user?.google_play} className='mt-2' target='_blank'>
                            <img src="/play.svg" alt="playStore" className='lg:max-w-[192px] h-14' />
                        </a>
                        <a target='_blank' href={downloadData?.user?.app_store} className='mt-2'>
                            <img src="/apple.svg" alt="appStore" className='lg:max-w-[192px] h-14' />
                        </a>
                    </div>

                    <h4 className='header_4 text-[#5A5A5A] mt-10'>One Ride Driver App</h4>
                    <div className="flex flex-row gap-x-8 mt-1">
                        <a href={downloadData?.driver?.google_play} className='mt-2'>
                            <img src="/play.svg" alt="playStore" className='lg:max-w-[192px] h-14' />
                        </a>
                        <a href={downloadData?.driver?.app_store} className='mt-2' target='_blank'>
                            <img src="/apple.svg" alt="appStore" className='lg:max-w-[192px] h-14' />
                        </a>
                    </div>
                    <h4 className='header_4 text-[#5A5A5A] mt-8'>One Ride Car owner App</h4>
                    <div className="flex flex-row gap-x-8 mt-3">
                        <a href={downloadData?.owner?.google_play} className='mt-2' target='_blank'>
                            <img src="/play.svg" alt="playStore" className='lg:max-w-[192px] h-14' />
                        </a>
                        <a href={downloadData?.owner?.app_store} className='mt-2' target='_blank'>
                            <img src="/apple.svg" alt="appStore" className='lg:max-w-[192px] h-14' />
                        </a>
                    </div>
                </div>

                <div className='w-auto h-auto'>
                    <img src='/bike025.png' alt='device' className='object-fill' />
                </div>
            </div>


        </div>
    );
};

export default AboutDownloadApp;