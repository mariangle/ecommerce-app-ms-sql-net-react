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
    <div className="profile-container container">
      <h1>Edit Profile</h1>
      <div className="profile-info">
        <div className="divider">
          <label>
            First Name
            <input value={user.firstName} />
          </label>
          <label>
            First Name
            <input value={user.lastName} />
          </label>
        </div>
        <label>
          Email
          <input value={user.email} />
        </label>
        <label>
          Phone Number
          <input value={user.phone} />
        </label>
      </div>
      <div className="profile-info">
        <h2>Shipping Details</h2>
        <label>
          Address
          <input value={user.address} />
        </label>
        <div className="divider">
          <label>
            Postal Code
            <input value={user.postalCode} />
          </label>
          <label>
            City
            <input value={user.city} />
          </label>
        </div>
      </div>
      <div className='divider'>
        <button>Cancel</button>
        <button>Save</button>
      </div>
    </div>
  );
}

export default Profile;
