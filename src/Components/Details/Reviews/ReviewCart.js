import React, { useState } from 'react';
import { AiOutlineDelete } from 'react-icons/ai'
import { MdOutlineBuild } from 'react-icons/md'

const ReviewCart = ({ data }) => {
    const { name, img, review, email } = data
    const [remaining, setRemaining] = useState([])

    const handleDelete = datas => {
        const permition = window.confirm(`Are you sure to delete`)
        if (permition) {
            fetch(`http://localhost:5000/review/${datas._id}`, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(deleteReview => {
                    if (deleteReview.deletedCount > 0) {
                        alert('Successfully Deleted')
                        const remainingReview = remaining.filter(usr => usr._id !== datas._id)
                        setRemaining(remainingReview)
                    }
                })
        }
        console.log(remaining)
    }
    return (
        <div>
            <div className='gap-8 flex mb-6 items-center'>
                <img className='h-10 w-10 rounded-2xl' src={img} alt="" />
                <h1>{name}</h1>
                <h1 className='w-4/12 items-start'>{review}</h1>
                <h1 className='disable'>{email}</h1>
                <div className='flex gap-7 ml-3'>
                    <button><AiOutlineDelete onClick={() => handleDelete(data)} className='w-5 h-5' /></button>
                    <button><MdOutlineBuild className='w-5 h-5' /></button>
                </div>
            </div>
        </div>
    );
};

export default ReviewCart;