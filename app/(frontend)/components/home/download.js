import React from 'react';

const Downloads = () => {
    return (
        <>
            <section className="py-10 bg-white">
                <div className="container mx-auto">
                    <div className="grid grid-cols-2 gap-6 mt-8 sm:px-0 lg:mt-16 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-12">
                        <div className="overflow-hidden">
                            <div className="py-4">

                                <div className="text-center">
                                    <h4 className="app_heading text_stroke">6k+</h4>
                                    <p className="mt-7 paragraph_3 text-[#5A5A5A]">App Downloads</p>
                                </div>
                            </div>
                        </div>

                        <div className="overflow-hidden">
                            <div className="py-4">

                                <div className="text-center">
                                    <h4 className="app_heading">4k+</h4>
                                    <p className="mt-7 paragraph_3 text-[#5A5A5A]">Active Rider</p>
                                </div>
                            </div>
                        </div>

                        <div className="overflow-hidden">
                            <div className="py-4">

                                <div className="text-center">
                                    <h4 className="app_heading">3k+</h4>
                                    <p className="mt-7 paragraph_3 text-[#5A5A5A]">Active User</p>
                                </div>
                            </div>
                        </div>

                        <div className="overflow-hidden">
                            <div className="py-4">
                                <div className="text-center">
                                    <h4 className="app_heading">3k+</h4>
                                    <p className="mt-7 paragraph_3 text-[#5A5A5A]">Tripe/Order Saved</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Downloads;