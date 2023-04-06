import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import styled from 'styled-components';

function Profile() {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user.user);
  const status = useSelector((state) => state.user.status);

  useEffect(() => {
  }, [dispatch]);

  if (status === 'loading') {
    return <div>Loading...</div>;
  }

  if (!user) {
    return <div>User not found.</div>;
  }

  return (
    <div className="profile-container">
      <h1>Profile</h1>
      <label>
        First Name
        <input value={user.firstName} />
      </label>
      <label>
        First Name
        <input value={user.lastName} />
      </label>
      <label>
        Email
        <input value={user.email} />
      </label>
      <label>
        Phone Number
        <input value={user.phone} />
      </label>
      <label>
        Address
        <input value={user.address} />
      </label>
      <label>
        Postal Code
        <input value={user.postalCode} />
      </label>
      <label>
        City
        <input value={user.city} />
      </label>
    </div>
  );
}

export default Profile;
