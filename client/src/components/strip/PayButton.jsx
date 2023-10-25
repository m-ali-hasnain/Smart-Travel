import axios from "axios";
import React from "react";

const PayButton = () => {

  const handleCheckout = () => {
  console.log("check")
    axios
      .post(`/payments/intent`, {
        packageCharges:100
      },
      // {authorization:}
      )
      .then((response) => {
        console.log("check", response.data)
        if (response.data) {
          console.log(response.data)
          window.location.href = response.data;
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