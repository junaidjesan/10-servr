import React from 'react';
import useTitle from '../../TitleHook/Title';

const Blogs = () => {
    useTitle('Blogs')
    return (
        <div className=' py-8'>
            <div className="card w-8/12 mb-5 mx-auto shadow-xl">
                <div className="card-body">
                    <h2 className="card-title">Difference between SQL and NoSQL</h2>
                    <p className='text-start'>SQL databases or Structured Query Language, as they are known, are used for defining the data and manipulating them. It is a powerful as well as a flexible language designed to deal with databases.NoSQL databases are designed in such a way that they can deal with unstructured data, and do not require schemas like SQL. It is also very dynamic in nature and allows the storage of data in many forms. </p>
                </div>
            </div>
            <div className="card w-8/12 mb-5 mx-auto shadow-xl">
                <div className="card-body">
                    <h2 className="card-title">What is JWT, and how does it work?</h2>
                    <p className='text-start'>JSON Web Token, is an open standar set of claims to share security information or authorization/authentication requests between a client and a server. Each JWT contains encoded JSON objects. JWTs are signed using a cryptographic algorithm by the token’s issuer to ensure that No one could alter the claims after the token is issued and later can be used by the receiving party to verify the token.</p>
                </div>
            </div>
            <div className="card w-8/12 mb-5 mx-auto shadow-xl">
                <div className="card-body">
                    <h2 className="card-title">What is the difference between javascript and NodeJS?</h2>
                    <p className='text-start'>JavaScript is a renowned programming language that is used for developing dynamic and web pages. .Node.js is a precise open-source and cross-platform JavaScript that aids real time network app development. It is event-driven and non-blocking for building scalable server side JavaScript apps.</p>
                </div>
            </div>
            <div className="card w-8/12 mb-5 mx-auto shadow-xl">
                <div className="card-body">
                    <h2 className="card-title">How does NodeJS handle multiple requests at the same time?</h2>
                    <p className='text-start'>Node.Js is commonly refered as single threaded for its default CPU-operations excecution.Then add a new task and repeat. At some point you'll notice two groups.  therefore it won't be very wise using it for intensive CPU operations, but very efficient when it comes to operations.Then add a new task and repeat. At some point you'll notice two groups. </p>
                </div>
            </div>
        </div>
    );
};

export default Blogs;