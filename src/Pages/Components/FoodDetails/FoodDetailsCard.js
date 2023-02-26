import React from 'react';
import { FaStar } from 'react-icons/fa';
import { PhotoProvider, PhotoView } from 'react-photo-view';

const FoodDetailsCard = ({data}) => {
    const {name, price, details, rating, img} = data

    return (
        <div>
            <section>
                <div className="mx-auto max-w-screen-xl px-4 pt-16 sm:px-6 sm:pt-24 lg:px-8">
                    <div className="max-w-3xl">
                        <h2 className="text-3xl font-bold sm:text-4xl">{name}</h2>
                    </div>

                    <div className="mt-8 grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-16">
                        <div className="relative h-64 overflow-hidden sm:h-80 lg:h-full">
                            <PhotoProvider><PhotoView src={img}>
                            <img
                                alt={name}
                                src={img}
                                className="absolute inset-0  w-full object-cover"
                            />
                            </PhotoView></PhotoProvider>
                        </div>

                        <div className="lg:py-16">
                            <article className="space-y-4 text-gray-600">
                                <p> {details}</p>

                                <p>
                                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolorum
                                    explicabo quidem voluptatum voluptas illo accusantium ipsam quis,
                                    vel mollitia? Vel provident culpa dignissimos possimus, perferendis
                                    consectetur odit accusantium dolorem amet voluptates aliquid,
                                    ducimus tempore incidunt quas. Veritatis molestias tempora
                                    distinctio voluptates sint! Itaque quasi corrupti, sequi quo odit
                                    illum impedit!
                                </p>
                                <p className='font-bold'>Price: {price}$ only</p>
                                <p className='flex items-center'>Rating: {rating} <FaStar className='text-black ml-3'></FaStar> </p>
                            </article>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default FoodDetailsCard;