import React, { useRef } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useSendPasswordResetEmail, useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import Social from '../Shared/Social/Social';
import axios from 'axios';



const Login = () => {
    const navigate = useNavigate()
    const location = useLocation()

    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);
    const [sendPasswordResetEmail, sending] = useSendPasswordResetEmail(auth);
    let errorElement;
    if (error) {
        errorElement = <p className='text-danger text-center'>Error: {error?.message}</p>
    }

    const emailRef = useRef('')
    const passwordRef = useRef('')


    const handleSubmit = async e => {
        e.preventDefault()
        const email = emailRef.current.value;
        const password = passwordRef.current.value;
        signInWithEmailAndPassword(email, password)


        const { data } = await axios.post('http://localhost:5000/login', { email })
        localStorage.setItem('token', data)
        navigate(from, { replace: true });
    }

    const resetPassword = async () => {
        const email = emailRef.current.value;
        await sendPasswordResetEmail(email);
        alert('Sent email');
    }

    let from = location.state?.from?.pathname || "/";
    if (user) {
        // navigate(from, { replace: true });
    }


    return (
        <div className='w-50 mx-auto mt-5'>
            <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Control ref={emailRef} type="email" placeholder="Enter email" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Control ref={passwordRef} type="password" placeholder="Password" />
                </Form.Group>
                <Button variant="primary" type="submit">
                    Submit
                </Button>
            </Form>
            <p>Don't have any account? <Link to={`/register`}>Register</Link></p>
            <p>Forgate passwords? <Link onClick={resetPassword}>Reset</Link></p>
            {errorElement}
            <Social></Social>
        </div>
    );
};

export default Login;