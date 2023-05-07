import React, { useContext, useEffect, useState } from 'react';
import Swal from 'sweetalert2';
import useTitle from '../../../Hooks/useTitle';
import { AuthContext } from '../Context/AuthProvider';
import Spinner from '../Spinner/Spinner';
import MyReviewCard from './MyReviewCard';

const Myreview = () => {
    const [myreviews, setMyreview] = useState([])
    const {user, logOut, loading} = useContext(AuthContext)
    useTitle('My Review')

   

    useEffect(() =>{
        fetch(`https://review-project-polish-server.vercel.app/review?email=${user?.email}`,{
            headers:{
                authorization:`Bearer ${localStorage.getItem('review-token')} `
            }
        })
        .then(res =>{
            if(res.status === 401 || res.status === 403 ){
                logOut()
            }
             return res.json()
            })
        .then(data => setMyreview(data))
    }, [user?.email, logOut])
    

    const handleDelete =(id)=> {
        fetch(`https://review-project-polish-server.vercel.app/review/${id}`,{
            method: 'DELETE'
        })
        .then(res => res.json())
        .then(data => {
            console.log(data);
            if(data.deletedCount > 0){
                const remainig = myreviews?.filter(mr => mr._id !== id)
                setMyreview(remainig)
            }
            Swal.fire(
                'Good job!',
                'Delete Succesfull!',
                'success'
              )
        }) 
    }

    if(loading===true){
        return <Spinner></Spinner>
    }

    if(myreviews.length === 0){
        return <p className='text-center text-4xl font-bold text-lime-500 my-24 '>No review were added by you. </p>
    }

    
    return (
        <div>
            {
                myreviews?.map(myreview =>
                <MyReviewCard 
                key={myreview._id}
                handleDelete={handleDelete}
                 myreview={myreview}>

                </MyReviewCard>)
            }
        </div>
    );
};

export default Myreview;