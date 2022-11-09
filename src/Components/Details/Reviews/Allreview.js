import React, { useState } from 'react';

const Allreview = () => { 
    const [review,setReview]=useState([])

    fetch('http://localhost:5000/review')
    .then(res=>res.json())
    .then(review=>setReview(review))

    return (
        <div className='px-14 py-8'>
            <div>
                {
                    review.map(text=> <div className='mb-5'>
                    <div className='flex gap-4 '>
                        <img className='h-7 rounded-lg w-7' src={text.img} alt="" />
                        <h1 className='text-20 font-bold'>{text.name}</h1>
                    </div>
                    <div className='py-3 px-2 border-2 rounded-lg mt-2'>
                        <h1 className='text-start'>{text.review}</h1>
                    </div>
                    </div>)
                }
            </div>
        </div>
    );
};

export default Allreview;