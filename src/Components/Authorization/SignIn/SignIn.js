import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../Context/Context';
import ExternalLogIn from '../ExternalLogIn/ExternalLogIn';

const SignIn = () => {
    const {emailSignIn}=useContext(AuthContext)

    const handleEmailSignIn=event=>{
        event.preventDefault()

        const form=event.target 
        const email=form.email.value 
        const password=form.password.value 

        emailSignIn(email,password)
        .then(res=>{
            const user=res.user
            console.log(user)
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
                        <form onSubmit={handleEmailSignIn} className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="text"required name='email' placeholder="email" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" required name='password' placeholder="password" className="input input-bordered" />
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn btn-primary">Sign In</button>
                            </div>
                            <h1>if don't have account <Link className='font-semibold text-cyan-400' to='/signUp'>Sign Up</Link> Now</h1>
                <ExternalLogIn></ExternalLogIn>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SignIn;