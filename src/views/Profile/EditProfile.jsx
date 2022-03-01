import React, { useState } from 'react';
import { useEffect } from 'react';
import { useUser } from '../../context/UserContext';
import { useProfile } from '../../context/ProfileContext';
import { createProfile, updateProfile } from '../../services/profile';
import { Link } from 'react-router-dom';

export default function EditProfile({ isProfile = false }) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [bio, setBio] = useState('');
  const [birthday, setBirthday] = useState('');
  const { user } = useUser();
  const { profile, setProfile } = useProfile();

  useEffect(() => {
    if (isProfile) {
      setName(profile.name);
      setEmail(profile.email);
      setBio(profile.bio);
      setBirthday(profile.birthday);
    }
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isProfile) {
      updateProfile({ name, email: user.email, bio, birthday });
      // setProfile({ name, email: user.email, bio, birthday });
    } else {
      createProfile({ name, email: user.email, bio, birthday });
      // setProfile({ name, email: user.email, bio, birthday });
    }
  };

  return (
    <>
      <Link to="/profile">View Profile</Link>
      <br></br>
      <Link to="/">Back Home</Link>
      <>
        <form onSubmit={handleSubmit}>
          <h1>{isProfile ? 'Create Profile' : 'Edit Profile'}</h1>
          <label>Email:</label>
          <input
            type="text"
            placeholder={user.email}
            value={email}
            disabled
            onChange={(e) => setEmail(e.target.value)}
          />
          <label>Name:</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <label>Bio:</label>
          <input
            type="text"
            value={bio}
            onChange={(e) => setBio(e.target.value)}
          />
          <label>Birthday:</label>
          <input
            type="date"
            value={birthday}
            onChange={(e) => setBirthday(e.target.value)}
          />
          <button
            style={{
              textAlign: 'center',
              width: '82px',
            }}
            type="submit"
          >
            {isProfile ? 'Edit Profile' : 'Add Profile'}
          </button>
        </form>
      </>
    </>
  );
}
