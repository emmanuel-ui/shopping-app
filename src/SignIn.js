
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import { auth } from './firebase';
import { signInWithEmailAndPassword, createUserWithEmailAndPassword } from 'firebase/auth';
import './SignIn.css';

function SignIn() {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const signIn = (e) => {
    e.preventDefault();
    signInWithEmailAndPassword(auth, email, password)
      .then((auth) => {
        navigate('/');
      })
      .catch(error => alert(error.message));
  };

  const register = (e) => {
    e.preventDefault();
    createUserWithEmailAndPassword(auth, email, password)
      .then((auth) => {
        navigate('/');
      })
      .catch(error => alert(error.message));
  };

  return (
    <div className='signIn'>
      <Link to='/'>
        <img
          className='signIn_logo'
          src='http://pngimg.com/uploads/amazon/amazon_PNG24.png'
          alt=''
        />
      </Link>

      <div className='signIn_container'>
        <h1>Sign-in</h1>
        <form>
          <h5>Email</h5>
          <input type='text' value={email} onChange={e => setEmail(e.target.value)} />

          <h5>Password</h5>
          <input type='password' value={password} onChange={e => setPassword(e.target.value)} />

          <button type='submit' onClick={signIn} className='signIn_signInButton'>Sign In</button>
        </form>

        <p>
          By signing-in you agree to the AMAZON FAKE CLONE Conditions of Use & Sale. Please see our Privacy Notice, our Cookies Notice and our Interest-Based Ads Notice.
        </p>

        <button onClick={register} className='signIn_registerButton'>Create your Amazon account</button>
      </div>
    </div>
  );
}

export default SignIn;

