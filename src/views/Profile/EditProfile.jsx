import React from 'react';
import { Link } from 'react-router-dom';

function EditProfile() {
  return (
    <>
      <>
        <div>EditProfile</div>
        <form>
          <h4>Edit</h4>
          <label htmlFor="name">Name:</label>
          <input id="name" type="name" name="name" />{' '}
          <label htmlFor="email">Email:</label>
          <input disabled id="email" type="email" name="email">
            {/*${email}*/}
          </input>
          <label htmlFor="password">Password:</label>
          <input disabled id="password" type="password" name="password">
            {/*${password}*/}
          </input>
          <label htmlFor="Bio">Bio:</label>
          <textarea id="bio" type="textarea" name="bio" />
          <label htmlFor="birthday">Birthday:</label>
          <input id="birthday" type="date" name="birthday" />
        </form>
        <br></br>
        <button
          style={{
            width: '88px',
          }}
        >
          Save Profile
        </button>
      </>
      <Link to="/">Back Home</Link>
    </>
  );
}

export default EditProfile;
