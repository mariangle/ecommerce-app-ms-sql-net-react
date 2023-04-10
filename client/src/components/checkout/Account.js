import React from 'react'
import { useUser} from "../../utils/hooks/useUser"

function Account({ goToTab }) {
  const { currentUser } = useUser();

  return (
    <div>
      <h1>Account</h1>
      {currentUser ? (
      <div>
        <p>currently logged in</p>
      </div>
      ) : (
        <div>
          <p>u are not logged in</p>
        </div>
      )}
    </div>
  );
}


export default Account