import React from 'react'
import { useUser} from "../../utils/hooks/useUser"
import Login from '../auth/LoginForm';

function Account() {
  const { currentUser } = useUser();

  return (
    <div>
      <h1>Account</h1>
      {currentUser ? (
      <div>
        <p>You are currently logged in as {currentUser.firstName}.</p>
      </div>
      ) : (
        <div>
          <p>Guest checkout is currently not avaliable. Please log in. </p>
          <div className="line-divider"></div>
          <Login />
        </div>
      )}
    </div>
  );
}


export default Account