import React, { useContext, useEffect } from 'react';
import { AuthContext } from '../../../Context/Context';

const Reviews = () => {
    const { user } = useContext(AuthContext)
    console.log(user)
    
            const handleOnBlur = event => {
            event.preventDefault()
        }
        
        
        const handleOnSubmit=event=>{
            event.preventDefault()
            const review=event.target.review.value
            
            const reviewData={
                review,
            }
            
        fetch('http://localhost:5000/review', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(reviewData)
        })
            .then(res => res.json())
            .then(data =>{
                if(data.acknowledged){
                    event.target.reset()
                }
            })
}


    return (
        <div>
            <div>
                <form onSubmit={handleOnSubmit}>
                    <textarea onBlur={handleOnBlur} name='review' className="textarea textarea-bordered w-full" placeholder="Type Your Review"></textarea>
                    <button className='btn btn-success'>Submit</button>
                </form>
            </div>
        </div>
    );
};

export default Reviews;