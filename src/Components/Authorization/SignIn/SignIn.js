import React, { useContext } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../Context/Context';
import useTitle from '../../../TitleHook/Title';
import ExternalLogIn from '../ExternalLogIn/ExternalLogIn';

const SignIn = () => {
    const {emailSignIn}=useContext(AuthContext)
    useTitle('Sign In')
    // const navigate=useNavigate()
    // const location=useLocation()

    // const form=location.state?.from?.pathname||'/'

    const handleEmailSignIn=event=>{
        event.preventDefault()

        const fm=event.target 
        const email=fm.email.value 
        const password=fm.password.value 

        emailSignIn(email,password)
        .then(res=>{
            const user=res.user
            console.log(user)
            // navigate(form,{replace:true})
        })
        .catch(er=>{console.log(er)})
    }

    return (
        <div>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col">
                    <div className="text-center lg:text-left">
                        <h1 className="text-5xl font-bold">Sign In now!</h1>
                        <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                    </div>
                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <fm onSubmit={handleEmailSignIn} className="card-body">
                            <div className="fm-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="text"required name='email' placeholder="email" className="input input-bordered" />
                            </div>
                            <div className="fm-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" required name='password' placeholder="password" className="input input-bordered" />
                            </div>
                            <div className="fm-control mt-6">
                                <button className="btn btn-primary">Sign In</button>
                            </div>
                            <h1>if don't have account <Link className='font-semibold text-cyan-400' to='/signUp'>Sign Up</Link> Now</h1>
                <ExternalLogIn></ExternalLogIn>
                        </fm>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SignIn;