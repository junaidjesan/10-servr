import React from 'react';
import img from '../../favicon/icon-big.png'
import { BsFacebook, BsGoogle, BsTwitter } from 'react-icons/bs'

const Footer = () => {
    return (
        <div>
            <footer className="footer footer-center p-10 bg-sky-800 border-t-cyan-800 border-t-2 text-primary-content">
                <div>
                    <img className='w-15 h-16 bg-white rounded-md' src={img} alt="" />
                    <p className="font-bold text-white">
                        Junaid Jesan's Diary<br />Providing reliable tech since 1992 <br />
                    <p>Copyright © 2022 - All right reserved</p>
                    </p>
                </div>
                <div>
                    <div className="grid grid-flow-col gap-4">
                        <BsFacebook className='w-6 h-6 text-white'></BsFacebook>
                        <BsGoogle className='w-6 h-6 text-white'></BsGoogle>
                        <BsTwitter className='w-6 h-6 text-white'></BsTwitter>
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default Footer;