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
import TextField from "@mui/material/TextField";

//
import { useEffect } from "react";
import { useContext } from "react";
import { useNavigate } from "react-router";
import DataContext from "../../context/DataContext";
import { db } from "../Auth/Firebase";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";

// External Imports
import { MuiTelInput } from "mui-tel-input";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
// import { styled } from "@mui/material/styles";

//
// import LiveChat from "../../Components/LiveChat";
// const Item = styled(Paper)(({ theme }) => ({
//   backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
//   ...theme.typography.body2,
//   padding: theme.spacing(1),
//   textAlign: "center",
//   color: theme.palette.text.secondary,
// }));
const countries = [
  { name: "Select Language", language: "", flag: "", cpm: "" },
  {
    name: "Norway",
    language: "Norwegian",
    flag: "/assets/icons/flags/norway.png",
    cpm: "43.15",
  },
  {
    name: "Germany",
    language: "German",
    flag: "/assets/icons/flags/germany.png",
    cpm: "38.85",
  },
  {
    name: "Moldova",
    language: "Romanian",
    flag: "/assets/icons/flags/moldova.png",
    cpm: "29.50",
  },
  {
    name: "Algeria",
    language: "Arabic",
    flag: "/assets/icons/flags/algeria.png",
    cpm: "24.50",
  },
  {
    name: "South Korea",
    language: "Korean",
    flag: "/assets/icons/flags/south-korea.png",
    cpm: "17.00",
  },
  {
    name: "Sweden",
    language: "Swedish",
    flag: "/assets/icons/flags/sweden.png",
    cpm: "43.15",
  },
  {
    name: "Finland",
    language: "Finnish",
    flag: "/assets/icons/flags/finland.png",
    cpm: "38.85",
  },
  {
    name: "United Kingdom",
    language: "English",
    flag: "/assets/icons/flags/united-kingdom.png",
    cpm: "29.50",
  },
  {
    name: "Canda",
    language: "English",
    flag: "/assets/icons/flags/canada.png",
    cpm: "24.50",
  },
  {
    name: "United States",
    language: "English",
    flag: "/assets/icons/flags/united-states.png",
    cpm: "17.00",
  },
  // Add more countries and paths to their flags as needed
];
const countryCodes = [
  { label: "USA", code: "+1" },
  { label: "UK", code: "+44" },
  { label: "India", code: "+91" },
  // ... add other country codes
];

const SelectLanguage = () => {
  const dataContext = useContext(DataContext);
  let navigate = useNavigate();
  const [anchorEl, setAnchorEl] = useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  const defaultCountry = "Select Language";
  const [selectedCountry, setSelectedCountry] = useState(defaultCountry);
  //

  //
  const [contactNumber, setContactNumber] = React.useState("");

  //

  //
  const onClickNext = () => {
    navigate("/onboarding/pickniche");
    const matchingCountry = countries.find(
      (country) => country.name === selectedCountry
    );
    const languageToSet = matchingCountry ? matchingCountry.language : "";
    dataContext.setonboardingLanguage({ language: languageToSet });

    // dataContext.setonboardingLanguage({ language: selectedCountry });
    dataContext.setonboardingContactNumber({ contactNumber: contactNumber });
  };
  const onClickBack = () => {
    navigate("/");
  };

  useEffect(() => {
    console.log(dataContext.onboarding);
    // console.log(selectedCountry);
    // console.log(contactNumber);
  }, [selectedCountry]);
  const handleSubmit = async () => {
    console.log("Phone Number Submitted:", contactNumber);

    // Uploading to Firestore
    try {
      const contactsCollection = collection(db, "PhoneNumberv1");
      await addDoc(contactsCollection, {
        phoneNumber: contactNumber,
        timestamp: serverTimestamp(),
      });
      console.log("Phone number uploaded successfully");
    } catch (error) {
      console.error("Error uploading phone number: ", error);
    }
  };
  useEffect(() => {
    const handleSubmit = async () => {
      console.log("Phone Number Submitted:", contactNumber);

      // Uploading to Firestore
      try {
        const contactsCollection = collection(db, "PhoneNumberv1");
        await addDoc(contactsCollection, {
          phoneNumber: contactNumber,
          timestamp: serverTimestamp(),
        });
        console.log("Phone number uploaded successfully");
      } catch (error) {
        console.error("Error uploading phone number: ", error);
      }
    };

    // Call handleSubmit whenever nicheText changes

    handleSubmit();
  }, [selectedCountry]); // Dependencies list includes nicheText and contactNumber
  return (
    <div>
      {/* <Button onClick={logout}>logout</Button> */}
      <Grid
        container
        direction="column"
        // spacing={2}
        style={{ height: "100vh" }}
      >
        <Grid item>
          <Box height={20}></Box>
          <Box display="flex" justifyContent="center" alignItems="center">
            <Typography
              variant="h6"
              style={{ marginLeft: "10px", fontSize: "0.9rem" }}
            >
              <span style={{ color: "gray" }}>Step 1 out of 4</span>
            </Typography>
          </Box>
        </Grid>
        <Grid item>
          <Box height={10}></Box>
          <Box display="flex" justifyContent="center" alignItems="center">
            <Typography
              variant="h6"
              style={{ marginLeft: "10px", fontSize: "0.9rem" }}
            >
              <span style={{ color: "black", fontWeight: 700 }}>
                Please select from top 10 countries that you want to target
              </span>
            </Typography>
          </Box>
          <Box height={5}></Box>
          <Box display="flex" justifyContent="center" alignItems="center">
            <Typography
              variant="h6"
              style={{ marginLeft: "10px", fontSize: "0.9rem", color: "grey" }}
            >
              <span style={{ color: "grey", fontWeight: 400 }}>
                *RPM is Your Revenue Per 1K Impression.
              </span>
            </Typography>
          </Box>
          <Box height={10}></Box>
          <Box
            display="flex"
            justifyContent="center"
            alignItems="center"
            sx={{ my: 1 }}
          >
            <Typography
              variant="h6"
              style={{ marginLeft: "10px", fontSize: "12px", color: "grey" }}
            >
              Enter Your Phone Number to
              <span> </span>
              <span style={{ color: "grey", fontWeight: 700 }}>
                Unlock Countries RPMs.
              </span>
            </Typography>
          </Box>
          <Box display="flex" justifyContent="center" alignItems="center">
            <ContactNumber value={contactNumber} onChange={setContactNumber} />
            {/* <Button
              variant="contained"
              color="primary"
              onClick={handleSubmit}
              style={{
                marginLeft: "10px",
                backgroundColor: "#ff4d70",
                fontSize: "11px",
              }}
            >
              Submit
            </Button> */}
          </Box>

          <Box
            display="flex"
            justifyContent="right"
            alignItems="center"
            sx={{ mx: 6 }}
          >
            <Typography
              variant="h6"
              style={{ marginLeft: "10px", fontSize: "0.9rem", color: "green" }}
            >
              <span style={{ color: "green", fontWeight: 400 }}>
                Update as of Past 24 hours
              </span>
            </Typography>
          </Box>
        </Grid>
        <Grid item>
          <Box height={10}></Box>
          <Box display="flex" justifyContent="center" alignItems="center"></Box>
        </Grid>
        <Grid item>
          {/* <Box bgcolor="secondary.main" height={40}></Box> */}
          <Box display="flex" justifyContent="center" alignItems="center">
            <Stack direction="column" spacing={3}>
              {/* Row 1 */}
              <Stack direction="row" spacing={2}>
                {countries
                  .filter((country) => country.name !== "Select Language")
                  .slice(0, 5)
                  .map((country, index) => (
                    <CountryButton
                      country={country}
                      key={country.name}
                      isSelected={selectedCountry === country.name}
                      onSelect={() => setSelectedCountry(country.name)}
                      hideInfo={!contactNumber && index % 2 !== 0} // Hide for odd indices if no number
                    />
                  ))}
              </Stack>

              {/* Row 2 */}
              <Stack direction="row" spacing={2}>
                {countries.slice(6, 11).map((country, index) => (
                  <CountryButton
                    country={country}
                    key={country.name}
                    isSelected={selectedCountry === country.name}
                    onSelect={() => setSelectedCountry(country.name)}
                    hideInfo={!contactNumber && index % 2 !== 0} // Hide for odd indices if no number
                  />
                ))}
              </Stack>
            </Stack>
          </Box>
        </Grid>
        <Grid item>
          <Box height={40}></Box>
          <Box display="flex" justifyContent="center" alignItems="center">
            <Typography
              variant="h6"
              style={{ marginLeft: "10px", fontSize: "0.9rem" }}
            >
              {/* <span style={{ color: "black" }}>
                "Select Your Voice Language Personalize Your Experience"
              </span> */}
              <span style={{ color: "black" }}>
                "Select Your Channel's Voice Language"
              </span>
            </Typography>
          </Box>
        </Grid>
        <Grid item>
          <Box height={10}></Box>
          <Box display="flex" justifyContent="center" alignItems="center">
            <FormControl variant="outlined" fullWidth sx={{ width: "250px" }}>
              <Select
                value={selectedCountry}
                onChange={(e) => setSelectedCountry(e.target.value)}
                label="Country"
              >
                {countries.map((country, index) => {
                  if (index === 0) return null; // Skip the first element

                  return (
                    <MenuItem key={country.name} value={country.name}>
                      <Box display="flex" flexDirection="row" sx={{ mb: 1 }}>
                        <img
                          src={country.flag}
                          alt={country.name}
                          style={{
                            width: "18px",
                            height: "18px",
                            marginRight: "10px",
                          }}
                        />
                        <Typography
                          variant="body1"
                          style={{
                            textTransform: "capitalize",
                            fontSize: "12px",
                          }}
                        >
                          {country.language}
                        </Typography>
                      </Box>
                    </MenuItem>
                  );
                })}
              </Select>
            </FormControl>
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
      {/* <LiveChat /> */}
    </div>
  );
};

function ContactNumber(props) {
  const handleChange = (newValue) => {
    props.onChange(newValue);
  };
  return (
    <Box>
      <PhoneInput country={"us"} value={props.value} onChange={handleChange} />
    </Box>
  );

  // return <MuiTelInput value={props.value} onChange={handleChange} />;
}
function CountryButton({ country, isSelected, onSelect, hideInfo }) {
  return (
    <Button
      onClick={onSelect}
      variant="outlined"
      size="large"
      sx={{
        px: 2,
        py: 2,
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
        <Box display="flex" flexDirection="row" sx={{ mb: 1 }}>
          <img
            src={country.flag}
            alt="Flag"
            style={{
              width: "18px",
              height: "18px",
              marginRight: "8px",
            }}
          />
          <Typography
            variant="body1"
            style={{ textTransform: "capitalize", fontSize: "10px" }}
          >
            {country.name}
          </Typography>
        </Box>
        <Typography
          variant="body2"
          color="gray"
          style={{
            textTransform: "capitalize",
            width: "fit-content",
            filter: hideInfo ? "blur(5px)" : "none", // Apply blur if hideInfo is true
          }}
        >
          RPM :- ${country.cpm}
        </Typography>
      </Box>
    </Button>
  );
}

export default SelectLanguage;
