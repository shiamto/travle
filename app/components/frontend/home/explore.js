import React from 'react';

const Explore = () => {
	return (
		<div className="relative">
			<section
				className="bg-fixed bg-center bg-cover relative z-0 py-[100px]"
				style={{ backgroundImage: "linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url('/explore.jpg')" }}
			>
				<div className="container px-4 mx-auto py-24 text-center relative z-[1]">
					<p className="text-white text-[40px] font-satisfy">Find the next place to visit</p>
					<h3 className="md:text-[100px] uppercase text-5xl text-white mb-10 font-extrabold font-barlow ">
						Explore <span  className="text-[#FF0143] font-bold bg-[url('/title-decor.png')] bg-no-repeat bg-bottom ">Vietnam</span>
					</h3>
					<button className="items-center justify-center px-7 py-5 text-base font-semibold text-primary transition-all duration-200 cursor-pointer bg-[#ffa801] hover:scale-105" role="button">
						Start Booking Now
					</button>

				</div>
			</section>
		</div>
	);
};

export default Explore;
