import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Reviews from './Reviews/Reviews';
import { BsStar } from 'react-icons/bs'
import useTitle from '../../TitleHook/Title';
import Allreview from './Reviews/Allreview';

const Details = () => {
    const detailsData=useLoaderData()
    const {img,name,price,rating,details}=detailsData
    useTitle('details')

    return (
        <div>
            <div className='shadow-md mb-10 p-5 bo'>
                <figure><img className='w-10/12 mx-auto h-96 mb-10 object-cover' src={img} alt="" /></figure>
                <div className='flex mx-10'>
                    <div className='w-4/12 text-start'>
                        <h1 className='font-bold text-xl'>Book Name:- {name}</h1>
                        <h1 className='font-bold text-xl'>Price:- ${price}</h1>
                        <h1 className='font-bold text-xl flex my-auto'>Rating:- {rating}  <BsStar className='my-auto'/></h1>

                    </div>
                    <div className='w-8/12 text-justify '>
                        {details}
                    </div>
                </div>
            </div>
            <div className='flex w-11/12 mx-auto gap-8'>
                <div className='w-4/12'>
                    <Reviews></Reviews>
                </div>
                <div className='bg-sky-50 w-8/12 rounded-md shadow-xl mb-5'>
                    <Allreview></Allreview>
                </div>
            </div>
        </div>
    );
};

export default Details;