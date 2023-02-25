import React from 'react';

const CardofReview = ({reviews}) => {
    const {reviewerName, review, photo} = reviews

    return (
        <div className=''>

            <article className="rounded-xl border-2 my-5 border-gray-100 bg-lime-500">
                <div className="flex items-start gap-4 p-4 sm:p-6 lg:p-8">
                        <img
                            alt="Speaker"
                            src={photo}
                            className="h-14 w-14 rounded-lg object-cover"
                        />
                    <div>
                        <p className="font-medium sm:text-lg">{reviewerName} </p>

                        <p className="line-clamp-2 text-sm text-gray-700">{review}</p>

                    </div>
                </div>

               
            </article>

        </div>
    );
};

export default CardofReview;