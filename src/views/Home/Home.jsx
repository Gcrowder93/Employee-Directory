import { Link, Redirect } from 'react-router-dom';
import image from '../../assets/huh.png';
import './Home.css';
import UserForm from '../../components/UserForm/UserForm';

export default function Home() {
  return (
    <section>
      <p>
        Please{' '}
        <Link className="loglink" to="/login">
          sign in ( /login)
        </Link>{' '}
        or
        <Link className="reglink" to="/UserForm">
          {' '}
          register ( /userform)
        </Link>
        .
      </p>

      <h1>Hell World</h1>
      <h3>and here we go</h3>
      <img src={image} height={320} width={320}></img>
    </section>
  );
}
