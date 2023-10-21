import React, { Component } from "react";
// import ReactDOM from "react-dom/client";
import { styled } from "@mui/material/styles";

import Link from "@mui/material/Link";

import Typography from "@mui/material/Typography";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";

import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import { Button } from "@mui/material";

import LiveChat from "../../Components/LiveChat";
function GoogleSignup() {
  const containerStyle = {
    width: "100vw",
    height: "100vh",
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    justifyItems: "end",
    gridGap: "0", // Added this line to remove the gap
  };

  const imageStyle = {
    width: "100%",
    height: "100vh", // set to viewport height
    objectFit: "contain",
    display: "block", // this ensures that the image doesn't have any margin or spacing around it
  };

  const buttonContainerStyle = {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  };
  return (
    <div style={containerStyle}>
      <Box sx={{ gridColumn: "1/2", width: "100%" }}>
        <Box
          display="flex"
          flexDirection="row"
          alignItems="center"
          my={3}
          mx={2}
          width="100%"
        >
          <img src="/path_to_logo.png" alt="Logo" width={100} />
          <Box sx={{ flexGrow: 1 }}></Box>
          <Typography
            variant="h6"
            style={{ marginLeft: "10px", fontSize: "0.9rem" }}
          >
            <span style={{ color: "gray" }}>Don't have an account? </span>
            <Link href="/login" color="inherit" underline="none">
              SignUp
            </Link>
          </Typography>
        </Box>

        <Box sx={{ height: "30vh" }}></Box>
        <Typography
          variant="h4"
          textAlign="center"
          mb={2}
          sx={{ fontWeight: 700, fontSize: "32px" }}
        >
          Login To Get Your Post
        </Typography>
        {/* <Typography variant="h5" textAlign="center">
          Text below
        </Typography> */}
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Button variant="contained" color="primary">
            My Button
          </Button>
        </div>
      </Box>
      <LiveChat />
      <div>
        <img
          src="/assets/googleLoginPage/1.png"
          alt="Description"
          style={imageStyle}
        />
      </div>
    </div>
    // <Container>
    //   <div>
    //     <Button variant="contained" color="primary">
    //       My Button
    //     </Button>
    //   </div>
    //   <div>
    //     <Image src="/assets/googleLoginPage/1.png" alt="Description" />
    //   </div>
    // </Container>
  );
}

export default GoogleSignup;
