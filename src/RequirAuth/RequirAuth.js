import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Navigate, useLocation } from 'react-router-dom';
import auth from '../firebase.init';
import Loading from '../Pages/Shared/Loading/Loading';

const RequirAuth = ({children}) => {
    const [user, loading] = useAuthState(auth);
    const location = useLocation()
    if(loading){
        return <Loading></Loading>
    }
    if(!user){
        return <Navigate to="/login" state={{ from: location }} />;
    }
    if(!user.emailVerified){
        return <div>
            <h3 className='text-danger'>Your email is not verified</h3>
            <p>Please Verify your email</p>
            <button>Send Verification</button>
        </div>
    }
    
    return children;
};

export default RequirAuth;