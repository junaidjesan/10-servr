import React from 'react';
import banner from '../../images/thambnail.jpg'

const Banner = () => {
    return (
        <div>
            <div className="hero h-80 bg-indigo-50 pt-10 " style={{ backgroundImage: `url(${banner})` }}>
                <div className="hero-content text-center bg-opacity-5">
                    <div className=" text-left mt-10 ml-0">
                        <h1 className="text-5xl font-bold">Junaid Jesan's<span className='text-sm'>Diary</span></h1>
                        <p className="py-1 px-1 rounded-md bg-slate-300">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;