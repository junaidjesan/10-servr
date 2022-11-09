import React, { useState } from 'react';
import NewBookCart from './NewBookCart';

const NewBooks = () => {
    const [newestBook,setNewestBook]=useState([])

    fetch('http://localhost:5000/new-books')
    .then(res=>res.json())
    .then(book=>setNewestBook(book))
    return (
        <div>
            <h1 className='text-center text-4xl text-clip font-bold text-sky-800 '>Newest 3 For You</h1>
            <div className='grid lg:grid-cols-3 md:grid-cols-2 gap-5 mt-16 justify-center'>
                {
                    newestBook.map(newbook=><NewBookCart newbook={newbook} key={newbook._id}></NewBookCart>)
                }
            </div>
        </div>
    );
};

export default NewBooks;