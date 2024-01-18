import React from 'react';

const OurHistory = ({ aboutData }) => {
    
    const data = aboutData?.content;

    let historyData;

    try{
        historyData = JSON.parse(data)?.our_history;
    } catch(e){
        console.error("Error parsing JSON:", e);
    }

    return (
        <div className='container mx-auto'>
            <div className={`flex lg:flex-row flex-col gap-x-52 md:gap-y-8 gap-y-8 items-center mt-20`}>
                <div className='lg:w-auto md:w-[480px] w-full h-auto'>
                    <img src='/mercedes.png' alt='device' className='object-fill' />
                </div>
                <div className='flex flex-col'>
                    <h4 className='header_2 text-[#5A5A5A]'>{historyData?.heading}</h4>
                    <div className="flex flex-row gap-x-8 mt-3">
                        <div className='md:w-[536px] w-auto paragraph_3 text-web_text'>
                            <p>
                                {historyData?.description_1}
                            </p>
                            <p>
                                {historyData?.description_2}                                
                            </p>

                        </div>

                    </div>

                </div>
            </div>
        </div>

    );
};

export default OurHistory;