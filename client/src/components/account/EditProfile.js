import React  from 'react';

function Profile({user}) {

  return (
    <>
        <div className="profile-container">
          <h1>Edit Profile</h1>
          <div className="line"></div>
          <div>
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
            <div className="line"></div>
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
            <button className='second-button'>Cancel</button>
            <button>Save</button>
          </div>
        </div>
    </> 
  );
}

export default Profile;
