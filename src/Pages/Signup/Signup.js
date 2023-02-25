import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import { setAuthToken } from '../Components/Api/Auth';
import { AuthContext } from '../Components/Context/AuthProvider';

const Signup = () => {
    const { register, handleSubmit, formState: { errors } } = useForm()
    const { createUser, googleLogin, updateNamePhoto } = useContext(AuthContext)
    const location = useLocation()
    const navigate = useNavigate()
    const from = location.state?.from?.pathname || '/'

    const handleSignup = data => {
        console.log(data.email, data.password);
        createUser(data.email, data.password)
            .then(res => {
                const user = res.user
                setAuthToken(user)
                updateNamePhoto(data.name, data.photo)
                .then(res => console.log('display updated'))
                .then(err => console.log(err))
                navigate(from, {replace: true})
                
                Swal.fire(
                    'Good job!',
                    'Log in Successfull!',
                    'success'
                )

            })
            .catch(err => console.log(err))
    }

    const handleGoogleLogin =() =>{
        googleLogin()
        .then(res => {
            console.log(res.user);
            navigate(from, {replace: true})
        })
        .catch(err => console.log(err))
    }


    return (
        <div>
            <div className="hero  bg-lime-300">
                <div className="hero-content w-full py-12 md:w-2/5 ">
                    <div className="card flex-shrink-0 w-full   shadow-2xl bg-gray-900 pt-10">
                        <h1 className="text-5xl font-bold text-center text-white">Sign Up </h1>
                        <form onSubmit={handleSubmit(handleSignup)} className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="text-white">Name</span>
                                </label>
                                <input {...register('name', {required:'name is required'})} type="text" name='name' placeholder="Your Name" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="text-white">Photo URL</span>
                                </label>
                                <input {...register('photo', {required:'name is required'})} type="text" name='photo' placeholder="Photo URLs" className="input input-bordered" />
                            </div>

                            <div className="form-control">
                                <label className="label">
                                    <span className="text-white">Email</span>
                                </label>
                                <input {...register('email', {required:true})} type="text" name='email' placeholder="email" className="input input-bordered"  />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="text-white">Password</span>
                                </label>
                                <input {...register('password', {required: true, minLength:{value: 6, message: 'Password must be at lest 6 charectar'}})} type="password" placeholder="password" className="input input-bordered" />
                            </div>
                            <p className='text-red-500'>{errors.password?.message}</p>
                            <div className="form-control mt-6">
                                <input className='btn bg-lime-500 ' type="submit" value="Sign Up" />
                            </div>
                            <p className='text-center text-white'>Already have an account? <Link className='text-success font-bold' to='/login'>Log In</Link></p>
                            
                        </form>
                        <button onClick={handleGoogleLogin} className='btn btn-primary mt-5 mx-8 mb-5'>Login With Google</button>
                        <p className='text-red-500'>{errors?.errors}</p>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Signup;