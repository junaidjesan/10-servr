import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../Context/Context';

const Reviews = () => {
    const { user } = useContext(AuthContext)
    const { displayName, photoURL } = user
    console.log(user)
    
    const handleOnBlur = event => {
        event.preventDefault()
    }
    const handleOnSubmit = event => {
        event.preventDefault()
        const review = event.target.review.value
        
        // if(user.displayName){
        //     name:displayName,
        // }
        const reviewData= {
            img: photoURL,
            name:displayName,
        
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
            .then(data => {
                if (data.acknowledged) {
                    event.target.reset()
                }
            })
    }


    return (
        <div className='mb-10'>
            {
                user?.uid ?
                    <div>
                        <form onSubmit={handleOnSubmit}>
                            <textarea onBlur={handleOnBlur} name='review' className="textarea textarea-bordered w-full" placeholder="Type Your Review"></textarea>
                            <button className='btn btn-success'>Submit</button>
                        </form>
                    </div>
                    :
                    <textarea name='review' className="textarea textarea-bordered w-full" placeholder="Type Your Review"> <h1>Sign In first</h1></textarea>
                    
            }
        </div>
    );
};

export default Reviews;