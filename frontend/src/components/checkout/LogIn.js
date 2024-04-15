import React from "react";
import { useUser } from "@/hooks/useUser";
import Login from "../auth/LoginForm";

function Account() {
  const { currentUser } = useUser();

  return (
    <div>
      {currentUser ? (
        <div>
          <p>You are currently logged in as {currentUser.firstName}.</p>
        </div>
      ) : (
        <div>
          <Login />
        </div>
      )}
    </div>
  );
}

export default Account;
