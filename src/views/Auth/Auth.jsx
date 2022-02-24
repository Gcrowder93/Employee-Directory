import React from 'react';
import { Link } from 'react-router-dom';

function Auth() {
  return (
    <>
      <div>Auth</div>
      <h3>
        this page is the log in page.<br></br>
        should have form with should have 2 inputs (email, pass)<br></br> and 2
        buttons (login, register)<br></br>
        register button takes you to /register<br></br>
        <br></br>
        login button takes you to /home, with protected links to edit profile{' '}
        <br></br>OR to an edit profile page with inputs for birthday and bio
      </h3>
      <Link to="/">Back Home</Link>
    </>
  );
}

export default Auth;
