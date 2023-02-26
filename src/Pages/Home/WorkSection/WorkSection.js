import React from 'react';

const WorkSection = () => {
    return (
        <div className='text-center bg-base-200  p-12'>
            <div className='mb-5'>
                <p className='text-5xl text-lime-500 font-bold'>Just 3 Steps</p>
                <p className='mt-5'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit non necessitatibus nobis aliquam, quo rerum.</p>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-3 gap-10  pt-5'>
                <div >
                    <div className='h-44 '>
                        <img className='h-full rounded mx-auto' src="https://img.freepik.com/premium-photo/food-set_266732-17404.jpg?size=626&ext=jpg&ga=GA1.1.1744130285.1664391479&semt=ais" alt="" />
                    </div>
                    <p className='text-3xl font-bold text-lime-500 my-3'>Select Food</p>
                    <p className='mx-10 '>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aut, veniam magni? Ipsam ratione quae, facere provident repellendus magnam vitae eveniet?</p>
                </div>
                <div>
                    <div className='h-44'>
                        <img className='h-full rounded mx-auto' src="https://st2.depositphotos.com/3662505/5815/i/450/depositphotos_58152667-stock-photo-pizzeria.jpg" alt="" />
                    </div>
                    <p className='text-3xl font-bold text-lime-500 my-3'>Place Order</p>
                    <p className='mx-10'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Velit eaque minus possimus itaque facere eum porro laudantium magnam ipsum quod!</p>
                </div>
                <div>
                    <div className='h-44'>
                        <img className='h-full rounded mx-auto' src="https://st5.depositphotos.com/27518956/62659/i/450/depositphotos_626598068-stock-photo-close-view-delivery-man-blue.jpg" alt="" />
                    </div>
                    <p className='text-3xl font-bold text-lime-500 my-3'>Receive Delivery</p>
                    <p className='mx-10'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aut, veniam magni? Ipsam ratione quae, facere provident repellendus magnam vitae eveniet?</p>
                </div>
            </div>
        </div>
    );
};

export default WorkSection;