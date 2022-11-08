import React from 'react';

const Reviews = () => {
    return (
        <div>
            <div>
                <textarea className="textarea textarea-bordered w-full" placeholder="Type Your Review"></textarea>
                <button className='btn btn-success'>Submit</button>
            </div>
        </div>
    );
};

export default Reviews;