import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import SignIn from '../Components/Authorization/SignIn/SignIn';
import SignUp from '../Components/Authorization/SignUp/SignUp';
import Blogs from '../Components/Blogs/Blogs';
import HomePages from '../Components/HomePages/HomePages/HomePages';
import MyReview from '../Components/MyReview/MyReview';
import Main from '../Layouts/Main';


export const projectRouter=createBrowserRouter([
    {
        path:'/',
        element:<Main></Main>,
        children:[
            {
                path:'/',
                element:<HomePages></HomePages>
            },
            {
                path:'/myreview',
                element:<MyReview></MyReview>
            },
            {
                path:'/signIn',
                element:<SignIn></SignIn>
            },
            {
                path:'/signUp',
                element:<SignUp></SignUp>
            },
            {
                path:'/blogs',
                element:<Blogs></Blogs>
            }
        ]
    }
])

const Route = () => {
    return (
        <div>
            
        </div>
    );
};

export default Route;