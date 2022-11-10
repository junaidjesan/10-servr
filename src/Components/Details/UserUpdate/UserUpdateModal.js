import React, { useState } from 'react';

const UserUpdateModal = ({ isVisible, onclose,data }) => {
    const [user,setUser]=useState(data)
    
    const handleOnUpdate=event=>{
        event.preventDefault()

        
        fetch(`http://localhost:5000/userreview/${data._id}`,{
            method:'PUT',
            headers:{
                'content-type':'application/json'
            },
            body: JSON.stringify(user)
        })
        .then(res=>res.json())
        .then(data=>{
            console.log(data)
        })
    }
    const handleOnchange=event=>{
        const field=event.target.name;
        const value=event.target.value;
        const newUser={...user}
        newUser[field]=value
        setUser(newUser)
    }
    if (!isVisible) return null;
    return (
        <div>
            <div className='fixed inset-0 bg-black bg-opacity-25 backdrop-blur-sm flex justify-center items-center'>
                <div className='bg-white'>
                    <form onSubmit={handleOnUpdate}  className="card-body py-10">
                        <div className="fm-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input type="text" onBlur={handleOnchange} required name='name' placeholder="Name" className="input input-bordered" />
                        </div>
                        <div className="fm-control">
                            <label className="label">
                                <span className="label-text">Reviews</span>
                            </label>
                            <input type="text" onBlur={handleOnchange} required name='review' placeholder="Valuable Review" className="input input-bordered" />
                        </div>
                    <div className='text-white '>
                        <button className='px-2 py-2 mr-5 rounded-md bg-sky-700'>Update</button>
                        <button onClick={() => onclose()} className='px-2 py-2 rounded-md bg-sky-700'>Cancel</button>
                    </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default UserUpdateModal;