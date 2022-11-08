import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../Context/Context';

const ExternalLogIn = () => {
    const {facebookSignIn,googleSignIn}= useContext(AuthContext)

    const handleGoogle=()=>{
        googleSignIn()
        .then(res=>{
            const user=res.user
        })
        .catch(er=>{})
    }

    const handleFacebook=()=>{
        facebookSignIn()
        .then(res=>{
            const user=res.user
            console.log(user)
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