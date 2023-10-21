import React, { Component } from "react";
import { useState } from "react";
// import ReactDOM from "react-dom/client";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";

import { Grid, Box } from "@mui/material";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import Slider from "@mui/material/Slider";
// import { styled } from "@mui/material/styles";
import AspectRatio from "@mui/joy/AspectRatio";

import Card from "@mui/joy/Card";
import CardContent from "@mui/joy/CardContent";
import IconButton from "@mui/joy/IconButton";
import BookmarkAdd from "@mui/icons-material/BookmarkAddOutlined";

import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Container from "@mui/material/Container";

import CheckCircleIcon from "@mui/icons-material/CheckCircle";

//
import { useEffect } from "react";
import { useContext } from "react";
import { useNavigate } from "react-router";
import DataContext from "../../context/DataContext";

const Success = () => {
  return (
    <div>
      <Container
        sx={{
          height: "100vh",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: 2,
          }}
        >
          <CheckCircleIcon color="success" style={{ fontSize: 60 }} />
          <Typography variant="h4" color="success">
            Payment Successful!
          </Typography>
        </Box>
      </Container>

      {/* Embed the script here */}
      <script
        dangerouslySetInnerHTML={{
          __html: `
            gtag('event', 'conversion', {
              'send_to': 'AW-11300698155/-y-PCIDr4dUYEKvwy4wq',
              'transaction_id': ''
            });
          `,
        }}
      />
    </div>
  );
};

export default Success;
