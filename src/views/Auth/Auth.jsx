// import { useState } from 'react';
// import { useHistory } from 'react-router-dom';
// import { Link } from 'react-router-dom';
// import { useUser } from '../../context/UserContext';
// import { signInUser, signUpUser } from '../../services/users';

// export default function Auth({ isSigningUp = false }) {
//   const history = useHistory();
//   const { setUser } = useUser();
//   const { formState, handleFormChange } = useForm({ email: '', password: '' });
//   const { from } = location.state || { from: { pathname: '/' } };

//   const handleSubmit = async (email, password) => {
//     try {
//       if (isSigningUp) {
//         await signUpUser(email, password);
//         history.push(`/confirm-email`);
//       } else {
//         const response = await signInUser(email, password);
//         setUser({ id: response.id, email: response.email });
//         history.replace(`/notes`);
//       }
//     } catch (error) {
//       throw error;
//     }
//   };

//   return (
//     <section className={styles.authForm}>
//       <h2>{isSigningUp ? 'Welcome!' : 'Welcome back!'}</h2>
//       <br />

//       <UserForm
//         onSubmit={handleSubmit}
//         label={isSigningUp ? 'Sign Up' : 'Sign In'}
//       />

//       {isSigningUp ? (
//         <p>
//           Already have an account? <Link to="/login">Sign In</Link>
//         </p>
//       ) : (
//         <p>
//           Need an account? <Link to="/register">Sign Up</Link>
//         </p>
//       )}
//     </section>
//   );
// }
