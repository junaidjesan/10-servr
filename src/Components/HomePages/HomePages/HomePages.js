import React from 'react';
import Banner from '../Banner';
import Carosul from '../Carosul';
import Service from '../Service/Service';

const HomePages = () => {
    return (
        <div>
            <div>
                <Banner></Banner>
            </div>
            <div>
                <Carosul></Carosul>
            </div>
            <div>
                <Service></Service>
            </div>
        </div>
    );
};

export default HomePages;