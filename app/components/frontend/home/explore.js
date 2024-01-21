import React from 'react';

const Explore = () => {
	return (
		<div className="py-8">
			<section className="bg-fixed bg-center bg-cover relative z-0 h-[520px]" style={{ backgroundImage: "url('/explore.jpg')" }}>
				<div className="container px-4 mx-auto py-24 text-center relative z-[1]">
					<p className="text-white">Find the next place to visit</p>
					<h3 className="lg:text-8xl text-7xl text-white mb-6 font-semibold">Explore <span className="text-[#FF0143] font-bold">Vietnam</span></h3>
					<button className="items-center justify-center hidden px-6 py-4 text-base font-semibold text-white transition-all duration-200 border-primary border-2 rounded-lg lg:inline-flex bg-primary hover:text-white hover:scale-105" role="button">
						Start Booking Now 
					</button>

				</div>
			</section>
		</div>
	);
};

export default Explore;
