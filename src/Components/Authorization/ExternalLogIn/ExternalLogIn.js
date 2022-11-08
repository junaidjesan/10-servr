import React, { useContext } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../Context/Context';

const ExternalLogIn = () => {
    const {facebookSignIn,googleSignIn}= useContext(AuthContext)

    const navigate=useNavigate()
    const location=useLocation()

    const from=location.state?.from?.pathname||'/'

    const handleGoogle=()=>{
        googleSignIn()
        .then(res=>{
            const user=res.user
            navigate(from,{replace:true})
        })
        .catch(er=>{})
    }

    const handleFacebook=()=>{
        facebookSignIn()
        .then(res=>{
            const user=res.user
            navigate(from,{replace:true})
        })
        .catch(er=>{})
    }

    return (
        <div>
            <div>
                <Link onClick={handleGoogle}>Google </Link>
                <Link onClick={handleFacebook}>Facebook </Link>
            </div>
        </div>
    );
};

export default ExternalLogIn;