import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Register.css'
import { useCreateUserWithEmailAndPassword, useUpdateProfile } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import Social from '../Shared/Social/Social';
import { async } from '@firebase/util';

const Register = () => {
    const [agree, setAgree] = useState(false);

    const navigate = useNavigate();
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useCreateUserWithEmailAndPassword(auth, { sendEmailVerification: true });

    const [updateProfile, updating, error1] = useUpdateProfile(auth);

    const handleRegister = async (e) => {
        e.preventDefault()
        const name = e.target.name.value;
        const email = e.target.email.value;
        const password = e.target.password.value;

        // const agree = e.target.terms.checked;
        await createUserWithEmailAndPassword(email, password);
        await updateProfile({ displayName : name });
        navigate('/home')

    }
    return (
        <div className='register-form'>
            <h2 style={{ textAlign: 'center' }}>Please Register</h2>
            <form onSubmit={handleRegister}>
                <input type="text" name="name" id="" placeholder='Your Name' />

                <input type="email" name="email" id="" placeholder='Email Address' required />

                <input type="password" name="password" id="" placeholder='Password' required />

                <input onClick={() => setAgree(!agree)} type="checkbox" name="terms" id="terms" />
                {/* <label className={agree ? 'ps-2 text-primary' : 'ps-2 text-danger'} htmlFor="terms">Accept terms and condition</label> */}
                <label className={`ps-2 ${agree ? 'text-primary' : 'text-danger'}`} htmlFor="terms">Accept terms and condition</label>

                <input type="submit" disabled={!agree} value="Register" />
            </form>
            <p>Already have an account? <Link to="/login" className='text-danger pe-auto text-decoration-none'>Please Login</Link> </p>
            <Social></Social>
        </div>
    );
};

export default Register;