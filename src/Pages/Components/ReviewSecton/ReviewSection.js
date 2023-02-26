import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import { AuthContext } from '../Context/AuthProvider';
import Swal from 'sweetalert2';

const ReviewSection = ({ data, setRefetch, refetch }) => {
    const { user, } = useContext(AuthContext)
    const { register, handleSubmit,reset   } = useForm()
    const { name, _id } = data

    const handlePlaceReview = (data) => {
        const reviewInfo = {
            foodId: _id,
            foodName: name,
            reviewerName: user?.displayName,
            reviewerEmail: user?.email,
            review: data.review,
            photo: user?.photoURL || 'no photo',
            date: new Date()
        }

        fetch('http://localhost:5000/review', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(reviewInfo)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                Swal.fire(
                    'Good job!',
                    ' Review Added!',
                    'success'
                )
                setRefetch(!refetch)
                reset()
            })

    }
    return (
        <div >
            {user?.email ? <>
                <div className='bg-gray-900 h-[500px] m-5 rounded py-5 px-10 '>
                    <form onSubmit={handleSubmit(handlePlaceReview)}>
                        <h2 className='text-2xl text-lime-500 font-semibold text-center mt-10'>Write review for our {name}</h2>
                        <div className='grid grid-cols-1 lg:grid-cols-2 gap-4 py-5'>
                            <input {...register('name', { disabled: true })} name='name' type="text" defaultValue={user?.displayName ? user.displayName : ''} placeholder="Your Name" className="input input-bordered w-full " readOnly />
                        </div>
                        <textarea {...register('review', { required: true })} type='text' name='review' className='textarea textarea-bordered my-3 h-48 text-xl w-full' placeholder='Write your review here ...'></textarea>
                        <div className='text-center'><input className='  btn bg-lime-500 border-none mb-10 ' type="submit" name="" value='Submit Your review' /></div>
                    </form>
                </div>
            </> :

                <p className='text-3xl text-center mt-16 '>Want to give review? please <Link to='/login' className='btn'>Log In</Link> </p>
            }
        </div>
    );
};

export default ReviewSection;