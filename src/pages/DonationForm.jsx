import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import { Link } from "react-router-dom";
import logo from "../assets/images/logo.png";
import { useSnackbar } from "notistack";
import { useHistory } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";
import { makeStyles } from "@mui/styles";
import axios from "axios";
const useStyles = makeStyles({
  input: {
    "& input[type=number]": {
      "-moz-appearance": "textfield",
    },
    "& input[type=number]::-webkit-outer-spin-button": {
      "-webkit-appearance": "none",
      margin: 0,
    },
    "& input[type=number]::-webkit-inner-spin-button": {
      "-webkit-appearance": "none",
      margin: 0,
    },
  },
});
const DonationForm = () => {
  const classes = useStyles();
  let history = useHistory();
  const [name, setName] = useState("");
  const [number, setNumber] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");
  const [amount, setAmount] = useState();

  const { enqueueSnackbar, closeSnackbar } = useSnackbar();
  const handleSnakbarOpen = (msg, vrnt) => {
    let duration;
    if (vrnt === "error") {
      duration = 3000;
    } else {
      duration = 1000;
    }
    enqueueSnackbar(msg, {
      variant: vrnt,
      autoHideDuration: duration,
    });
  };
  const validation = () => {
    let isError = false;

    if (!name.trim()) {
      handleSnakbarOpen("Please enter name", "error");
      document.getElementById("name").focus();
      return (isError = true);
    }
    if (!number.trim()) {
      handleSnakbarOpen("Please enter number", "error");
      document.getElementById("number").focus();
      return (isError = true);
    }
    if (!email.trim()) {
      handleSnakbarOpen("Please enter email address", "error");
      document.getElementById("email").focus();
      return (isError = true);
    }
    if (!address.trim()) {
      handleSnakbarOpen("Please enter address", "error");
      document.getElementById("address").focus();
      return (isError = true);
    }
    if (!amount) {
      handleSnakbarOpen("Please enter amount", "error");
      document.getElementById("amount").focus();
      return (isError = true);
    }

    return isError;
  };
  const submit = async (e) => {
    e.preventDefault();
    let err = validation();
   
    if (err) {
      return;
    } else {
      try {
        let uuid = uuidv4();
        let splitId = uuid.split("-");
        let newUUID = splitId.join("");
        const obj = {
          name: "Scarf",
          qty: 1,
          unit_price: 5000,
          sub_total: 5000,
        };
        let cardData = [obj];
        const cardJSON = JSON.stringify(cardData);

        let data = {
          store_id: "1953_939",
          store_password: "Password100@",
          order_id: newUUID,
          bill_amount: amount,
          currency: "IQD",
          cart: cardJSON,
        };
        console.log("data", data);
        let response = await axios({
          method: "post",
          url: "https://staging-apigw-merchant.fast-pay.iq/api/v1/public/pgw/payment/initiation",
          data: data,
          headers: { "content-type": "application/json" },
        });
        console.log("response", response);
        console.log("status", response.status);
        console.log("redirect_uri", response.data.data.redirect_uri);
        if (response.status===200) {
          window.location.href = response.data.data.redirect_uri;
        }
        // history.push({
        //   pathname: "/message",
        //   search: `?name=${name}&amount=${amount}`,
        // });
      } catch (error) {
        console.log("error", error);
      }
    }
  };
  return (
    <Container maxWidth="sm" style={{ background: "#F3F3F3" }}>
      <Grid
        container
        direction="column"
        justifyContent="center"
        alignItems="space-between"
        style={{
          minHeight: "100vh",
        }}
      >
        <Grid item xs={12}>
          <img
            src={logo}
            alt=""
            width="160px"
            style={{ display: "block", margin: "20px auto" }}
          />
          <div
            style={{
              background: "#FC2861",
              padding: "10px",
              borderRadius: "5px",
              marginBottom: "30px",
            }}
          >
            <p
              style={{
                textAlign: "center",
                fontSize: "20px",
                margin: 0,
                color: "#fff",
              }}
            >
              Donation Form
            </p>
          </div>
          <TextField
            style={{ marginBottom: "20px" }}
            id="name"
            size="small"
            fullWidth
            label="Name"
            variant="outlined"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />

          <TextField
            style={{ marginBottom: "20px" }}
            id="number"
            size="small"
            fullWidth
            label="Mobile Number"
            variant="outlined"
            value={number}
            onChange={(e) => setNumber(e.target.value)}
          />

          <TextField
            style={{ marginBottom: "20px" }}
            id="email"
            size="small"
            fullWidth
            label="Email"
            variant="outlined"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <TextField
            style={{ marginBottom: "20px" }}
            id="address"
            size="small"
            fullWidth
            multiline
            rows={4}
            label="Address"
            variant="outlined"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
          />

          <TextField
            style={{ marginBottom: "30px" }}
            id="amount"
            className={classes.input}
            size="small"
            fullWidth
            label="Amount"
            variant="outlined"
            type="number"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
          />

          <Button
            variant="contained"
            disableElevation
            style={{
              background: "#FC2861",
              textTransform: "none",
              fontSize: "20px",
              color: "#fff",
              width: "240px",
              margin: "auto",
              display: "block",
              textAlign: "center",
            }}
            onClick={submit}
          >
            Confirm
          </Button>
        </Grid>
      </Grid>
    </Container>
  );
};

export default DonationForm;
