import { Link } from 'react-router-dom';
import AuthButton from '../../components/AuthButton/AuthButton';
import './Header.css';

export default function Header() {
  return (
    <>
      <header>
        <Link to="/">
          <h3>Acme Employee Directory</h3>
        </Link>
        <p>
          <AuthButton />
          <br></br>
          {/* {user?.email ? `Signed in as ${user?.email}` : 'Not Signed In'} */}
        </p>
        <br></br>
      </header>
    </>
  );
}
