import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import { Link } from "react-router-dom";
import logo from "../assets/images/logo.png";

const DonationForm = () => {
  const [name, setName] = useState("");
  const [number, setNumber] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");
  const [amount, setAmount] = useState(0);
  return (
    <Container maxWidth="sm">
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
            id="mobile-number"
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
            component={Link}
            to={{
              pathname: "/message",
              search: `?name=${name}&amount=${amount}`,
            }}
          >
            Confirm
          </Button>
        </Grid>
      </Grid>
    </Container>
  );
};

export default DonationForm;
