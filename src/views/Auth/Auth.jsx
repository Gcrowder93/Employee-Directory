import React from 'react';
import { Link } from 'react-router-dom';

function Auth() {
  return (
    <>
      <div>Auth</div>
      <h3>
        this page is the log in page.<br></br>
        should have form with should have 2 inputs (email, pass)<br></br> and 2
        buttons (login, register)
      </h3>
      <Link to="/">Back Home</Link>
    </>
  );
}

export default Auth;
