import React from 'react';
import { useLoaderData } from 'react-router-dom';
import BooksCart from './BooksCart';

const Books = () => {
    const loaderservices = useLoaderData()

    return (
        <div>
            <h1 className='text-3xl py-8'>Here are my creations <span>I wish you will be happy to read</span></h1>
            <div className='grid md:grid-cols-3 justify-center mx-auto'>
                {
                    loaderservices.map(books => <BooksCart key={books._id} books={books}></BooksCart>)
                }
            </div>
        </div>
    );
};

export default Books;