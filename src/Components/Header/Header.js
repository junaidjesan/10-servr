import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Context/Context';

const Header = () => {
    const {logOut,user}=useContext(AuthContext)

    const handleLogOut=()=>{
        logOut()
        .then(res=>{})
        .catch(er=>{})
    }

    return (
        <div className=' border-b-2 border-b-cyan-800'>
            <div className="navbar bg-base-100 w-11/12 mx-auto">
                <div className="navbar-start">
                    <div className='gap-6 md:flex hidden '>
                        <div><Link className='font-semibold' to='/'>Home</Link></div>
                        <div><Link className='font-semibold' to='/myReview'>My Reviews</Link></div>
                        <div><Link className='font-semibold' to='/blogs'>Blogs</Link></div>
                    </div>
                    <div className="dropdown md:hidden">
                        <label tabIndex={0} className="btn btn-primary w-4 h-3 btn-circle">
                            <svg xmlns="http://www.w3.org/2000/svg" className=" w-2" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h7" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                            <li><Link to='/'>Home</Link></li>
                            <li><Link to='/myReview'>My Reviews</Link></li>
                            <li><Link to='/blogs'>Blogs</Link></li>
                        </ul>
                    </div>
                </div>
                <div className="navbar-center ">
                    <Link to='/' className="font-mono hover:text-4xl text-xl hover:text-cyan-500 hover:font-semibold">Junaid Jesan's<span className='text-sm line-through'>Diary</span></Link>
                </div>
                <div className="navbar-end">
                    {   !user?.uid?
                        <Link to='/signIn'>Sign In</Link>
                    :
                    <Link onClick={handleLogOut}>Sign Out</Link>
                    }
                </div>
            </div>
        </div>
    );
};

export default Header;