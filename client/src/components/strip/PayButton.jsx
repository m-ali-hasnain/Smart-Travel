import axios from "axios";
import React from "react";

const PayButton = () => {

  const handleCheckout = () => {
    axios
      .post(`/payments/intent`, {
        packageCharges:500
      })
      .then((response) => {
        if (response.data.url) {
          window.location.href = response.data.url;
        }
      })
      .catch((err) => console.log(err.message));
  };

  return (
    <>
      <button onClick={() => handleCheckout()}>Check out</button>
    </>
  );
};

export default PayButton;