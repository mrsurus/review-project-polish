import React from 'react';

const Banner = () => {
    return (
        <div>
            <section className="bg-gray-900 text-white">
                <div className="hero min-h-screen ">
                    <div className="hero-content grid grid-cols-1 md:grid-cols-2">
                        <div className="text-center lg:text-left ">
                            <h1 className="text-5xl font-bold text-lime-500">Green Food</h1>
                            <p className="py-6 text-5xl font-bold">Delivary service</p>
                            <p className=''>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Perferendis fuga molestias soluta reiciendis exercitationem excepturi error ratione cum nobis nulla.</p>
                        </div>
                        <div className="card flex-shrink-0 w-full shadow-2xl ">
                            <div className='card-body '>
                                <img className=' h-[400px] rounded-lg' src="https://images.pexels.com/photos/699953/pexels-photo-699953.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </div>
    );
};

export default Banner;