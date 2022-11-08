import React from 'react';
import { Link } from 'react-router-dom';
import 'react-photo-view/dist/react-photo-view.css';
import { PhotoProvider, PhotoView } from 'react-photo-view';

const ServicesCart = ({ service }) => {
    const {img,price,name,rating,details,_id}=service
    const sliceDetails=details.slice(0,100)
    const sliceName=name.slice(0,10)
    return (
        <div>
            <div className="card w-96 mb-4 mx-auto bg-base-100 shadow-xl">
                {/* <figure><img className='h-72' src={img} alt="Shoes" /></figure> */}
                <PhotoProvider>
                    <div className="foo">
                            <PhotoView src={img}>
                                <img className='h-72' src={img} alt="" />
                            </PhotoView>
                    </div>
                </PhotoProvider>
                <div className="card-body">
                    <h2 className="card-title h-16">
                        {sliceName}
                        <div className="badge badge-secondary">{rating}</div>
                        <div className="badge badge-secondary">${price}</div>
                    </h2>
                    <p className='text-justify'>{sliceDetails}...</p>
                    <div className="card-actions justify-end">
                        <div className="badge badge-outline"><Link to={`/all-services/${_id}`}>View Details</Link></div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ServicesCart;