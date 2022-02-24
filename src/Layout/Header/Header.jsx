import { Link } from 'react-router-dom';
import styles from './Header.css';

export default function Header() {
  return (
    <>
      <header className={styles.header}>
        <Link to="/">
          <h3>Home Page (this is a header)</h3>
        </Link>
        <h5>
          need Sign in button if user is signed out<br></br>
          and 'you are signed in as ($)email with a sign out button if user is
          signed in
        </h5>
      </header>
    </>
  );
}
