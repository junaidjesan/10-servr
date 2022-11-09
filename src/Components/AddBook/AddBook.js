import React from 'react';
import useTitle from '../../TitleHook/Title';

const AddBook = () => {
    useTitle('Add-books')

    const handleOnBlur=event=>{
        event.preventDefault()
    }

    const handleOnSubmit=event=>{
        event.preventDefault()
        const fm=event.target 
        const name=fm.name.value 
        const details=fm.details.value
        const price=fm.price.value
        const sell=fm.sell.value 
        const img=fm.img.value 
        const rating=fm.rating.value 

        const pushData={
            img,
            name,
            sell,
            price,
            rating,
            details,
        }
        fm.reset()

        fetch('http://localhost:5000/all-services',{
            method: 'POST',
            headers:{
                'content-type': 'application/json'
            },
            body: JSON.stringify(pushData)
        })
        .then(res=>res.json())
        .then(newData=>{
            alert('Successfully added')
            console.log(newData)
        })
    }


    return (
        <div>
            <h1 className='text-center text-3xl font-semibold pt-8'>Is anything New on Your Hand ?</h1>
            <form onSubmit={handleOnSubmit}>
                <div className="form-control w-full py-20 gap-5">
                    <div className='w-full md:w-7/12 mx-auto'>
                    <input onBlur={handleOnBlur} type="text" required name='name' placeholder="Your Book Name" className="input input-bordered w-full " />
                    <input onBlur={handleOnBlur} type="text" required name='details' placeholder="Description" className="input input-bordered w-full " />
                    <input onBlur={handleOnBlur} type="url" required name='img' placeholder="http://" className="input input-bordered w-full " />
                    </div>
                    <div className='md:flex mx-auto'>
                    <input onBlur={handleOnBlur} type="number" required name='price' placeholder="price $$" className="input input-bordered w-full max-w-xs" />
                    <input onBlur={handleOnBlur} type="number" required name='sell' placeholder="Available Total" className="input input-bordered w-full max-w-xs" />
                    <input onBlur={handleOnBlur} type="number" required name='rating' placeholder="Rating" className="input input-bordered w-full max-w-xs" />
                    </div>
                <button className='py-3 px-2 w-4/12 mx-auto border-separate bg-cyan-800 rounded-lg text-white'>Add New</button>
                </div>
            </form>
        </div>
    );
};

export default AddBook;