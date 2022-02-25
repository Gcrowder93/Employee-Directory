import { Link } from 'react-router-dom';
import { signOutUser } from '../../services/users';
import { useUser } from '../../context/UserContext';
// import { updateProfile } from '../../services/profile';

export default function AuthButton({ className }) {
  const { user, setUser } = useUser();

  return (
    <>
      {user.email ? (
        <button
          style={{
            width: '70px',
          }}
          className={className}
          onClick={async () => {
            await signOutUser();
            setUser({});
          }}
        >
          Sign Out
        </button>
      ) : (
        <Link to="/login" className={className}>
          <button
            className={className}
            style={{
              width: '70px',
            }}
          >
            Sign In
          </button>
        </Link>
      )}
    </>
  );
}

// <button
//   style={{
//     width: '70px',
//   }}
//   className={className}
//   onClick={async () => {
//     await updateProfile();
//     setUser({});
//   }}
// >
//   Sign Out
// </button>;
