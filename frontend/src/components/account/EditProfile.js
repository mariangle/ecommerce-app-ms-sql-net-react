import React  from 'react';

function Profile({currentUser}) {

  return (
    <>
          <h1>Edit Profile</h1>
          <div>
            <div className="divider">
              <label>
                First Name
                <input value={currentUser.firstName} readOnly />
              </label>
              <label>
                Last Name
                <input value={currentUser.lastName} readOnly />
              </label>
            </div>
            <label>
              Email
              <input value={currentUser.email} readOnly/>
            </label>
            <label>
              Phone Number
              <input value={currentUser.phone}readOnly />
            </label>
          </div>
          <h2>Shipping Details</h2>
          <label>
            Address
            <input value={currentUser.address} readOnly/>
          </label>
          <div className="divider">
            <label>
              Postal Code
              <input value={currentUser.postalCode} readOnly/>
            </label>
            <label>
              City
              <input value={currentUser.city} readOnly/>
            </label>
          </div>
          <div className="divider">
            <button className='second-button'>CANCEL</button>
            <button>SAVE CHANGES</button>
          </div>
    </> 
  );
}

export default Profile;
