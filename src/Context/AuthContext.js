import React, { createContext } from 'react';
import app from '../firebase.config';
import {getAuth,GoogleAuthProvider,FacebookAuthProvider} from 'firebase/auth'


export const DiaryContext=createContext()
const auth=getAuth(app)

const AuthContext = ({children}) => {

    const googleProvider=new GoogleAuthProvider()
    const facebookProvider=new FacebookAuthProvider()

    const googleSignIn=()=>{
        signInWithPo
    }

    const contextValue={

    }
    return (
        <div>
            <DiaryContext.Provider value={contextValue}>
                {children}
            </DiaryContext.Provider>
        </div>
    );
};

export default AuthContext;