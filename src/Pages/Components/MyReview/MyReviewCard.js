import React from 'react';
import { Link } from 'react-router-dom';

const MyReviewCard = ({myreview,handleDelete}) => {
    const {reviewerName, foodName,review, _id } = myreview
    return (
        <div>
            <div className='flex w-2/3 mx-auto my-10 border rounded-lg py-5 bg-lime-400'>
                <div className='flex w-2/3 ml-5'>
                    <div>
                        <p className='text-2xl font-semibold'>{foodName}</p>
                        <p className='ml-5'> {review}</p>
                    </div>
                </div>
                <div className='w-1/3 text-right mr-2'>
                  <button onClick={() => handleDelete(_id)} className='btn bg-red-500 border-none mb-5'>Delete</button><br />
                    <Link to={`/update/${_id}`}><button className='btn btn-primary'>Edit</button></Link>
                </div>
            </div>
        </div>
    );
};

export default MyReviewCard;