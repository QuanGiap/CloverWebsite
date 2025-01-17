import React, { useState } from 'react';
import firebase from 'firebase/app';
import 'firebase/auth';

const SignUp = () => {
  const [email, setEmail] = useState('');
  
  const handleSignUp = async (e) => {
    e.preventDefault();
    
    const actionCodeSettings = {
      url: 'https://www.example.com/finishSignUp?cartId=1234',
      handleCodeInApp: true,
    };

    try {
      await firebase.auth().sendSignInLinkToEmail(email, actionCodeSettings);
      // Save the email locally to complete sign-up
      window.localStorage.setItem('emailForSignIn', email);
      alert('Sign-up email sent! Please check your inbox.');
    } catch (error) {
      console.error('Error sending email link:', error);
    }
  };

  return (
    <div>
      <h2>Sign Up</h2>
      <form onSubmit={handleSignUp}>
        <input 
          type="email" 
          value={email} 
          onChange={(e) => setEmail(e.target.value)} 
          placeholder="Enter your email" 
          required
        />
        <button type="submit">Sign Up</button>
      </form>
    </div>
  );
};

export default SignUp;
