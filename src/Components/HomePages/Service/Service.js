import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import ServicesCart from './ServicesCart';

const Service = () => {
    const serviceData = useLoaderData()
    return (
        <div className='my-10'>
            <h1 className='text-center text-4xl text-clip font-bold text-sky-800 '>Best 3 For You</h1>
            <div className='grid lg:grid-cols-3 md:grid-cols-2 gap-5 mt-16 justify-center'>
                {
                    serviceData.map(service => <ServicesCart key={service._id} service={service} ></ServicesCart>)
                }
            </div>
            <div className='grid md:justify-items-end'>
                <Link to='books' className='px-4 py-2 hover:shadow-lg font-bold md:mr-16 rounded-lg bg-cyan-600'>See All</Link>
            </div>
        </div>
    );
};

export default Service;