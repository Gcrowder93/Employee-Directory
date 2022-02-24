import { Link, Redirect } from 'react-router-dom';
import image from '../../assets/huh.png';
import './Home.css';
import UserForm from '../../components/UserForm/UserForm';

export default function Home() {
  return (
    <section>
      <p>
        <Link className="loglink" to="/login">
          sign in ( /login)
        </Link>
        <br></br>

        <Link className="reglink" to="/register">
          register ( /userform)
        </Link>
        <br></br>
        <Link to="/edit">edit ( /edit</Link>
      </p>

      <h1>Hell World</h1>
      <h3>and here we go</h3>
      <img src={image} height={320} width={320}></img>
    </section>
  );
}
