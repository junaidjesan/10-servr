import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../Context/Context';
import useTitle from '../../../TitleHook/Title';
import ExternalLogIn from '../ExternalLogIn/ExternalLogIn';

const SignUp = () => {
    const {emailSignUp}=useContext(AuthContext)
    useTitle('Sign Up')

    const handleSignUp=event=>{
        event.preventDefault()

        const form=event.target 
        const email=form.email.value 
        const password=form.password.value 
        const url=form.url.value 
        const name=form.name.value 

        form.reset()
        emailSignUp(email,password)
        .then(res=>{
            const user=res.user
            console.log(user)
        })
        .catch(er=>{console.log(er)})
    }
    return (
        <div>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col lg:flex-col">
                    <div className="text-center lg:text-left">
                        <h1 className="text-5xl font-bold">Sign Up now!</h1>
                        <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                    </div>
                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <form onSubmit={handleSignUp} className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input type="text" name='name' placeholder="name" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="text" name='email' required placeholder="email" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Image Url</span>
                                </label>
                                <input type="url" name='url' placeholder="http://" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" required name='password' placeholder="password" className="input input-bordered" />
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn btn-primary">Sign Up</button>
                            </div>
                            <h1>if already have account <Link className='font-semibold text-cyan-400' to='/signIn'>Sign In</Link> Now</h1>
                <ExternalLogIn></ExternalLogIn>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SignUp;