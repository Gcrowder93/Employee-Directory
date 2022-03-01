import React from 'react';
import { Link } from 'react-router-dom';
import { useUser } from '../../context/UserContext';
import './ProfileDetail.css';

function ProfileDetail() {
  const { user } = useUser();
  return (
    <>
      <>
        <label className="lab">Email</label>
        <input type="text" placeholder={user.email} disabled />
        <br></br>

        <label className="detaillabel">Name</label>

        <input type="text" placeholder={user.name} disabled />
        <br></br>
        <label className="detaillabel">Bio</label>

        <input type="text" placeholder={user.bio} disabled />
        <br></br>
        <label className="detaillabel">Birthday</label>

        <input type="text" placeholder={user.birthday} disabled />
        <br></br>
        <br></br>
        <Link to="/edit">Edit Profile</Link>
      </>
      ;
    </>
  );
}

export default ProfileDetail;
