import React from 'react';
import { Link } from 'react-router-dom';
import { useHistory } from 'react-router-dom';
import './Auth.css';

function Auth() {
  const history = useHistory();
  const redirect = () => {
    history.push('/register');
  };
  return (
    <>
      <div>Auth</div>
      <h3>
        this page is the log in page.[/]<br></br>
        should have form with should have 2 inputs (email, pass)[/]<br></br> and
        2 buttons (login, register) [/]<br></br>
        <br></br>
        login button takes you to /home, with protected links to edit profile{' '}
        <br></br>OR to an edit profile page with inputs for birthday and bio
      </h3>

      <form>
        <h4>LOG IN</h4>
        <label htmlFor="email">Email:</label>
        <input id="email" type="email" name="email" />
        <label htmlFor="password">Password:</label>
        <input id="password" type="password" name="password" />
      </form>
      <button
        style={{
          width: '55px',
        }}
        type="submit"
      >
        Log In
      </button>
      <button
        onClick={redirect}
        style={{
          width: '88px',
        }}
        type="submit"
      >
        Not a User?
      </button>

      <br></br>
      <Link to="/">Back Home</Link>
    </>
  );
}
<Link to="/">Back Home</Link>;

export default Auth;
