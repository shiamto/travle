import React from 'react';

const Breadcrumb = (props) => {
    return (
        <div className='pb-8 md:pb-20 lg:pb-36' >
            <div style={{ backgroundImage: `url(../breadcrumb_bg.png)` }} className="bg-[url('../breadcrumb_img.png)] h-[300px]  bg-cover md:h-[571px] relative"  >
                <div className="flex justify-center items-center h-full container">
                    <div className="text-center">
                        <h1 className="header_1 text-white">{props?.title}</h1>
                    </div>
                    <div className='breadcrumb_img' >
                        <img src="../breadcrumb_car.png" alt="" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Breadcrumb;