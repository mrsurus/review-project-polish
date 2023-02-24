import React from 'react';

const Section = () => {
    return (
        <div className='bg-gray-900 text-white p-8 mb-10'>
            <div className='grid grid-cols-1  lg:grid-cols-3 gap-5'>
                <div className='col my-8 mx-16'>
                    <p className='text-4xl font-bold my-3'>Green Food</p>
                    <p className='text-2xl font-semibold mb-3  text-lime-400'>Providing the best qualilty is our only goal</p>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Autem, aliquam voluptatem ex beatae corporis atque, iure, impedit perspiciatis natus incidunt omnis provident quibusdam.</p>
                </div>
                <div className='col mx-10 rounded my-auto'>
                    <img className='w-full  rounded ' src="https://images.pexels.com/photos/2894651/pexels-photo-2894651.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" />
                </div>
                <div className='col my-8'>
                    <ul className='w-1/3 mx-auto'>
                        <li className='my-3 text-lime-300'>Fresh</li>
                        <li className='my-3 text-lime-300'>Fast Delevary</li>
                        <li className='my-3 text-lime-300'>Tasty</li>
                        <li className='my-3 text-lime-300'>Pesarvetive Free</li>
                        <li className='my-3 text-lime-300'>Good looking</li>
                    </ul>
                </div>
                
            </div>
        </div>
    );
};

export default Section;