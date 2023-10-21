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
import CircularProgress from "@mui/material/CircularProgress";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";

//
import { useEffect } from "react";
import { useContext } from "react";
import { useNavigate } from "react-router";
import DataContext from "../../context/DataContext";

// function mapIndexToValue(index) {
//   const values = [10, 15, 30, 45, 60];
//   return values[index];
// }
// function getPriceFromValue(sliderValue) {
//   switch (sliderValue) {
//     case 10:
//       return 99;
//     case 15:
//       return 149;
//     case 30:
//       return 199;
//     case 45:
//       return 249;
//     case 60:
//       return 299;
//     default:
//       return 0;
//   }
// }
// function getPaymentUrlFromPrice(price) {
//   const urls = {
//     99: "https://buy.stripe.com/3csaH3aJjenh21q5kq",
//     149: "https://buy.stripe.com/9AQ9CZ2cN92X35uaEL",
//     199: "https://buy.stripe.com/14kdTf18Ja7149y3ck",
//     249: "https://buy.stripe.com/6oEcPb4kV4MH5dCdQZ",
//     299: "https://buy.stripe.com/bIY5mJcRrfrleOc5kp",
//   };
//   return urls[price] || "";
// }

function mapIndexToValue(index) {
  const values = [10, 15, 30, 45, 60];
  return values[index] || 10; // Default to 10 if the index is invalid
}

function getPriceFromValue(sliderValue) {
  const priceMap = {
    10: 99,
    15: 149,
    30: 199,
    45: 249,
    60: 299,
  };
  return priceMap[sliderValue] || 99; // Default to 99 if the sliderValue is invalid
}

function getPaymentUrlFromPrice(price) {
  const urls = {
    99: "https://buy.stripe.com/3csaH3aJjenh21q5kq",
    149: "https://buy.stripe.com/9AQ9CZ2cN92X35uaEL",
    199: "https://buy.stripe.com/14kdTf18Ja7149y3ck",
    249: "https://buy.stripe.com/6oEcPb4kV4MH5dCdQZ",
    299: "https://buy.stripe.com/bIY5mJcRrfrleOc5kp",
  };
  return urls[price] || "https://default.url"; // Add a default URL if needed
}

const Pricing = () => {
  const dataContext = useContext(DataContext);
  let navigate = useNavigate();
  const [anchorEl, setAnchorEl] = useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  const defaultCountry = "United States";

  // Slider Variables
  // const [index, setIndex] = useState(2);
  // var value = mapIndexToValue(index);
  // var selectedPrice = getPriceFromValue(value);
  // var payment_url = getPaymentUrlFromPrice(selectedPrice);

  // const handleChange = (event, newIndex) => {
  //   setIndex(newIndex);
  // };

  // const marks = [0, 1, 2, 3, 4].map((i) => ({
  //   value: i,
  //   label: mapIndexToValue(i).toString(),
  // }));
  const [index, setIndex] = useState(2); // Default index value is 2

  // const value = mapIndexToValue(index);
  // const selectedPrice = getPriceFromValue(value);
  // console.log("Index:", index);
  const value = mapIndexToValue(index);
  // console.log("Value:", value);
  const selectedPrice = getPriceFromValue(value);
  // console.log("SelectedPrice:", selectedPrice);
  const payment_url = getPaymentUrlFromPrice(selectedPrice);
  const [loading, setLoading] = useState(false);

  const handleChange = (event, newIndex) => {
    setIndex(newIndex);
  };

  const marks = [0, 1, 2, 3, 4].map((i) => ({
    value: i,
    label: mapIndexToValue(i).toString(),
  }));

  const onClickBack = () => {
    navigate("/onboarding/voiceselection");
  };

  const onClickNext = async () => {
    setLoading(true); // start loading

    // Helper function to introduce a delay
    const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

    console.log(dataContext.onboarding);

    try {
      await dataContext.saveonboardingData();
      // Wait for 2 seconds (2000 ms) before redirecting
      await delay(4000);
    } catch (error) {
      console.error("Error saving data:", error);
    } finally {
      setLoading(false); // stop loading after everything is done
    }
    window.location.href = payment_url;
  };

  useEffect(() => {
    console.log(dataContext.onboarding);
    dataContext.setonboardingPrice({ price: selectedPrice });
  }, [selectedPrice]);

  return (
    <div>
      <Grid
        container
        direction="column"
        // spacing={2}
        // style={{ height: "100vh" }}
      >
        <Grid item>
          <Box height={40}></Box>
          <Box display="flex" justifyContent="center" alignItems="center">
            <Typography
              variant="h6"
              style={{ marginLeft: "10px", fontSize: "0.9rem" }}
            >
              <span style={{ color: "gray" }}>Step 4 out of 4</span>
            </Typography>
          </Box>
        </Grid>
        <Grid item>
          <Box height={20}></Box>
          <Box display="flex" justifyContent="center" alignItems="center">
            <Typography
              variant="h6"
              style={{
                marginLeft: "10px",
                fontSize: "18px",
                fontWeight: 700,
              }}
            >
              <span style={{ color: "black" }}>
                How to pick topics worth making video about?
              </span>
            </Typography>
          </Box>
        </Grid>
        <Grid item>
          <Box height={40}></Box>
          <Box display="flex" justifyContent="center" alignItems="center">
            <Box sx={{ display: "flex", alignItems: "center", width: 620 }}>
              {/* Adjust width as needed */}
              <Box sx={{ px: 3 }}>
                <img
                  src="/assets/icons/turtle.png"
                  alt="Start Icon"
                  sx={{ marginRight: 2 }}
                />
              </Box>

              <Box sx={{ flex: 1, width: 600 }}>
                {/* Set width for the Slider's container */}
                <Box display="flex" justifyContent="center" alignItems="center">
                  <img
                    src="/assets/icons/recommended-video-tag.png"
                    alt="Placeholder"
                    style={{ width: "100px" }}
                  />
                </Box>
                <Slider
                  aria-label="Temperature"
                  value={index}
                  onChange={handleChange}
                  valueLabelDisplay="off"
                  step={1}
                  min={0}
                  max={4}
                  marks={[
                    { value: 0, label: "10 Min" },
                    { value: 2, label: "30 Min" }, // Assuming value 2 is the middle value between 0 and 4
                    { value: 4, label: "60 Min" },
                  ]}
                  sx={{
                    color: "#ff4d70",
                    "&:hover": {
                      color: "#ff4d70",
                    },
                    "&:active": {
                      color: "#ff4d70",
                    },
                  }}
                />
              </Box>
              <Box sx={{ px: 3 }}>
                <img
                  src="/assets/icons/rabbit.png"
                  alt="End Icon"
                  sx={{ marginLeft: 2 }}
                />
              </Box>
            </Box>
          </Box>
          <Box height={20}></Box>
          <Box display="flex" justifyContent="center" alignItems="center">
            {value < 30 &&
              renderBox(
                "#FFD18C",
                "This Could Significantly Delay Your Time To Monetization"
              )}

            {value >= 30 &&
              value < 45 &&
              renderBox("#a6ced9", "Average Speed Monetization")}

            {value >= 45 &&
              value <= 60 &&
              renderBox("#89ff80", "10X Speed To Monetization")}
          </Box>
          <Box height={40}></Box>
        </Grid>
        <Grid item>
          <Grid item>
            <Box display="flex" justifyContent="center" alignItems="center">
              <img
                src="/assets/icons/poweredbystripe.png"
                alt="Placeholder"
                style={{ width: "150px" }}
              />
            </Box>
          </Grid>
          <Box height={20}></Box>
          {/* <Box bgcolor="secondary.main" height={40}></Box> */}

          <Box display="flex" justifyContent="center" alignItems="center">
            {/* <Stack direction="row" spacing={12}>
              {voices.slice(0, 2).map((voice) => (
                <VoiceButton voice={voice} key={voice.name} />
              ))}
            </Stack> */}

            <PriceCard
              time={value}
              price={selectedPrice}
              paymentLink={payment_url}
              onClickNext={onClickNext}
            />
          </Box>
          <Box height={60}></Box>
          <Box display="flex" justifyContent="center" alignItems="center">
            <img
              src="/assets/icons/trustpilot.png"
              alt="Placeholder"
              style={{ width: "450px" }}
            />
          </Box>
          <Box height={60}></Box>
          <Box display="flex" justifyContent="center" alignItems="center">
            <Typography
              variant="h6"
              style={{
                marginLeft: "10px",
                fontSize: "18px",
                fontWeight: 700,
              }}
            >
              <span style={{ color: "black" }}>
                Common Pricing & Payment Questions
              </span>
            </Typography>
          </Box>
          <Box height={20}></Box>

          <Box display="flex" justifyContent="center" alignItems="center">
            <BasicAccordion />
          </Box>
        </Grid>

        <Grid item>
          <Box height={80}></Box>
          <Box display="flex" justifyContent="center" alignItems="center">
            <Stack direction="row" spacing={2}>
              <Button
                onClick={onClickBack}
                variant="outlined"
                size="sm"
                sx={{
                  px: 4,
                  color: "#ff4d70",
                  fontSize: "12px",
                  borderRadius: "10px",
                  borderColor: "#ff4d70",
                  "&:hover": {
                    borderColor: "#ff4d70",
                  },
                  "&:active": {
                    borderColor: "#735fed",
                  },
                }}
              >
                Back
              </Button>
              <Button
                onClick={onClickNext}
                variant="contained"
                size="sm"
                sx={{
                  px: 4,

                  fontSize: "12px",
                  borderRadius: "10px",
                  backgroundColor: "#ff4d70",
                  "&:hover": {
                    backgroundColor: "#ff4d70",
                  },
                  "&:active": {
                    backgroundColor: "#ff4d70",
                  },
                }}
                // href={payment_url}
              >
                Next
              </Button>
            </Stack>
          </Box>
          <Box height={80}></Box>
        </Grid>
      </Grid>
      {/* <LiveChat /> */}

      {loading && (
        <Box
          sx={{
            position: "fixed",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: "rgba(0,0,0,0.7)", // this will give a semi-transparent background
            zIndex: 9999, // ensure it covers everything
          }}
        >
          <CircularProgress />
        </Box>
      )}
    </div>
  );
};
const renderBox = (backgroundColor, text) => (
  <Box
    sx={{
      py: 1,
      px: 12,
      borderRadius: "15px",
      backgroundColor: backgroundColor,
    }}
  >
    <Typography
      variant="h6"
      style={{
        marginLeft: "10px",
        fontSize: "12px",
      }}
    >
      <span style={{ color: "black" }}>{text}</span>
    </Typography>
  </Box>
);
function PriceCard({ time, price, paymentLink, onClickNext }) {
  return (
    //  backgroundColor: "FF335B"
    <Card
      variant="outlined"
      sx={{
        width: 320,
        background: "linear-gradient(90deg,#ff4d70 10%, #ff8099 90%)",
        color: "white",
      }}
    >
      <div>
        <Typography level="title-lg" sx={{ fontSize: "18px" }}>
          Pro - All in One
        </Typography>
        <Typography
          variant="body1"
          sx={{ fontSize: "32px", fontWeight: 700, p: 1 }}
        >
          ${price}
          <Box
            component="span"
            sx={{
              fontSize: "16px",
              fontWeight: 400,
              // verticalAlign: "top",
              marginLeft: 1,
            }}
          >
            / Month
          </Box>
        </Typography>
      </div>

      <CardContent orientation="horizontal">
        <div>
          <Typography level="body-xs" sx={{ mb: 1 }}>
            What's included
          </Typography>
          <Box display="flex" alignItems="center" sx={{ mb: 1 }}>
            <CheckCircleIcon />
            <Typography
              sx={{ fontSize: "16px" }}
              fontWeight="700"
              marginLeft={1}
            >
              <Box component="span" sx={{ color: "#29FE16" }}>
                {time} Min
              </Box>
              <span> </span>Credit for Custom Videos
            </Typography>
          </Box>
          <Box display="flex" alignItems="center" sx={{ mb: 1 }}>
            <CheckCircleIcon />
            <Typography
              sx={{ fontSize: "16px" }}
              fontWeight="700"
              marginLeft={1}
            >
              Custom Thumbnail - Pro Designers
            </Typography>
          </Box>
          <Box display="flex" alignItems="center" sx={{ mb: 1 }}>
            <CheckCircleIcon />
            <Typography
              sx={{ fontSize: "16px" }}
              fontWeight="700"
              marginLeft={1}
            >
              Unlimited AI Generated Shorts
            </Typography>
          </Box>
          <Box display="flex" alignItems="center" sx={{ mb: 1 }}>
            <CheckCircleIcon />
            <Typography
              sx={{ fontSize: "16px" }}
              fontWeight="700"
              marginLeft={1}
            >
              Human Quality Voice Over
            </Typography>
          </Box>
          <Box display="flex" alignItems="center" sx={{ mb: 1 }}>
            <CheckCircleIcon />
            <Typography
              sx={{ fontSize: "16px" }}
              fontWeight="700"
              marginLeft={1}
            >
              Support 100+ Languages
            </Typography>
          </Box>
          <Box display="flex" alignItems="center" sx={{ mb: 1 }}>
            <CheckCircleIcon />
            <Typography
              sx={{ fontSize: "16px" }}
              fontWeight="700"
              marginLeft={1}
            >
              SEO Optimized Title + Description
            </Typography>
          </Box>
          <Box display="flex" alignItems="center" sx={{ mb: 1 }}>
            <CheckCircleIcon />
            <Typography
              sx={{ fontSize: "16px" }}
              fontWeight="700"
              marginLeft={1}
            >
              YouTube topic Research Analytics
            </Typography>
          </Box>
          <Box display="flex" alignItems="center" sx={{ mb: 1 }}>
            <CheckCircleIcon />
            <Typography
              sx={{ fontSize: "16px" }}
              fontWeight="700"
              marginLeft={1}
            >
              Live Chat 24x7 Support
            </Typography>
          </Box>
          <Box height={60}></Box>

          <Box display="flex" textAlign="center" sx={{ mb: 1 }}>
            <Button
              onClick={onClickNext}
              size="lg"
              variant="contained"
              sx={{
                backgroundColor: "white",
                color: "#ff4d70",
                fontWeight: "700",
                px: 5,
                py: 1,
                backgroundColor: "white",
                "&:hover": {
                  backgroundColor: "#ffe5eb",
                },
                "&:active": {
                  backgroundColor: "white",
                },
                mx: "auto",
              }}
              // href={paymentLink}
            >
              Get Started
            </Button>
          </Box>
        </div>
      </CardContent>
    </Card>
  );
}

function BasicAccordion() {
  return (
    <Box sx={{ maxWidth: "700px" }}>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
          sx={{ p: 2 }}
        >
          <Typography sx={{ fontWeight: 700 }}>
            How to pick topics worth making video about?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography sx={{ fontWeight: 700, color: "grey" }}>
            AutoYT shows you the top trending topics with the search &
            competition volume. So you make the best video in the least time!
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
          sx={{ p: 2 }}
        >
          <Typography sx={{ fontWeight: 700 }}>
            Will just using AI Made Content Ban my YouTube Channel?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography sx={{ fontWeight: 700, color: "grey" }}>
            Only using AI-generated videos bans your channel as it violates
            YouTube Original content policy but also blends you in the crowd. At
            AutoYT, you'll harness AI-crafted shorts to maximize reach paired
            with captivating custom videos by your pro editorial team to
            maximize watch time aka minimum time spent, maximize revenue made.
          </Typography>
        </AccordionDetails>
      </Accordion>
    </Box>
  );
}

export default Pricing;
