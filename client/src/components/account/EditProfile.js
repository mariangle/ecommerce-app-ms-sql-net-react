import React  from 'react';

function Profile({currentUser}) {

  return (
    <>
          <h1>Edit Profile</h1>
          <div>
            <div className="divider">
              <label>
                First Name
                <input value={currentUser.firstName} />
              </label>
              <label>
                Last Name
                <input value={currentUser.lastName} />
              </label>
            </div>
            <label>
              Email
              <input value={currentUser.email} />
            </label>
            <label>
              Phone Number
              <input value={currentUser.phone} />
            </label>
          </div>
          <h2>Shipping Details</h2>
          <label>
            Address
            <input value={currentUser.address} />
          </label>
          <div className="divider">
            <label>
              Postal Code
              <input value={currentUser.postalCode} />
            </label>
            <label>
              City
              <input value={currentUser.city} />
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
