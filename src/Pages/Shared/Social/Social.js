import React from 'react';
import { useSignInWithGithub, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import auth from '../../../firebase.init';

const Social = () => {
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
    const [signInWithGithub, user1, loading1, error1] = useSignInWithGithub(auth);
    const navigate = useNavigate();

    let errorElement;
    if (error || error1) {
        errorElement = <p className='text-danger text-center'>Error: {error?.message} {error1?.message}</p>
    }

    if (user || user1) {
        navigate('/home')
    }
    
    return (
        <div>
            <div className='d-flex align-items-center'>
                <div style={{ height: '1px' }} className='bg-primary w-50'></div>
                <p className='pt-2 px-2'>or</p>
                <div style={{ height: '1px' }} className='bg-primary w-50'></div>
            </div>

            <div>
                <button onClick={() => signInWithGoogle()} className='btn btn-primary mx-auto d-block'>Google Sign In</button>
                <br />
                <button className='btn btn-primary mx-auto d-block'>Facebook Sign In</button>
                <br />
                <button onClick={() => signInWithGithub()} className='btn btn-primary mx-auto d-block'>Github Sign In</button>
            </div>
            {errorElement}
        </div>
    );
};

export default Social;