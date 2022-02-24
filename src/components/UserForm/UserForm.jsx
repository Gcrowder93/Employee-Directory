import React from 'react';
import { Link } from 'react-router-dom';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';
import './UserForm.css';

function UserForm() {
  let history = useHistory();
  const redirect = () => {
    history.push('/login');
  };
  return (
    <>
      <div>UserForm</div>
      <h2>this page will have a form to register and sign up</h2>
      <h3>
        clicking 'create account' should take user to an 'edit profile page'
        <br></br>
        which will have a bio and bday section
      </h3>

      <form>
        <h4>SIGN UP</h4>
        <label htmlFor="email">Email:</label>
        <input id="email" type="email" name="email" />
        <label htmlFor="password">Password:</label>
        <input id="password" type="password" name="password" />
      </form>
      <button
        style={{
          width: '110px',
        }}
        type="submit"
      >
        Create Account
      </button>
      <button
        onClick={redirect}
        style={{
          width: '115px',
        }}
        type="submit"
      >
        Already a User?
      </button>

      <br></br>
      <Link to="/">Back Home</Link>
    </>
  );
}

export default UserForm;
