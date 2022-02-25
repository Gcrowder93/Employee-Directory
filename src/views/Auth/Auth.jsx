import './Auth.css';
import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import { signInUser, signUpUser } from '../../services/users';
import UserForm from '../../components/UserForm/UserForm';
import { useUser } from '../../context/UserContext';
import { updateProfile } from '../../services/profile';

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
      <h2>
        {isSigningUp
          ? 'Welcome! Please create an account'
          : 'Welcome Back, Please Sign In '}
      </h2>
      <div>
        <UserForm
          className="userform"
          onSubmit={handleAuth}
          label={isSigningUp ? <mark>Sign Up</mark> : <mark>Sign In</mark>}
        />
        {isSigningUp ? (
          <p>
            Already a User? <Link to="/login">Sign In</Link>
          </p>
        ) : (
          <p>
            Not Registered? <Link to="/register">Sign Up</Link>
          </p>
        )}
      </div>
    </section>
  );
}
