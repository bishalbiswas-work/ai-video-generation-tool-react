import React, { useEffect } from "react";
import { useState } from "react";
import { styled } from "@mui/material/styles";

import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";

import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Divider from "@mui/material/Divider";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";

import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { TextField } from "@mui/material";

// Compoenents
import Testimonials from "../../Components/Testimonial";
import Howitworks from "./Howitworks";
import Bags from "../../Components/Bags";
import Comparision from "../../Components/Comparision";
// import LiveChat from "../../Components/LiveChat";

//
import { useNavigate } from "react-router";
import { useContext } from "react";

import DataContext from "../../context/DataContext";
import { ClipLoader } from "react-spinners";
const LandingPage2 = () => {
  let navigate = useNavigate();
  const dataContext = useContext(DataContext);
  const [i, setI] = useState(0);
  const [placeholder, setPlaceholder] = useState('');
  const txt = 'Create a insta reel of a siberian husky.';
  const speed = 150;
  const [showSpinner, setShowSpinner] = useState(false);
  const [showImage, setShowImage] = useState(false)
  const spinnerDuration = 3000; // Time in milliseconds

  const [input, setInput] = useState("");
  const [isValid, setIsValid] = useState(true);
  const onClickGetStarted = () => {
    console.log(input);
    if (input.trim() !== "") {
      // Check if input is not empty
      dataContext.setPromptFunction({ data: input });
      navigate("/onboarding/voiceselection");
    } else {
      setIsValid(false);
    }
  };
  const handleChange = (e) => {
    const value = e.target.value;
    setInput(value);

    if (value.trim() === "") {
      setIsValid(false);
    } else {
      setIsValid(true);
    }
  };

  // const handleChange = (e) => {
  //   setInput(e.target.value);
  //   // validateInput(e.target.value);
  // };

  // const validateInput = (value) => {
  //   setIsValid(value.trim() !== "");
  // };
  useEffect(() => {
    const type = () => {
        if (i < txt.length) {
            setPlaceholder((prevPlaceholder) => prevPlaceholder + txt.charAt(i));
            setI((prevI) => prevI + 1);
        } else {
            // setPlaceholder('');
            // setI(0);
            setShowSpinner(true);

        }
    };

    const timer = setTimeout(type, speed);

    return () => {
        clearTimeout(timer);
    };
}, [i]);

useEffect(() => {
    if (showSpinner) {
        setTimeout(() => {
            setShowSpinner(false);
            setShowImage(true)
        }, spinnerDuration);
    }


}, [showSpinner]);

useEffect(() => {
    if (showImage) {
        setTimeout(() => {
            setShowSpinner(false);
            setShowImage(false)
             setPlaceholder('');
            setI(0);
        }, 2000);
    }


}, [showImage]);
  return (
    <div>
      {/* Navbar */}
      <AppBar position="static" color="transparent" elevation={0}>
        <Toolbar>
          <Typography
            variant="h6"
            sx={{ fontWeight: 700, fontSize: "28px", color: "" }}
          >
            Clipify
            {/* <Typography
              sx={{
                display: "inline",
                color: "red",
                fontSize: "42px",
                fontWeight: 700,
              }}
            >
              .
            </Typography> */}
          </Typography>
          <Box sx={{ flexGrow: 1 }} />
          {/* <Typography
            variant="body1"
            mr={2}
            sx={{ fontWeight: 700, color: "grey" }}
          >
            Home
          </Typography>
          <Typography
            variant="body1"
            mr={2}
            sx={{ fontWeight: 700, color: "grey" }}
          >
            Services
          </Typography>
          <Typography
            variant="body1"
            mr={2}
            sx={{ fontWeight: 700, color: "grey" }}
          >
            Solutions
          </Typography>
          <Typography
            variant="body1"
            mr={2}
            sx={{ fontWeight: 700, color: "grey" }}
          >
            Testimonials
          </Typography> */}
          <Box sx={{ flexGrow: 1 }} />
          {/* <Button
            onClick={onClickGetStarted}
            variant="contained"
            color="primary"
            sx={{
              borderRadius: "15px",
              px: 4,
              py: 1,
              backgroundColor: "#FF3333",
              "&:hover": {
                backgroundColor: "#e60000",
              },
              "&:active": {
                backgroundColor: "#ff4d4d",
              },
            }}
          >
            Get Started
          </Button> */}
        </Toolbar>
      </AppBar>
      {/* <LiveChat /> */}
      {/* Second Element */}
      <Container>
        <Box height={80}></Box>
        <Grid
          container
          spacing={3}
          sx={{ height: "400px", alignItems: "center" }}
        >
          <Grid item sm={6}>
            {/* #4d3ae4,#c81eab 50%,#f33f60); */}
            {/* <Typography
              variant="subtitle1"
              sx={{
                my: 2,
                fontWeight: 700,
                background:
                  "linear-gradient(45deg,  #4d3ae4,#c81eab 50%,#f33f60)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                display: "inline", // Ensure that the background is only as wide as the text
                color: "transparent", // Fallback for browsers that don't support the above properties
              }}
            >
              ReelGPT is finally here. Create 30 viral reels in 30 seconds.
            </Typography> */}
            <Typography
              variant="h4"
              sx={{
                my: 2,
                fontWeight: 700,
                fontSize: '60px'
              }}
            >
       Convert text to Video with AI
            </Typography>
            <Typography
              variant="body1"
              color="textSecondary"
              sx={{
                my: 2,
                fontWeight: 400,
              }}
            >
              Turn Your Text into a Viral Reels with Human-like voice over &
              Caption ready to post on all platforms! Supports all languages.
            </Typography>
            <Box width="70%">
              <TextField
                variant="outlined"
                type="text"
                fullWidth
                value={input}
                onChange={handleChange}
                placeholder="cute dog video"
                // error={!isValid}
                sx={{
                  borderRadius: "15px !important", // This is for the overall component
                  "& .MuiInputBase-root": {
                    borderRadius: "15px !important", // This is for the input container
                  },
                  "& .MuiOutlinedInput-notchedOutline": {
                    borderRadius: "25px !important", // This is for the outline
                  },
                  "& .MuiInputBase-input": {
                    // height: "2.1rem !important",
                    padding: "0.75rem 0.875rem",
                  },
                  "&.MuiTextField-root.Mui-error": {
                    borderColor: "red",
                    height: "2.1rem !important",
                  },
                }}
              />
              {!isValid && (
                <Box sx={{ px: "15px", py: "10px" }}>
                  <Typography sx={{ fontSize: "16px", color: "red" }}>
                    Please enter prompt
                  </Typography>
                </Box>
              )}
            </Box>
            <Box
              sx={{
                my: 2,
                mt: 5,
                display: "flex",
                flexDirection: "column",
                alignItems: "flex-start",
                px: "10px",
              }}
            >
              <Button
                onClick={onClickGetStarted}
                variant="contained"
                color="primary"
                sx={{
                  mt: 2,
                  fontSize: "12px",
                  borderRadius: "15px",
                  px: 4,
                  py: 1,
                  backgroundColor: "#7B68EE",
                  "&:hover": {
                    backgroundColor: "#e60000",
                  },
                  "&:active": {
                    backgroundColor: "#ff4d4d",
                  },
                }}
              >
                Get Started
              </Button>
              <Typography
                variant="caption"
                display="block"
                sx={{
                  color: "grey",
                  mt: 1,
                  paddingLeft: 1,
                  // textAlign: "center",
                  width: "100%",
                }}
              >
                No Credit Card Required
              </Typography>
            </Box>
          </Grid>
          <Grid item sm={6}>
            {/* <Box width="100%" sx={{ justifyContent: "center" }}>
              <img
                // src="images/workdemo.gif"
                src="/images/husky.png"
                alt="Placeholder"
                style={{ width: "300px", height: "auto" }}
              />
            </Box> */}
            <Box
              width="100%"
              sx={{
                display: "flex", // Enables flexbox
                justifyContent: "center", // Center content horizontally
                alignItems: "center", // Center content vertically
                height: "100%", // Make sure the Box takes the full height of its container
              }}
            >
                {placeholder.length === txt.length ? (

<div className={showSpinner ? "flex justify-center items-center mt-[12rem]" : "flex justify-center items-center"}>
    {showSpinner ? (
        <ClipLoader
            size={50}
            color="#FF4D00"
            loading={true}
            cssOverride={{
                borderWidth: '5px'
            }}
        />
    ) : (
        <>
            {showImage && (
                <img
                    src="/husky.png"
                    alt="Your Image"
                    className="w-[40%] h-[100%] z-[100]" // Adjust image dimensions and styling
                />
            )}
        </>

    )}
</div>
) : (
<form
    // onSubmit={handleSubmit(onSubmit)} 
    className="ml-[2em] lg:ml-[5rem] w-[105rem] h-[16rem] lg:w-[45.4rem] lg:h-[5.4rem] flex relative mt-[8rem] lg:mt-[9.2rem] z-[20]">
    <input
        type='email'
        placeholder={placeholder}
        // {...register("email", { required: "Email Address is required" })}
        // aria-invalid={errors.email ? "true" : "false"}
        style={{
          border: '1px solid #909090',
          borderRadius:'1rem',
          padding: '1rem',
          fontSize: '1.1rem',
          width: '400px'
        }}
        className=" border lg:pl-2 pl-[4rem] h-z border-[#909090]/[.5] h-full w-full rounded-[.6rem] text-[4.5rem] lg:text-[1.6rem] lg:font-medium placeholder:ml-3 placeholder:text-[3.6rem] placeholder:text-[#909090] placeholder:lg:text-[1.6rem] placeholder:font-medium px-[1.3rem] focus:outline-0"
    />
    {/* {errors.email && <p className='text-[red] text-[3.5rem] lg:text-[1.3rem] absolute left-[1.5rem] lg:left-1 top-[17rem]  lg:top-[5.8rem]'>{errors.email?.message}</p>} */}
    <button
    style={{
      backgroundColor: '#7B68EE',
      color: 'white',
      padding: '0.4rem 1rem',
      borderRadius: '1rem'
    }}
        className="text-[4rem] medium lg:m-0 mr-[.5rem] mt-[.9rem] p-[1rem] w-[29rem] h-[13.4rem] lg:text-[1.5rem] lg:w-[15.6rem] lg:h-[4.5rem] bg-[#fff] text-[#7B68EE] rounded-[2rem] lg:rounded-[.5rem] absolute right-[.5rem] top-[.35rem]"
        type='submit'
    // onClick={handleSubmit}
    >
        Generate →
    </button>
</form>
)}
            </Box>
          </Grid>
        </Grid>
      </Container>

      {/* Third Element */}
      {/* <Container>
        <Grid container spacing={3} justifyContent="center">
          {[...Array(5)].map((_, idx) => (
            <Grid item key={idx}>
              <img
                src={`path_to_bag_image_${idx + 1}.jpg`}
                alt={`Bag ${idx + 1}`}
              />
            </Grid>
          ))}
        </Grid>
      </Container> */}
      <Container sx={{ my: 5 }}>
        <Bags />
      </Container>
      {/* <Howitworks /> */}
      <Box height={80}></Box>

      {/* Fourth Element */}
      <Container
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          textAlign: "center",
        }}
      >
        {" "}
        <Typography
          variant="subtitle1"
          sx={{
            fontWeight: 700,
            background: "linear-gradient(45deg,  #4d3ae4,#c81eab 50%,#f33f60)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            display: "inline", // Ensure that the background is only as wide as the text
            color: "transparent", // Fallback for browsers that don't support the above properties
          }}
        >
          How it Works
        </Typography>
        {/* <Typography variant="h3" align="center" gutterBottom>
          You don't need a Second Job, You Need a Second Income!
        </Typography> */}
        {/* <Typography
          // variant="body1"
          align="center"
          color="textSecondary"
          sx={{
            maxWidth: "500px",
            mx: "auto",
          }}
        >
          Don't make your life harder with YT Automation, Make it Easier with
          AutoYT. Better Videos (or More Money) in Less Time.
        </Typography> */}
      </Container>
      <Box height={40}></Box>

      {/* Fifth to Seventh Elements */}

      <Container
        // key={section}
        sx={{
          // height: "400px",
          display: "flex",
          alignItems: "center",
          my: 5,
          // flexDirection: idx % 2 === 0 ? "row" : "row-reverse",
        }}
      >
        <Grid container spacing={3}>
          <Grid item sm={6}>
            <Typography
              variant="h5"
              align="left"
              sx={{ fontWeight: 700, fontSize: "32px" }}
            >
              Turn Your Idea Into Script
            </Typography>
            <Typography
              variant="body1"
              sx={{ fontSize: "18px", color: "grey", my: 2 }}
            >
              Let AI write the perfect script for you while you just hone it.
            </Typography>
            <List>
              <ListItem sx={{ py: 0, my: 0 }}>
                <ListItemIcon>
                  <img
                    src="images/icons/tick.svg"
                    alt="Your Alt Text"
                    style={{ width: "30px", height: "30px" }}
                  />
                </ListItemIcon>
                <Typography
                  variant="body1"
                  sx={{ fontSize: "18px", color: "grey", my: 2 }}
                >
                  Hone it until perfection with our AI
                </Typography>
              </ListItem>
              <ListItem sx={{ py: 0, my: 0 }}>
                <ListItemIcon>
                  <img
                    src="images/icons/tick.svg"
                    alt="Your Alt Text"
                    style={{ width: "30px", height: "30px" }}
                  />
                </ListItemIcon>
                <Typography
                  variant="body1"
                  sx={{ fontSize: "18px", color: "grey", my: 2 }}
                >
                  Supports any video duration
                </Typography>
              </ListItem>
              <ListItem sx={{ py: 0, my: 0 }}>
                <ListItemIcon>
                  <img
                    src="images/icons/tick.svg"
                    alt="Your Alt Text"
                    style={{ width: "30px", height: "30px" }}
                  />
                </ListItemIcon>
                <Typography
                  variant="body1"
                  sx={{ fontSize: "18px", color: "grey", my: 2 }}
                >
                  Supports all languages
                </Typography>
              </ListItem>
            </List>
          </Grid>
          <Grid item sm={6}>
            <img
              src="images/enter_prompt.png"
              alt="Placeholder"
              style={{ width: "300px", width: "auto" }}
            />
          </Grid>
        </Grid>
      </Container>
      <Container
        // key={section}
        sx={{
          // height: "400px",
          display: "flex",
          alignItems: "center",
          my: 5,
          // flexDirection: idx % 2 === 0 ? "row" : "row-reverse",
        }}
      >
        <Grid container spacing={3}>
          <Grid item sm={6}>
            <img
              src="images/voice_select.png"
              alt="Placeholder"
              style={{ width: "300px", width: "auto" }}
            />
          </Grid>
          <Grid item sm={6}>
            <Typography
              variant="h5"
              align="left"
              sx={{ fontWeight: 700, fontSize: "32px" }}
            >
              Choose your favourite voice
            </Typography>
            <Typography
              variant="body1"
              sx={{ fontSize: "18px", color: "grey", my: 2 }}
            >
              Pick the voice that best matches the tone of your video.
            </Typography>
            <List>
              <ListItem sx={{ py: 0, my: 0 }}>
                <ListItemIcon>
                  <img
                    src="images/icons/tick.svg"
                    alt="Your Alt Text"
                    style={{ width: "30px", height: "30px" }}
                  />
                </ListItemIcon>
                <Typography
                  variant="body1"
                  sx={{ fontSize: "18px", color: "grey", my: 2 }}
                >
                  Make or Female voices to choose from
                </Typography>
              </ListItem>
              <ListItem sx={{ py: 0, my: 0 }}>
                <ListItemIcon>
                  <img
                    src="images/icons/tick.svg"
                    alt="Your Alt Text"
                    style={{ width: "30px", height: "30px" }}
                  />
                </ListItemIcon>
                <Typography
                  variant="body1"
                  sx={{ fontSize: "18px", color: "grey", my: 2 }}
                >
                  Undetectable Human Natural Voices
                </Typography>
              </ListItem>
              <ListItem sx={{ py: 0, my: 0 }}>
                <ListItemIcon>
                  <img
                    src="images/icons/tick.svg"
                    alt="Your Alt Text"
                    style={{ width: "30px", height: "30px" }}
                  />
                </ListItemIcon>
                <Typography
                  variant="body1"
                  sx={{ fontSize: "18px", color: "grey", my: 2 }}
                >
                  Supports all languages
                </Typography>
              </ListItem>
            </List>
          </Grid>
        </Grid>
      </Container>

      <Container
        // key={section}
        sx={{
          // height: "400px",
          display: "flex",
          alignItems: "center",
          my: 5,
          // flexDirection: idx % 2 === 0 ? "row" : "row-reverse",
        }}
      >
        <Grid container spacing={3}>
          <Grid item sm={6}>
            <Typography
              variant="h5"
              align="left"
              sx={{ fontWeight: 700, fontSize: "32px" }}
            >
              One Post, All Platforms
            </Typography>
            <Typography
              variant="body1"
              sx={{ fontSize: "18px", color: "grey", my: 2 }}
            >
              Repurpose & post to All Social Media Channels with One Click of A
              Button to maximize reach with Actionable Insights to know what's
              resonating well.
            </Typography>
            <List>
              <ListItem sx={{ py: 0, my: 0 }}>
                <ListItemIcon>
                  <img
                    src="images/icons/tick.svg"
                    alt="Your Alt Text"
                    style={{ width: "30px", height: "30px" }}
                  />
                </ListItemIcon>
                <Typography
                  variant="body1"
                  sx={{ fontSize: "18px", color: "grey", my: 2 }}
                >
                  Repurpose post to Shorts, Reels, TikTok to Maximize Reach.
                </Typography>
              </ListItem>
              <ListItem sx={{ py: 0, my: 0 }}>
                <ListItemIcon>
                  <img
                    src="images/icons/tick.svg"
                    alt="Your Alt Text"
                    style={{ width: "30px", height: "30px" }}
                  />
                </ListItemIcon>
                <Typography
                  variant="body1"
                  sx={{ fontSize: "18px", color: "grey", my: 2 }}
                >
                  Actionable insight on Your Dashboard to see what's performing
                  well.
                </Typography>
              </ListItem>
              <ListItem sx={{ py: 0, my: 0 }}>
                <ListItemIcon>
                  <img
                    src="images/icons/tick.svg"
                    alt="Your Alt Text"
                    style={{ width: "30px", height: "30px" }}
                  />
                </ListItemIcon>
                <Typography
                  variant="body1"
                  sx={{ fontSize: "18px", color: "grey", my: 2 }}
                >
                  Videos Posted at Best Time for Each Platform Based on Your
                  Audience's Time zones to Maximize Views & Ranking.
                </Typography>
              </ListItem>
            </List>
          </Grid>
          <Grid item sm={6}>
            <img
              src="images/img2and2.png"
              alt="Placeholder"
              style={{ width: "300px", width: "auto" }}
            />
          </Grid>
        </Grid>
      </Container>

      {/* Eighth Element */}
      <Container
        sx={{
          height: "300px",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
        }}
      >
        <Typography
          variant="h3"
          align="center"
          sx={{ fontWeight: 700, color: "#262626" }}
        >
          Turn From A Content Editor to A Creator. Save 20+ Hrs/Week. Get Ahead.
        </Typography>
        <Typography
          variant="caption"
          align="center"
          color="textSecondary"
          sx={{ fontSize: "18px", my: 3 }}
        >
          “The best time to plant a tree was 20 years ago. The second best time
          is now.”
        </Typography>
      </Container>
      {/* <Container
        sx={{
          height: "500px",
          // display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          // backgroundColor: "red",
        }}
      >
        <Comparision />
      </Container> */}

      {/* Ninth Element */}
      <Container
        sx={{ height: "400px", display: "flex", alignItems: "center" }}
      >
        <Grid container spacing={3}>
          <Grid item sm={5}>
            {/* <Typography variant="h6" align="left">
              DIY
            </Typography> */}
            <img src="images/diy_cons.png" alt="Placeholder" />
          </Grid>
          <Grid
            item
            sm={2}
            container
            justifyContent="center"
            alignItems="center"
          >
            <Paper
              elevation={3}
              style={{
                borderRadius: "50%",
                fontWeight: 700,
                padding: "20px",
                color: "white",
                background: "rgba(168, 85, 247, 0.5)",
              }}
            >
              VS
            </Paper>
          </Grid>
          <Grid item sm={5}>
            {/* <Typography variant="h6" align="left">
              DIY
            </Typography> */}

            <img src="images/diy_pro.png" alt="Placeholder" />
          </Grid>
        </Grid>
      </Container>

      {/* Tenth Element */}
      {/* <Box height={140}></Box>
      <Container
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          textAlign: "center",
        }}
      >
        <Typography
          variant="h3"
          align="center"
          sx={{ fontWeight: 700, color: "#262626" }}
        >
          Other benfits of Youtube Automation
        </Typography>
      </Container> */}
      {/* <Box height={100}></Box>
      <Container
        sx={{ height: "400px", display: "flex", alignItems: "center", my: 5 }}
      >
        <Grid container spacing={3}>
          <Grid item sm={6}>
            <Typography
              variant="h5"
              align="center"
              sx={{ fontWeight: 700, color: "#262626", fontSize: "32px" }}
            >
              Add Money
            </Typography>
            <Typography
              variant="body1"
              align="center"
              sx={{ fontWeight: 700, color: "grey", fontSize: "18px" }}
            >
              Maximize your earnings through targeted ads and monetize your
              content effectively.
            </Typography>
            <img src="images/img3.png" alt="Placeholder" />
          </Grid>
          <Grid item sm={6}>
            <Box
              sx={{
                // height: "150px",
                width: "400px",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <img src="images/img4.png" alt="Placeholder" sx={{ ms: 4 }} />
            </Box>
          </Grid>
        </Grid>
      </Container> */}

      {/* Eleventh Element */}
      {/* <Box height={80}></Box>

      <Container sx={{ display: "flex", alignItems: "center" }}>
        <Grid container spacing={3}>
          <Grid item sm={6} sx={{ my: "auto" }}>
            <Typography
              variant="h5"
              align="center"
              sx={{ fontWeight: 700, color: "#262626", fontSize: "32px" }}
            >
              Affiliate Money
            </Typography>
            <Typography
              variant="body1"
              align="center"
              sx={{ fontWeight: 700, color: "grey", fontSize: "18px" }}
            >
              Leverage affilate marketing to earn commissions by promoting
              products that align with your content.
            </Typography>
          </Grid>
          <Grid item sm={6}>
            <img src="images/img5.png" alt="Placeholder" />
          </Grid>
        </Grid>
      </Container> */}

      {/* Twelfth Element */}
      <Box height={80}></Box>
      <Container>
        <img
          src="images/img6.png"
          alt="Full width"
          style={{ width: "100%", height: "auto" }}
        />
      </Container>
      <Box height={80}></Box>

      <Container
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          textAlign: "center",
        }}
      >
        <Typography
          variant="h3"
          align="center"
          sx={{ fontWeight: 700, color: "#262626" }}
        >
          Turn Your Text to Reels to Dominate Search, Maximize Reach.
        </Typography>
        {/* <Box> */}
        <Typography
          variant="caption"
          align="center"
          color="textSecondary"
          sx={{ fontSize: "18px", my: 3, maxWidth: "700px", mx: "auto" }}
        >
          Thousands of marketers, agencies, and entrepreneurs choose AutoYT to
          automate and simplify their content marketing.
        </Typography>
        {/* </Box> */}
        <Testimonials />
      </Container>
      {/* Thirteenth Element */}

      <Container
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          height: "400px",
        }}
      >
        <Typography
          variant="h3"
          align="center"
          sx={{
            fontWeight: 700,
            fontSize: "42px",
            color: "#262626",
            width: "900px",
          }}
        >
          100+ satisfied clients and counting - trust us,{" "}
          <span>we’re just getting started.</span>
        </Typography>
        {/* <Typography variant="body1" align="center" color="textSecondary">
          Grey out text
        </Typography> */}
        <Box height={40}></Box>
        <Button
          onClick={() => {
            window.scrollTo({
              top: 0,
              behavior: "smooth",
            });
          }}
          variant="contained"
          color="primary"
          sx={{
            borderRadius: "15px",
            px: 4,
            py: 1,
            my: 2,
            backgroundColor: "#FF3333",
            "&:hover": {
              backgroundColor: "#e60000",
            },
            "&:active": {
              backgroundColor: "#ff4d4d",
            },
          }}
        >
          Get Started
        </Button>
      </Container>

      {/* Fourteenth Element */}
      {/* <Container
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Typography
          variant="h3"
          align="center"
          sx={{ fontWeight: 900, my: 2, color: "#262626" }}
        >
          Frequently Asked Questions
        </Typography>
        <Box>
          <BasicAccordion />
        </Box>
      </Container>
      <Box height={80}></Box> */}
    </div>
  );
};

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
            How much income am I expected to make & what results can you
            guarantee?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography sx={{ fontWeight: 700, color: "grey" }}>
            Income all depends on how much time & money you invest. We can't
            guarantee any amount or timeline as we're a tool designed to
            maximize your success in the minimum time, not an agency. What we
            can guarantee is your chances of success will significantly drop if
            you were to do it all yourself.
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
            Is there any commitment? Can I cancel any time?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography sx={{ fontWeight: 700, color: "grey" }}>
            Absolutely! You can cancel anytime, no strings attached, as we're
            not agency to lock you to a commitment but tool to set you up for
            success.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
          sx={{ p: 2 }}
        >
          <Typography sx={{ fontWeight: 700 }}>
            Is it too late to get to YouTube automation?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography sx={{ fontWeight: 700, color: "grey" }}>
            Absolutely not! In fact, it has actually just started. Unfortunately
            numerous people don't see results to then give up with all the time
            and hours wasted as they try to figure out all themselves instead of
            following a strategic system that's working as it's built by the
            pros.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
          sx={{ p: 2 }}
        >
          <Typography sx={{ fontWeight: 700 }}>
            What the hell is YouTube Automation & why is it taking over?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography sx={{ fontWeight: 700, color: "grey" }}>
            Simply put, YouTube automation is making money off youtube without
            ever showing your face or recording a video. It's taking over
            because if it's done well, it can pay pretty dividends.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
          sx={{ p: 2 }}
        >
          <Typography sx={{ fontWeight: 700 }}>
            Can I still have creative control authority over the channel?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography sx={{ fontWeight: 700, color: "grey" }}>
            Absolutely! Our platform is built to empower you, not replace you.
            You're the brain of your business at the end of the day.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
          sx={{ p: 2 }}
        >
          <Typography sx={{ fontWeight: 700 }}>
            Can I sell merchants, courses, books or anything on the channel &
            even make sponsorship money?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography sx={{ fontWeight: 700, color: "grey" }}>
            Absolutely! With us, we setup all your partnership tools for you
            right away so brands come to you not vice versa. You can sell
            anything you want on your channel to make more cash as it's
            completely your business..
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
          sx={{ p: 2 }}
        >
          <Typography sx={{ fontWeight: 700 }}>
            I couldn't join your platform on July 2023 as your seats were sold
            out. Will it be happening again if I don't start right away?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography sx={{ fontWeight: 700, color: "grey" }}>
            We're working around the clock to not happen again given the influx
            of demand our editorial team receive. While we can't guarantee
            anything, we highly suggest to take your spot asap before it's too
            late..
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
          sx={{ p: 2 }}
        >
          <Typography sx={{ fontWeight: 700 }}>
            Is the platform user-friendly? Do I need technical skills?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography sx={{ fontWeight: 700, color: "grey" }}>
            Absolutely! No jargons or anything. Your success is ours. No need
            for technical skils.
          </Typography>
        </AccordionDetails>
      </Accordion>
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
          aria-controls="panel1a-content"
          id="panel1a-header"
          sx={{ p: 2 }}
        >
          <Typography sx={{ fontWeight: 700 }}>
            Would I get rejected from YouTube monetization program if I post AI
            generated content?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography sx={{ fontWeight: 700, color: "grey" }}>
            AutoYouTube AI generated content is completely original as it’s
            powered by GPT4 & Dall-E by OpenAi. Yet, We highly recommend to have
            at least half your content custom made by editorial team especially
            in the early phase to not only pass YouTube monetization program but
            also maximize your ad revenue!
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
          sx={{ p: 2 }}
        >
          <Typography sx={{ fontWeight: 700 }}>
            How would I know what niche to pick & how saturated it’s?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography sx={{ fontWeight: 700, color: "grey" }}>
            AutoYT not only shows you niches with highest RPM but also countries
            with highest RPM to target using the native language for maximum
            success
          </Typography>
        </AccordionDetails>
      </Accordion>
    </Box>
  );
}
export default LandingPage2;
