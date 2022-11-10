import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../Context/Context';
import useTitle from '../../TitleHook/Title';
import ReviewCart from '../Details/Reviews/ReviewCart';

const MyReview = () => {
    useTitle('My-reviews')
    const { user } = useContext(AuthContext)
    const [myreview, setMyreview] = useState([])

    useEffect(() => {
        fetch(`http://localhost:5000/userreview?email=${user?.email}`)
            .then(res => res.json())
            .then(review => setMyreview(review))
    }, [user?.email])

    if (myreview.length === 0) {
        return (
            <h1 className='text-xl py-10'>You do not have any review <br /> <span>Please submit your valuable review</span></h1>
        )
    }
    else return(
        <div>
            <h1 className='text-xl font-bold'>Here is review page</h1>
            <div className=''>
                <div className=" w-11/12 mx-auto py-5 px-3">
                <div className='gap-8 flex mb-6 items-center bg-slate-400 py-1 rounded px-2'>
                <h1>User</h1>
                <h1>Name</h1>
                <h1 className='w-4/12 items-start'>Review</h1>
                <h1 className='disable w-1/12'>Email</h1>
                <h1 className='disable'>Book Name</h1>
                </div>
                    {
                        myreview.map(data => <ReviewCart data={data} key={data._id}></ReviewCart>)
                    }
            </div>
            </div>
        </div>
    )

};

export default MyReview;