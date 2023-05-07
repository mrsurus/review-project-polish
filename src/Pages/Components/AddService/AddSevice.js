import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import Swal from 'sweetalert2';
import useTitle from '../../../Hooks/useTitle';
import { AuthContext } from '../Context/AuthProvider';

const AddSevice = () => {
    const { register, handleSubmit, reset } = useForm()
    const {setRefetch,refetch} = useContext(AuthContext)
    useTitle('Add Service')

    const handleAddService = (data) => {

        const info = {
            name: data.name,
            details: data.details,
            price: data.price,
            rating: data.rating,
            img: data.photo
        }

        fetch(`https://review-project-polish-server.vercel.app/services`, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(info)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                Swal.fire(
                    'Good Job!',
                    'Service Added Successfully',
                    'success'
                )
                reset()
                setRefetch(!refetch)
            })

    }

    return (
        <div className= ' bg-lime-300 py-10'>
            <div className='bg-gray-900  md:w-[700px] mx-auto rounded px-10 py-2 '>
                <form onSubmit={handleSubmit(handleAddService)}>
                    <h2 className='text-2xl text-lime-500 font-semibold text-center mt-10'>Add a Food Service </h2>
                    <div className='grid grid-cols-1  gap-4 py-5'>
                        <p className='text-white mt-5'>Food Name:</p>
                        <input {...register('name',)} name='name' type="text" placeholder="Food Name" className="input input-bordered w-full " />
                        <p className='text-white mt-5'>Price:</p>
                        <input {...register('price',)} name='price' type="text" placeholder="Price" className="input input-bordered w-full " />
                        <p className='text-white mt-5'>Rating:</p>
                        <input {...register('rating',)} name='rating' type="text" placeholder="Price" className="input input-bordered w-full " />
                        <p className='text-white mt-5'>Photo URL:</p>
                        <input {...register('photo',)} name='photo' type="text" placeholder="Photo URL" className="input input-bordered w-full " />
                        <p className='text-white mt-5'>Food Details:</p>
                        <textarea {...register('details',)} name='details' type="text" placeholder="Food Details" className="input input-bordered h-28 w-full " />
                    </div>
                    <div className='text-center'><input className='  btn bg-lime-500 border-none mb-10 text-black ' type="submit" name="" value='Add service' /></div>
                </form>
            </div>
            
        </div>
    );
};

export default AddSevice;