import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

function Profile() {
  const navigate = useNavigate();
  const user = useSelector((state) => state.user.user);

  useEffect(() => {
    if (!user) {
      navigate('/authentication');
    }
  }, [user, navigate]);

  return (
    <>
      {user && (
        <div className="profile-container container">
          <h1>Edit Profile</h1>
          <div className="profile-info">
            <div className="divider">
              <label>
                First Name
                <input value={user.firstName} />
              </label>
              <label>
                Last Name
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
          <div className="divider">
            <button>Cancel</button>
            <button>Save</button>
          </div>
        </div>
      )}
    </> 
  );
}

export default Profile;
