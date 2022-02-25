import React from 'react';
import { Link } from 'react-router-dom';

function ProfileDetail() {
  return (
    <div>
      <Link to="/edit">Edit</Link>
      <br></br>
      ProfileDetail <br></br>
      add details into here
      {/* {currentUser} */}
    </div>
  );
}

export default ProfileDetail;
