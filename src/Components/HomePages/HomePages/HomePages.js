import React from 'react';
import useTitle from '../../../TitleHook/Title';
import AboutMe from '../AboutMe/AboutMe';
import Banner from '../Banner';
import Carosul from '../Carosul';
import NewBooks from '../NewBooks/NewBooks';
import Service from '../Service/Service';
import Stat from '../Stat/Stat';

const HomePages = () => {
    useTitle('Home')
    return (
        <div className='bg-sky-50'>
            <div>
                <Banner></Banner>
            </div>
            <div>
                <Carosul></Carosul>
            </div>
            <div className='mt-5'>
                <NewBooks></NewBooks>
            </div>
            <div className='w-11/12 mt-10 rounded-md mx-auto'>
                <Stat></Stat>
            </div>
            <div>
                <Service></Service>
            </div>
            <div className='mt-10'>
                <h1 className='text-3xl font-bold text-sky-800 text-center font-serif'>About Myself</h1>
                <div className='w-8/12 mx-auto mb-20 mt-5'>
                    <AboutMe></AboutMe>
                </div>
            </div>
        </div>
    );
};

export default HomePages;