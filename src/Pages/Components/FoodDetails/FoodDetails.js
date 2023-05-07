import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import useTitle from '../../../Hooks/useTitle';
import ReviewSection from '../ReviewSecton/ReviewSection';
import ShowReviewCard from '../ReviewSecton/ShowReviewCard';
import FoodDetailsCard from './FoodDetailsCard';

const FoodDetails = () => {
    const data = useLoaderData()
    const [reviewes, setReviewes] = useState([])
    const [refetch, setRefetch] = useState(true)
    useTitle('Food Details')

    useEffect(()=>{
        fetch(`https://review-project-polish-server.vercel.app/review/${data._id}`)
        .then(res => res.json())
        .then(data => setReviewes(data))
    },[refetch, data._id])

    return (
        <div className='bg-lime-300 pb-10'>
            <FoodDetailsCard data={data}></FoodDetailsCard>
            <div className='  grid grid-cols-1 md:grid-cols-2 lg:px-16 gap-5'>
                <ShowReviewCard reviewes={reviewes}  ></ShowReviewCard>
                <ReviewSection data={data} setRefetch={setRefetch} refetch={refetch} ></ReviewSection>
            </div>

        </div>
    );
};

export default FoodDetails;