import React  from 'react';
import CardofReview from './CardofReview';

const ShowReviewCard = ({reviewes}) => {

    if(reviewes.length === 0){
        return <div className='text-center mt-16'> No review were added for this Item.</div>
    }
    return (
        <div className=' mx-5 gap-5'>
           {
            reviewes?.map( review => <CardofReview key={review._id} reviews={review}>

            </CardofReview>)
           }
        </div>
    );
};

export default ShowReviewCard;