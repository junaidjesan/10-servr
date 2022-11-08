import React from 'react';
import { Link } from 'react-router-dom';

const Rout404 = () => {
    return (
        <div className='mt-20'>
            <h1 className='text-4xl text-sky-700 font-bold'>You are on the wrong way</h1>
            <h1 className='text-3xl'>Please Type Valid Address</h1>
            <h1 className='text-6xl text-pink-800'>OR</h1>
            <h1 className='text-3xl'>Go <Link className='font-bold' to='/'>Home</Link></h1>
        </div>
    );
};

export default Rout404;