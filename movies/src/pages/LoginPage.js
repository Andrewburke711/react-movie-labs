import React from 'react';
import { auth } from '../firebase-config';
import { signInWithPopup, GoogleAuthProvider } from 'firebase/auth';

const LoginPage = () => {
  const signInWithGoogle = () => {
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider)
      .then((result) => {
        
        const user = result.user;
        console.log(user);
      })
      .catch((error) => {
        
        console.error(error);
      });
  };

  return (
    <div>
      <h1>Login</h1>
      <button onClick={signInWithGoogle}>Sign in with Google</button>
    </div>
  );
};

export default LoginPage;
