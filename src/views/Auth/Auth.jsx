import './Auth.css';
import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import { signInUser, signUpUser } from '../../services/users';
import UserForm from '../../components/UserForm/UserForm';
import { useUser } from '../../context/UserContext';

export default function Auth({ isSigningUp = false }) {
  const history = useHistory();
  const { setUser } = useUser();

  const handleAuth = async (email, password) => {
    try {
      if (isSigningUp) {
        await signUpUser(email, password);
        history.push(`/confirm-email`);
      } else {
        const response = await signInUser(email, password);
        setUser({ id: response.id, email: response.email });
        history.replace(`/profile`);
      }
    } catch (error) {
      throw error;
    }
  };

  return (
    <section>
      <h2>{isSigningUp ? 'Welcome!' : 'Welcome Back!'}</h2>
      <div>
        <UserForm
          onSubmit={handleAuth}
          label={isSigningUp ? 'Sign Up' : 'Sign In'}
        />
        {isSigningUp ? (
          <p>
            Create Account <Link to="/register">Sign Up</Link>
          </p>
        ) : (
          <p>
            Already a User? <Link to="/login">Sign In</Link>
          </p>
        )}
      </div>
    </section>
  );
}
