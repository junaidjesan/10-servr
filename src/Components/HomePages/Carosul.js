import React from 'react';
import carosul from '../../images/carosul1.jpg'
import carosu2 from '../../images/carosul2.jpg'
import carosu3 from '../../images/carosul3.jpg'
import carosu4 from '../../images/carosul4.jpg'

const Carosul = () => {
    return (
        <div>
            <div className=''>
                <div className='bg-sky-50 md:flex rounded-xl py-5 md:gap-24 lg:gap-24'>
                    <div className='md:w-5/12 lg:w-6/12 md:mt-7 md:ml-5'>
                        <div className="carousel">
                            <div id="item1" className="carousel-item">
                                <img src={carosul} className="h-48 w-full" />
                            </div>
                            <div id="item2" className="carousel-item">
                                <img src={carosu2} className="h-48 w-full" />
                            </div>
                            <div id="item3" className="carousel-item">
                                <img src={carosu3} className="h-48 w-full" />
                            </div>
                            <div id="item4" className="carousel-item">
                                <img src={carosu4} className="h-48 w-full" />
                            </div>
                        </div>
                        <div className="flex justify-center w-full py-2 gap-2">
                            <a href="#item1" className="btn btn-xs">1</a>
                            <a href="#item2" className="btn btn-xs">2</a>
                            <a href="#item3" className="btn btn-xs">3</a>
                            <a href="#item4" className="btn btn-xs">4</a>
                        </div>
                    </div>
                    <div className='md:w-4/12 px-4 md:mt-24 md:mr-3 text-justify md:ml-7'>
                        <h1>Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus, magni ipsum et labore laboriosam voluptatibus, placeat cumque ab beatae, ipsa facere voluptate mollitia modi dignissimos rem iusto molestias cum a? Delectus est magnam nostrum possimus quasi. Suscipit, dolore quas. Deleniti modi, vitae qui non hic provident, ullam eius libero quaerat suscipit voluptate sed quisquam eaque quod aspernatur natus laboriosam neque? Nobis sequi voluptate ea ex laudantium optio inventore quam nostrum eaque quasi odit, unde illo itaque tempore dicta iure error animi ipsum ab. Dignissimos ullam dolores ab voluptatum quisquam, nemo vero et dolorem minima voluptatibus vel, iure, laborum fugit provident.</h1>
                    </div>
                </div>
            </div>
            <hr className='border-2 border-b-cyan-800 w-6/12 mx-auto my-8' />
        </div>
    );
};

export default Carosul;