import { Rate } from 'antd';
import React from 'react';
import { GrFormNext, GrFormPrevious } from 'react-icons/gr';
import { Carousel } from 'antd';
import 'antd/dist/reset.css';

const testimonialData = [
    {
        _id: 1,
        name: 'John Doe',
        image: '/tt.png',
        rate: 4.5,
        review: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum. Lorem ipsum dolor sit amet consectetur adipis'
    },
    {
        _id: 2,
        name: 'John Doe',
        image: '/tt.png',
        rate: 4.5,
        review: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum. Lorem ipsum dolor sit amet consectetur adipis'
    },
    {
        _id: 3,
        name: 'John Doe',
        image: '/tt.png',
        rate: 4.5,
        review: 'Im very satisfied with the team at Lawreto Attorneys. The are so much professional and outstanding. I’m especially grateful for my handling attorney. They take so much care of my cases that i am so greatful to them'
    },
]

const Testimonial = () => {
    return (
        <div>
            <div className="!my-20">
            <div className='lg:h-[748px] h-auto bg-cover relative lg:pb-0 pb-4' style={{ backgroundImage: `url(./testimonialbg.png)`}}>
            <div className="absolute inset-0 bg-black opacity-50"></div>
                <div className="max-w-[535px] h-auto mx-auto">
                    <div className="flex justify-center items-center">
                        <h2 className='header_2 text-white text-center mt-16'>What Our Client Says about Us</h2>
                    </div>
                </div>
                <div className='flex justify-center items-center lg:py-12'>

                    <div className="container">
                        <Carousel arrows
                            prevArrow={<GrFormPrevious className="flex items-center justify-center mt-1" />}
                            nextArrow={<GrFormNext className="flex items-center justify-center mt-1" />}
                        >
                            {
                                testimonialData?.map((value, index) => {
                                    return (
                                        <div key={index}>
                                            <img src={value?.image} alt="" className='w-[150px] h-[150px] mx-auto rounded-full' />
                                            <div className='mt-2'>
                                                <Rate className='flex justify-center items-center text-primary' disabled defaultValue={value?.rate} allowHalf />
                                            </div>
                                            <div className='flex justify-center items-center'>
                                                <p className='mt-8 paragraph_2 text-center lg:w-[845px] text-secondary_text'>{value?.review}</p>
                                            </div>
                                            <div className="flex mt-2 items-center justify-center">
                                                <p className='header_4 text-secondary_text'>______</p>
                                                <p className='header_4 text-secondary_text ml-4'>{value?.name}</p>
                                            </div>
                                        </div>
                                    )
                                })
                            }
                        </Carousel>
                    </div>
                </div>
            </div>
        </div>
        </div>
    );
};

export default Testimonial;