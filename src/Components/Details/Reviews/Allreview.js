import React, { useEffect, useState } from 'react';

const Allreview = ({ detailsData }) => {
    const [review, setReview] = useState([])

    useEffect(() => {
        fetch(`http://localhost:5000/review?bookId=${detailsData?._id}`)
            .then(res => res.json())
            .then(review => {
                setReview(review)
            })
    }, [detailsData?._id])

    console.log(review)
    return (
        <div className='px-14 py-8'>
            {
                (review.length===0)?
                <h1 className='text-3xl text-red-500'>There has no Review</h1>
                :
                <div>
                {
                    review.map(text => <div className='mb-5'>
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
            }
        </div>
    );
};

export default Allreview;