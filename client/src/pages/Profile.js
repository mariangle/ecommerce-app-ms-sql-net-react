import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

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
    <div>
      <h1>Profile</h1>
      <p>Email: {user.email}</p>
      <p>Name: {user.name}</p>
      <button>Edit</button>
    </div>
  );
}

export default Profile;
