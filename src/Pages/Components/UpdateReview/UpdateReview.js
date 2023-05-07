import React, { useState } from 'react';
import { useLoaderData, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import useTitle from '../../../Hooks/useTitle';


const UpdateReview = () => {
    const storedReview = useLoaderData()
    const [editedReview, setEditedReview] = useState(storedReview)
    const navigate = useNavigate()
    useTitle('Update Review')

    
    const handleSubmit = (e) => {
        e.preventDefault()
        const form = e.target
        const review = form.review.value
        const data = {
            review: review
        }
        setEditedReview(data)
        fetch(`https://review-project-polish-server.vercel.app/review/${storedReview._id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.modifiedCount > 0) {

                }
                Swal.fire(
                    'Good job!',
                    'Review Update Succesfull!',
                    'success'
                )
                navigate('/myreview')
            })

    }
    return (
        <div className='py-5 bg-lime-300 w-[700px] mx-auto my-16 rounded'>
            <p className='text-center text-3xl'>Edit your Review</p>
            <div className='w-2/3 mx-auto py-5'>
                <form onSubmit={handleSubmit}>
                    Service Name: 
                    <input type="text" className="input input-bordered w-full mb-10 " name="serviceName" disabled defaultValue={editedReview.foodName} id="" readOnly /><br />
                    Review:
                    <input name='review' className='textarea textarea-bordered p-0 h-32 text-xl w-full' defaultValue={editedReview.review}></input>
                    <input className='btn bg-lime-500 border-none mt-3 ' type="submit" name="" value='Submit' />
                </form>
            </div>
        </div>
    );
};

export default UpdateReview;