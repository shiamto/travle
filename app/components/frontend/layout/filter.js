'use client'
import { Select } from 'antd';
import React, { useState } from 'react';
import { FiFilter, FiGrid, FiList } from 'react-icons/fi';

const Filter = ({ showSidebar, setShowSidebar }) => {
    const [show, setShow] = useState(false)
    return (
        <div className='py-2 ' >
            <div className="flex justify-center md:justify-between gap-2  items-start md:items-center flex-col md:flex-row">
                <div className=" md:basis-1/4">
                    <div className='flex items-center text-secondary_text ml-0 md:ml-4 cursor-pointer' onClick={() => setShowSidebar(!showSidebar)}>
                        <FiFilter className='' />
                        <span className=' header_6 ml-2'>Filter</span>
                    </div>

                </div>
                <div className=" md:basis-1/2">
                    <div className='flex items-center text-secondary_text' >
                        <button className='mr-5' >
                            <FiGrid />
                        </button>
                        <button className='mr-4' >
                            <FiList />
                        </button>
                        <span className=' paragraph_1 mr-2 '>Showing result 6 of 15</span>
                    </div>
                </div>

                <div className=" md:basis-1/4">
                    <div className='flex items-center justify-end text-primary_text mr-4 relative'>
                        <span className=' paragraph_1 mr-2 text-secondary_text'>Sort by:</span>
                        <div className="">
                            <Select
                                showSearch
                                placeholder="Select "
                                optionFilterProp="children"
                                // onChange={onChange}
                                // filterOption={(input, option) =>
                                //     (option?.label ?? '').toLowerCase().includes(input.toLowerCase())
                                // }
                                options={[
                                    {
                                        value: 'new',
                                        label: 'Newset',
                                    },
                                    {
                                        value: 'old',
                                        label: 'Oldest',
                                    }
                                ]}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div >
    );
};

export default Filter;