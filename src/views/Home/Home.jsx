import { Link, Redirect } from 'react-router-dom';
import { useUser } from '../../context/UserContext';

export default function Home() {
  const auth = useUser();
  if (auth.user.email) return <Redirect to="/notes" />;

  return (
    <section>
      <h1>Welcome</h1>
      <p>
        Please <Link to="/login">sign in</Link> or
        <Link to="/register">register.</Link>
      </p>
    </section>
  );
}
