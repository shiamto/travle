import React from 'react'
import ChooseCard from '../ChooseCard'

const data =[
    {
        id : 1,
        title : "EXPERTISE",
        description : "Our team of Vietnam enthusiasts combines local insights with a global perspective.",
        image : '/destinations-1.jpg'
    }, {
        id : 2,
        title : "EXPERTISE",
        description : "Our team of Vietnam enthusiasts combines local insights with a global perspective.",
        image : '/destinations-1.jpg'
    },
    {
        id : 3,
        title : "EXPERTISE",
        description : "Our team of Vietnam enthusiasts combines local insights with a global perspective.",
        image : '/destinations-1.jpg'
    },
    {
        id : 4,
        title : "EXPERTISE",
        description : "Our team of Vietnam enthusiasts combines local insights with a global perspective.",
        image : '/destinations-1.jpg'
    },
    {
        id : 5,
        title : "EXPERTISE",
        description : "Our team of Vietnam enthusiasts combines local insights with a global perspective.",
        image : '/destinations-1.jpg'
    },
    {
        id : 6,
        title : "EXPERTISE",
        description : "Our team of Vietnam enthusiasts combines local insights with a global perspective.",
        image : '/destinations-1.jpg'
    }

]

const WhyChoose = () => {
    return (
        <div className='py-20 pt-40'>
            <div className="container mx-auto">
                <h1 className='text-primary font-barlow text-[50px] font-semibold text-center'>Why Choose Wilh. Loesch?</h1>
                
            </div>
            <div className="grid lg:grid-cols-6 md:grid-cols-3 grid-cols-1 gap-5 mt-12 mx-8">
                    {
                        data?.map((val,i) => (
                            <ChooseCard key={i} item={val} />
                        ))
                    }
                       
                </div>
        </div>
    )
}

export default WhyChoose