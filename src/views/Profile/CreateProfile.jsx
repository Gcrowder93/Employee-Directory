import React, { useState } from 'react';
import { useUser } from '../../context/UserContext';
import { createProfile } from '../../services/profile';
import ProfileDetail from './ProfileDetail';

//import profile form ?

export default function CreateProfile() {
  const [name, setName] = useState([]);
  const [bio, setBio] = useState([]);
  const [birthday, setBirthday] = [];
  const { user } = useUser();
  const [alert, setAlert] = [];
}

const onChange = ({ target }) => {
  switch (target.name) {
    case 'name':
      return setName(target.value);
    case 'birthday':
      return setBirthday(target.value);
    case 'bio':
      return setBio(target.value);
    default:
      return false;
  }
};

const onSubmit = async (e) => {
  e.preventDefault();
  try {
    const resp = await createProfile({
      name,
      user,
      bio,
      birthday,
    });
    history.pushState('/profile');
  } catch (error) {
    setAlert(error.message);
  }
};

return (
  <div>
    <p>{alert}</p>
    <ProfileDetail
      {...name}
      {...email}
      {...birthday}
      {...bio}
      onSubmit={onSubmit}
      onChange={onChange}
    />
  </div>
);
