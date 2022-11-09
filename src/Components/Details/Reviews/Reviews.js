import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../Context/Context';

const Reviews = () => {
    const { user } = useContext(AuthContext)
    console.log(user)
    const { displayName, photoURL,email } = user|| {}
    

    const handleOnBlur = event => {
        event.preventDefault()
    }
    const handleOnSubmit = event => {
        event.preventDefault()
        const review = event.target.review.value
        
                const reviewData= {
                    img: photoURL,
                    name:displayName,
                    email: email,
                    review,
                    }
        event.target.reset()

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
                }
            })
    }


    return (
        <div className='mb-10'>
            {
                user?.uid?
                    <div>
                        <form onSubmit={handleOnSubmit}>
                            <textarea onBlur={handleOnBlur} name='review' className="textarea textarea-bordered w-full" placeholder="Type Your Review"></textarea>
                            <button className='btn btn-success'>Submit</button>
                        </form>
                    </div>
                    :
                    <h1 className='text-xl font-bold rounded-xl border-2 py-5 px-2'>To give Review, Please <Link className='text-sky-500' to='/signIn'>Log In</Link> First</h1>
                    
            }
        </div>
    );
};

export default Reviews;