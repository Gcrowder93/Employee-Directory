import { Link } from 'react-router-dom';
import AuthButton from '../../components/AuthButton/AuthButton';

export default function Header() {
  return (
    <>
      <header>
        <Link to="/">
          <h3>Home Page (this is a header)</h3>
        </Link>
        <p>
          {/* {user?.email ? `Signed in as ${user?.email}` : 'Not Signed In'} */}
          <AuthButton />
        </p>
        <h5>
          need Sign in button if user is signed out<br></br>
          and 'you are signed in as ($)email with a sign out button if user is
          signed in
        </h5>
      </header>
    </>
  );
}
