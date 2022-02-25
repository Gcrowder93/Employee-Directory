import { Link } from 'react-router-dom';
import image from '../../assets/huh.png';
import './Home.css';
// import UserForm from '../../components/UserForm/UserForm';

export default function Home() {
  return (
    <section>
      <p>
        <Link className="loglink" to="/login">
          Sign in
        </Link>
        <br></br>

        <Link className="reglink" to="/register">
          Register
        </Link>
        <br></br>
        <Link to="/edit">Edit Profile</Link>
        <br></br>
        <Link to="/profile">View Profile</Link>
      </p>

      <h1>Hell World</h1>
      <h3>and here we go</h3>
      <img src={image} height={320} width={320}></img>
    </section>
  );
}
