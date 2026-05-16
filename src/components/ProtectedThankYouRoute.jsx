import React from "react";
import { Navigate } from "react-router-dom";

const ProtectedThankYouRoute = ({ children }) => {

  const paymentSuccess =
    localStorage.getItem("payment_success");

  if (!paymentSuccess) {
    return <Navigate to="/" replace />;
  }

  return children;
};

export default ProtectedThankYouRoute;