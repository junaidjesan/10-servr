import React, { useState } from 'react';
import { AiOutlineDelete } from 'react-icons/ai'
import { MdOutlineBuild } from 'react-icons/md'

const ReviewCart = ({ data }) => {
    const { name, img, review, email ,bookName} = data
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
    }

    
    
        const [user, setUser] = useState([data])
        
        
        const handleUpdate = event => {
            event.preventDefault();
            console.log(user)
            
            fetch(`http://localhost:5000/review/${data._id}`, {
                method: 'PUT',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(user)
            })
            .then(res => res.json())
            .then(data => {
                if (data.acknowledged) {
                    alert('user successfully added');
                    // event.target.reset();
                }
            })
        }

        const handleUpdateValue = event => {
            const field = event.target.name;
            const value = event.target.value;
            const newUser = { ...user }
            newUser[field] = value;
            setUser(newUser)
        }
    
    return (
        <div>
            <div className='gap-8 flex mb-6 items-center'>
                <img className='h-10 w-10 rounded-2xl' src={img} alt="" />
                <h1>{name}</h1>
                <h1 className='w-4/12 items-start'>{review}</h1>
                <h1 className='disable'>{email}</h1>
                <h1 className='disable'>{bookName}</h1>
                <div className='flex gap-7 ml-3 justify-end'>
                    <button><AiOutlineDelete onClick={() => handleDelete(data)} className='w-5 h-5' /></button>
                    {/* <button><MdOutlineBuild className='w-5 h-5' /></button> */}
                    <label htmlFor="my-modal-6"><button><MdOutlineBuild className='w-5 h-5' /></button></label>
                    <input type="checkbox" id="my-modal-6" className="modal-toggle" />
                    <div className="modal modal-bottom sm:modal-middle">
                        <div className="modal-box">
                        <form onSubmit={handleUpdate}>
                            <h1>{name} Please update your review</h1>
                            <textarea onClick={handleUpdateValue} name='name' className="textarea textarea-bordered w-full" placeholder="Type Your Name"></textarea>
                            <textarea onClick={handleUpdateValue} name='review' className="textarea textarea-bordered w-full" placeholder="Type Your Review"></textarea>
                            <button className='btn btn-success modal-action'>Submit</button>
                        </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ReviewCart;