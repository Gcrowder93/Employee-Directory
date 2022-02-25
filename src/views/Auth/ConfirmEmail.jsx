import { Link } from 'react-router-dom';
export default function ConfirmEmail() {
  return (
    <>
      <h1>Registration Successful!</h1>
      <p>
        Please check your email in order to confirm your account and sign in.
      </p>
      <Link to="/edit">
        Continue(i want this to take you to /edit but it wont)
      </Link>
    </>
  );
}
