import React from 'react';



const serviceData = [
    {
        _id: 1,
        title: "Cultural Immersion",
        description: "Immerse yourself in the rich tapestry of Vietnam's culture, exploring its traditions and heritage",
        icon: './ser1.png'
    },
    {
        _id: 2,
        title: "Adventure & Nature Tours",
        description: "Our curated tours blend excitement with serene landscapes, promising unforgettable experiences.",
        icon: './hiking.png'
    },
    {
        _id: 3,
        title: "Culinary Delights",
        description: "Indulge your palate in the exquisite flavors of Vietnam, from street food to gourmet cuisine.",
        icon: './culinary.png'
    },
    {
        _id: 4,
        title: "Luxury Escape",
        description: "Experience opulence and relaxation with our curated luxury escapes, ensuring an extraordinary stay",
        icon: './beach.png'
    },

]


const Services = ({ service }) => {
    return (
        <div className="bg-[#ECEEEF] py-20">
            <div className='container'>
                <header className="text-center max-w-[1150px] mx-auto">
                    <h1 className='text-[#ffa801] font-semibold text-lg'>
                        {service?.data?.content?.service_section?.heading}
                    </h1>
                    <h2 className="text-primary font-barlow text-[50px] font-semibold text-center">
                        {service?.data?.content?.service_section?.title}
                    </h2>

                    <p className="text-base mt-2 text-secondaryText">
                        {service?.data?.content?.service_section?.description}
                    </p>
                </header>

                <div className="flex flex-wrap flex-row -mx-4 text-center mt-12">

                    {serviceData.map((service, index) => (
                        <div className="flex-shrink px-4 max-w-full w-full sm:w-1/2 lg:w-1/4 lg:px-6 wow fadeInUp cursor-pointer" data-wow-duration="1s" >

                            <div className="py-8 px-8 mb-12 bg-gray-50 border-b border-gray-100 transform transition duration-300 ease-in-out hover:-translate-y-2">
                                <div className="inline-block text-gray-900 mb-4">
                                    <img src={service.icon} className='w-24 h-24' alt="" />

                                </div>
                                <h3 className="text-lg leading-normal mb-2 font-semibold text-black">{service.title}</h3>
                                <p className="text-gray-500">{service.description}</p>
                            </div>

                        </div>
                    ))}

                </div>
            </div>
        </div>

    )
}

export default Services;

