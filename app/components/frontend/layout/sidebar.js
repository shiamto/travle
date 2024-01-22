'use client'
import React, { useState } from 'react';
import { Collapse, theme, Radio, Space, Checkbox } from 'antd';
import { DownCircleOutlined, UpCircleOutlined, PlusOutlined, MinusOutlined, StarFilled } from '@ant-design/icons';

const { Panel } = Collapse;

const categories = [
    {
        _id: 1,
        name: 'Totes',
        href: '#',
        subCategories: [
            {
                _id: 1,
                name: 'Totes',
            },
            {
                _id: 2,
                name: 'Backpacks',
            },
            {
                _id: 3,
                name: 'Travel Bags',
            },
        ]

    },
    {
        _id: 2,
        name: 'Backpacks',
        href: '#',
        subCategories: [
            {
                _id: 1,
                name: 'Totes',
            },
            {
                _id: 2,
                name: 'Backpacks',
            },
            {
                _id: 3,
                name: 'Travel Bags',
            },
        ]
    },
    {
        _id: 3,
        name: 'Travel Bags',
        href: '#',
        subCategories: [
            {
                _id: 1,
                name: 'Totes',
            },
            {
                _id: 2,
                name: 'Backpacks',
            },
            {
                _id: 3,
                name: 'Travel Bags',
            },
        ]
    },
    {
        _id: 4,
        name: 'Hip Bags',
        href: '#',
        subCategories: [
            {
                _id: 1,
                name: 'Totes',
            },
            {
                _id: 2,
                name: 'Backpacks',
            },
            {
                _id: 3,
                name: 'Travel Bags',
            },
        ]
    },
    {
        _id: 5,
        name: 'Laptop Sleeves',
        href: '#',
        subCategories: [
            {
                _id: 1,
                name: 'Totes',
            },
            {
                _id: 2,
                name: 'Backpacks',
            },
            {
                _id: 3,
                name: 'Travel Bags',
            },
        ]
    },
]


const price = [
    { _id: 1, name: 'All' },
    { _id: 2, name: 'Free' },
    { _id: 3, name: 'Paid' },
]

const courseLavel = [
    { _id: 1, name: 'All' },
    { _id: 2, name: 'Beginner' },
    { _id: 3, name: 'Intermediate' },
    { _id: 4, name: 'Advanced' },
]

const rating = [
    { _id: 0, name: 'All' },
    { _id: 1, name: '5 Star' },
    { _id: 2, name: '4 Star' },
    { _id: 3, name: '3 Star' },
    { _id: 4, name: '2 Star' },
    { _id: 5, name: '1 Star' },
]

const SideBar = ({ setShowSidebar, width }) => {
    const [value, setValue] = useState(1);
    const showSidebar = true
    const onChange = (e) => {
        //console.log('radio checked', e.target.value);
        setValue(e.target.value);
    };
    const { token } = theme.useToken();
    return (

        showSidebar && (
            <div className={`p-4 shadow-xl ${width} basis-full rounded-md h-fit`} >
                <div className="">
                    <Collapse
                        bordered={false}
                        defaultActiveKey={['1']}
                        expandIconPosition="end"
                        expandIcon={({ isActive }) => <UpCircleOutlined rotate={isActive ? 180 : 0} style={{
                            fontSize: '24px',
                            color: '#808080',
                        }} />}
                        style={{
                            background: token.colorBgContainer,
                        }}

                    >
                        <Panel header="Categories" className='header_6 text-primary_text w-full border-b-2' key="1">

                            {categories?.map((category) => (
                                <Collapse
                                    key={category._id}
                                    bordered={false}
                                    expandIconPosition="end"
                                    expandIcon={({ isActive }) => (
                                        isActive ? <MinusOutlined style={{ fontSize: '14px', color: '#808080', }} /> :
                                            <PlusOutlined style={{ fontSize: '14px', color: '#808080', }} />)
                                    }
                                    style={{
                                        background: token.colorBgContainer,
                                        width: '100%',
                                    }}
                                >
                                    <Panel header={category.name} className='paragraph w-full' key="1">
                                        <Radio.Group onChange={onChange} value={value}>
                                            <Space direction="vertical">
                                                {
                                                    category?.subCategories?.map((size) => (
                                                        <Checkbox key={size._id} value={size._id} className='text-secondary_text paragraph  '>{size.name}</Checkbox>
                                                    ))
                                                }
                                            </Space>
                                        </Radio.Group>
                                    </Panel>
                                </Collapse>
                            ))}
                        </Panel>


                        <Panel header="Price" className='header_6' key="3">
                            <Radio.Group onChange={onChange} value={value}>
                                <Space direction="vertical">
                                    {
                                        price?.map((price) => (
                                            <Checkbox key={price._id} value={price._id} className='text-secondary_text paragraph'>{price.name}</Checkbox>
                                        ))
                                    }
                                    <div className="flex gap-4 w-3/4 mt-6">
                                        <input type="text" className="w-1/2 border border-[#E5E5E5] rounded-sm px-2 py-1 text-sm text-secondary_text focus:border-primary" placeholder="Min" />
                                        <input type="text" className="w-1/2 border border-[#E5E5E5] rounded-sm px-2 py-1 text-sm text-secondary_text focus:border-primary" placeholder="Max" />
                                    </div>
                                </Space>
                            </Radio.Group>
                        </Panel>
                        <Panel header="Course Label" className='header_6' key="4">
                            <Radio.Group onChange={onChange} value={value}>
                                <Space direction="vertical">
                                    {
                                        courseLavel?.map((lavel) => (
                                            <Checkbox key={lavel._id} value={lavel._id} className='text-secondary_text paragraph  '>{lavel.name}</Checkbox>
                                        ))
                                    }
                                </Space>
                            </Radio.Group>
                        </Panel>
                        <Panel header="Rating" className='header_6' key="5">
                            <Radio.Group onChange={onChange} value={value}>
                                <Space direction="vertical">
                                    {
                                        rating?.map((rating) => (
                                            <Checkbox key={rating._id} value={rating._id} className='text-secondary_text paragraph flex items-center'>
                                                <div className='flex items-center mt-1' >
                                                    {rating._id !== 0 && <div className='flex items-center mr-2' ><StarFilled className='text-[#F8874A] ' /></div>}
                                                    <span>{rating.name}</span>
                                                </div>
                                            </Checkbox>
                                        ))
                                    }
                                </Space>
                            </Radio.Group>
                        </Panel>
                    </Collapse>


                </div >
            </div>
        )

    );
};

export default SideBar;