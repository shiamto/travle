import React from 'react'

const ChooseCard = ({item}) => {
  return (
    <div className="w-full relative">
    <img src={item.image} className='w-full h-full' alt="" />
    <div className="text-center  absolute top-0 left-0 right-0 bottom-0 overlay overflow-hidden  group">
        <div className=" absolute -top-[50%] group-hover:top-[40%] left-0 right-0 duration-500">
            <h1 className='text-[20px] text-white'>{item.title}</h1>
            <p className='text-[#ffa801]'>{item.description}</p>
        </div>
        <div className="absolute bottom-10 right-0 left-0 group-hover:-bottom-20 duration-500">
            <h1 className='text-[20px] text-white'>EXPERTISE</h1>
        </div>

    </div>
</div>
  )
}

export default ChooseCard