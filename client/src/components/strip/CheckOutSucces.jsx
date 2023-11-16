import styled from "styled-components";
import React, { useState, useEffect, useRef } from "react";
import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const CheckoutSuccess = () => {
  const navigate = useNavigate();
  const orderDetails = JSON.parse(localStorage.getItem("orderDetails"));
  const handleCreate = () => {
    const data = {
      orderType: "package",
      fullName: orderDetails.fullname,
      tourName: orderDetails.packageObject.title,
      tourDate: orderDetails.dateoftour,
      email: orderDetails.email,
      phone: orderDetails.phone,
      totalPersons: orderDetails.totalpersons,
      pickupTime: orderDetails.pickuptime,
      pickupLocation: orderDetails.pickuplocation,
      stripeSessionId: orderDetails.stripeSessionId,
    };
    const URL = "http://localhost:8080/api/orders/create";
    axios
      .post(URL, data)
      .then((response) => {
        updateMyPackage()
        console.log("Response is ", response.data);
        // window.location.reload()
      })
      .catch((error) => {
        // event.preventDefault();
      });

  }
  const updateMyPackage = () => {
    const data = {
        totalCount: orderDetails.packageObject.totalCount-orderDetails.totalpersons,
    };
    const URL = `http://localhost:8080/api/packages/update/${orderDetails.packageObject._id}`;
    axios
        .post(URL, data)
        .then((response) => {
            console.log("Response is ", response.data);
            // window.location.reload()
        })
        .catch((error) => {
            // event.preventDefault();
        });
};

  return (
    <Container>

      <Container component="main" maxWidth="sm" sx={{ mb: 4 }}>
        <Paper
          variant="outlined"
          sx={{ my: { xs: 3, md: 6 }, p: { xs: 2, md: 3 } }}
        >
          <React.Fragment>
            <h2>Checkout Successful</h2>
            <p>Thank you for choosing Azeem Tourism! 🌟</p>
            <p>Your order might take some time to process.</p>
            {/* <p>Check your order status at your profile after about 10mins.</p> */}
            <p>
              Incase of any inqueries contact the support at{" "}
              <a href="mailto:azeemtourism@gmail.com"><strong>support</strong></a>
            </p>
            <p>
              Or you can 📞 WhatsApp us on{" "}
              <a href="https://api.whatsapp.com/send?phone=97152760013"><strong>+97152760013</strong></a>
            </p>
            <Button
              variant="contained"
              onClick={() => {
                handleCreate()
                navigate("/")
              }}
              sx={{ mt: 3, ml: 1 }}
            >
              {" "}
              Confirm Order
            </Button>
            {/* <Typography variant="h5" gutterBottom>
                Your Package Has Been Created
              </Typography> */}
          </React.Fragment>
        </Paper>
      </Container>
    </Container>

  );
};

export default CheckoutSuccess;

const Container = styled.div`
  min-height: 80vh;
  max-width: 800px;
  width: 100%;
  margin: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  h2 {
    margin-bottom: 0.5rem;
    color: #029e02;
  }
`;