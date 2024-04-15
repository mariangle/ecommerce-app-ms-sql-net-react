import React from "react";
import { useUser } from "@/hooks/useUser";
import { Link } from "react-router-dom";

function Complete() {
  const { currentUser } = useUser();

  return (
    <div className="complete">
      <h1>Your order is confirmed!</h1>
      <p>Thank you for your order, {currentUser.firstName}.</p>
      <Link to="/">
        <button>CONTINUE SHOPPING</button>
      </Link>
    </div>
  );
}

export default Complete;
