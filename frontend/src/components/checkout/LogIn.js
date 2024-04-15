import React from "react";
import { useUser } from "@/hooks/useUser";
import LoginForm from "@/components/LoginForm";

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
          <LoginForm />
        </div>
      )}
    </div>
  );
}

export default Account;
