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
        icon: './ser1.png'
    },
    {
        _id: 3,
        title: "Culinary Delights",
        description: "Indulge your palate in the exquisite flavors of Vietnam, from street food to gourmet cuisine.",
        icon: './ser1.png'
    },
    {
        _id: 4,
        title: "Luxury Escape",
        description: "Experience opulence and relaxation with our curated luxury escapes, ensuring an extraordinary stay",
        icon: './ser1.png'
    },

]


const Services = () => {
    return (
        <div className='container'>
            <div className="section relative pt-24 pb-8 md:pt-16 md:pb-0 bg-white">
                <header className="text-center mx-auto mb-12 lg:px-20">
                    <h2 className="text-2xl font-semibold text-gray-800">Tailored Experiences, Seamless Travel</h2>

                    <p className="text-base mt-2">We specialize in tailoring experiences to suit your unique travel style. Our services encompass meticulously planned itineraries, exclusive tours, luxury accommodations and expert guidance. </p>
                </header>

                <div className="flex flex-wrap flex-row -mx-4 text-center">

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

