import React from 'react';
import useTitle from '../../TitleHook/Title';

const MyReview = () => {
    useTitle('My-reviews')
    return (
        <div>
            <h1>this is review page</h1>
        </div>
    );
};

export default MyReview;