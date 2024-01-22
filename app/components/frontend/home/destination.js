import Link from 'next/link';
import React from 'react';


const destinationList = [
	{
		_id: 1,
		image: '/d1.jpg',
		title: 'Europe'
	},
	{
		_id: 2,
		image: '/d2.jpg',
		title: 'South East Asia'
	},
	{
		_id: 3,
		image: '/d3.jpg',
		title: 'Dubai and MiddleEast'
	},
	{
		_id: 4,
		image: '/d4.jpg',
		title: 'Mauritius'
	},
	{
		_id: 5,
		image: '/d2.jpg',
		title: 'Australia & New Zealand'
	},
	{
		_id: 6,
		image: '/d1.jpg',
		title: 'Kashmir'
	},
	{
		_id: 7,
		image: '/d3.jpg',
		title: 'Gangtok'
	},
	{
		_id: 8,
		image: '/d4.jpg',
		title: 'Darjeling'
	}
]

const Destination = () => {
	return (
		<div className="container py-12">
			<h2 className="text-2xl font-semibold text-gray-800">Popular Destinations</h2>

			<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-5 mt-4">
				{destinationList?.map((val) => (
					<div>
						<div className="relative">
							<div className="absolute inset-0 rounded-2xl">
								{/* Apply opacity to the background overlay */}
								<div className="bg-black h-full opacity-50 absolute inset-0 rounded-2xl"></div>
								<img className="object-cover w-full h-full rounded-2xl" src={val?.image} alt="" />
							</div>

							<div className="absolute inset-0"></div>

							<div className="relative px-4 mx-auto sm:px-6 lg:px-8">
								<div className="flex items-center justify-between h-[120px]">
									<div className="flex-shrink-0">
										<h1 className='text-2xl text-white'>{val?.title}</h1>
									</div>
									<Link href="/tours/details" title="" className="items-center justify-center hidden px-4 py-2 text-base font-semibold text-white hover:text-white transition-all duration-200 bg-transparent border border-white rounded-full ease-in-out lg:inline-flex hover:border-none hover:bg-secondary focus:bg-secondary" role="button"> View All </Link>
								</div>
							</div>
						</div>
					</div>
				))}
			</div>


		</div>
	);
};

export default Destination;
