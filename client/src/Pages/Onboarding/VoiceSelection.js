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

//
import { useEffect } from "react";
import { useContext } from "react";
import { useNavigate } from "react-router";
import DataContext from "../../context/DataContext";
// import { styled } from "@mui/material/styles";

//
import LiveChat from "../../Components/LiveChat";

// const Item = styled(Paper)(({ theme }) => ({
//   backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
//   ...theme.typography.body2,
//   padding: theme.spacing(1),
//   textAlign: "center",
//   color: theme.palette.text.secondary,
// }));
const voices = [
  { name: "male", path: "/assets/icons/person/male.png" },
  { name: "female", path: "/assets/icons/person/female.png" },

  // Add more countries and paths to their flags as needed
];
const VoiceSelection = () => {
  const dataContext = useContext(DataContext);
  let navigate = useNavigate();

  const [selectedVoice, setSelectedVoice] = useState(null);

  const [anchorEl, setAnchorEl] = useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  const defaultCountry = "United States";
  const [selectedCountry, setSelectedCountry] = useState(defaultCountry);
  const onClickNext = () => {
    // dataContext.setonboardingVoice({ voice: selectedVoice });
    // navigate("/onboarding/pricing");
    dataContext.setVoiceFunction({ data: selectedVoice });
    dataContext.fetchContent(selectedVoice);
    navigate("/onboarding/extract-data");

    // navigate("/dashboard");
  };
  const onClickBack = () => {
    // navigate("/onboarding/pickniche");

    navigate("/");
  };
  useEffect(() => {
    console.log(dataContext.onboarding);
  }, [selectedVoice]);

  return (
    <div>
      <Grid
        container
        direction="column"
        // spacing={2}
        style={{ height: "100vh" }}
      >
        <Grid item>
          <Box height={40}></Box>
          <Box display="flex" justifyContent="center" alignItems="center">
            <Typography
              variant="h6"
              style={{ marginLeft: "10px", fontSize: "0.9rem" }}
            >
              <span style={{ color: "gray" }}>Step 3 out of 4</span>
            </Typography>
          </Box>
        </Grid>
        <Grid item>
          <Box height={20}></Box>
          <Box display="flex" justifyContent="center" alignItems="center">
            <Typography
              variant="h6"
              style={{ marginLeft: "10px", fontSize: "0.9rem" }}
            >
              <span style={{ color: "black", fontWeight: 700 }}>
                Choose Your Channel's Voice:
              </span>
            </Typography>
          </Box>
        </Grid>
        <Grid item>
          <Box height={160}></Box>
          <Box display="flex" justifyContent="center" alignItems="center"></Box>
        </Grid>
        <Grid item>
          {/* <Box bgcolor="secondary.main" height={40}></Box> */}
          <Box display="flex" justifyContent="center" alignItems="center">
            <Stack direction="row" spacing={12}>
              {voices.slice(0, 2).map((voice) => (
                <VoiceButton
                  voice={voice}
                  key={voice.name}
                  isSelected={selectedVoice === voice.name}
                  onSelect={() => setSelectedVoice(voice.name)}
                />
              ))}
            </Stack>
          </Box>
        </Grid>

        <Box style={{ position: "absolute", bottom: 0, width: "100%" }}>
          <Grid item>
            <Box height={10}></Box>
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
                      borderColor: "#9b8cf2",
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
                >
                  Next
                </Button>
              </Stack>
            </Box>
            <Box height={20}></Box>
          </Grid>
        </Box>
      </Grid>
      <LiveChat />
    </div>
  );
};

function VoiceButton({ voice, isSelected, onSelect }) {
  return (
    <Button
      onClick={onSelect}
      variant="outlined"
      size="large"
      sx={{
        px: 5,
        py: 4,
        borderRadius: "10px",
        borderColor: isSelected ? "#ff4d70" : "#ffe5eb",
        "&:hover": {
          borderColor: "#ff4d70",
        },
        "&:active": {
          borderColor: "#ff4d70",
        },
      }}
    >
      <Box display="flex" flexDirection="column">
        <Box
          display="flex"
          flexDirection="row"
          sx={{ mb: 1, textAlign: "center" }}
        >
          <img
            src={voice.path}
            alt="Flag"
            style={{
              width: "64px",
              height: "64px",
              marginRight: "8px",
            }}
          />
        </Box>
        <Typography
          variant="body2"
          color="gray"
          style={{
            textTransform: "capitalize",

            textAlign: "center",
          }}
        >
          {voice.name}
        </Typography>
      </Box>
    </Button>
  );
}

export default VoiceSelection;
