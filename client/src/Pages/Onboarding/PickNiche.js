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
import InputAdornment from "@mui/material/InputAdornment";
// import AddIcon from "@mui/icons-material";
import AddIcon from "@mui/icons-material/Add";
//
import { useEffect } from "react";
import { useContext } from "react";
import { useNavigate } from "react-router";
import DataContext from "../../context/DataContext";
import { db } from "../Auth/Firebase";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";

// import { styled } from "@mui/material/styles";

// External Imports
import { MuiTelInput } from "mui-tel-input";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";

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
  { name: "Select Language", flag: "", cpm: "" },
  {
    name: "Email Marketing",
    flag: "/assets/icons/pickniche/email-marketing.png",
    cpm: "50",
  },
  {
    name: "Insurance",
    flag: "/assets/icons/pickniche/insurance.png",
    cpm: "49.52",
  },
  {
    name: "Website Hosting",
    flag: "/assets/icons/pickniche/website-hosting.png",
    cpm: "39.86",
  },
  {
    name: "Ecommerce Software",
    flag: "/assets/icons/pickniche/ecommerce.png",
    cpm: "39.86",
  },
  {
    name: "Sell House",
    flag: "/assets/icons/pickniche/sell-house.png",
    cpm: "33.29",
  },
  {
    name: "Donate",
    flag: "/assets/icons/pickniche/donate.png",
    cpm: "32.36",
  },
  { name: "Lawyer", flag: "/assets/icons/pickniche/lawyer.png", cpm: "23.43" },
  {
    name: "Credit Card",
    flag: "/assets/icons/pickniche/credit-card.png",
    cpm: "20.3",
  },
  {
    name: "Attorney",
    flag: "/assets/icons/pickniche/attorney.png",
    cpm: "20.29",
  },
  {
    name: "Casino",
    flag: "/assets/icons/pickniche/casino.png",
    cpm: "19.35",
  },
  // Add more countries and paths to their flags as needed
];

const PickNiche = () => {
  const dataContext = useContext(DataContext);
  let navigate = useNavigate();

  const [showContactSection, setshowContactSection] = useState(
    dataContext.onboarding.contactNumber
  );
  const [nicheText, setnicheText] = useState(""); // Value that has been submitted

  const defaultCountry = "Select Language";
  const [selectedCountry, setSelectedCountry] = useState(defaultCountry);
  //

  //
  const [contactNumber, setContactNumber] = useState(
    dataContext.onboarding.contactNumber
  );

  //

  //
  const onClickNext = () => {
    if (!showContactSection) {
      dataContext.setonboardingContactNumber({
        contactNumber: contactNumber,
      });
    }
    if (nicheText === "") {
      dataContext.setonboardingNiche({ niche: selectedCountry });
    } else {
      dataContext.setonboardingNiche({ niche: nicheText });
    }
    navigate("/onboarding/voiceselection");
  };
  const onClickBack = () => {
    navigate("/onboarding/selectlanguage");
  };

  useEffect(() => {
    console.log(dataContext.onboarding);
    // console.log(selectedCountry);
    // console.log(dataContext.onboarding.contactNumber);
  }, [selectedCountry]);

  // ========== Textbox start =================
  const handleNicheSubmit = (text) => {
    console.log("Submitted Niche:", text);
    setnicheText(text);
    setSelectedCountry(defaultCountry);
    // You can do anything with the text here, e.g., save it to state or send it to the backend.
  };
  //   =========== Textbox end ============
  const handleSubmitContact = async () => {
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
  }, [nicheText]); // Dependencies list includes nicheText and contactNumber

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
              <span style={{ color: "gray" }}>Step 2 out of 4</span>
            </Typography>
          </Box>
        </Grid>
        <Grid item>
          <Box height={10}></Box>
          <Box display="flex" justifyContent="center" alignItems="center">
            <Typography
              variant="h6"
              style={{
                marginLeft: "10px",
                fontSize: "0.9rem",
                fontWeight: 500,
                color: "black",
              }}
            >
              <span style={{ color: "black", fontWeight: 700 }}>
                Pick a Niche
              </span>
            </Typography>
          </Box>
        </Grid>
        <Grid item>
          <Box height={10}></Box>
          {!showContactSection && ( // Render this section only if contactNumber is empty
            <>
              <Box
                display="flex"
                justifyContent="center"
                alignItems="center"
                sx={{ my: 1 }}
              >
                <Typography
                  variant="h6"
                  style={{
                    marginLeft: "10px",
                    fontSize: "12px",
                    color: "grey",
                  }}
                >
                  Enter Your Phone Number to
                  <span> </span>
                  <span style={{ color: "grey", fontWeight: 700 }}>
                    Unlock Countries RPMs.
                  </span>
                </Typography>
              </Box>
              <Box display="flex" justifyContent="center" alignItems="center">
                <ContactNumber
                  value={contactNumber}
                  onChange={setContactNumber}
                />
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
            </>
          )}
        </Grid>
        <Grid item>
          <Box height={20}></Box>
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
          <Box height={20}></Box>
          {/* <Box display="flex" justifyContent="center" alignItems="center">
            <Typography
              variant="h6"
              style={{ marginLeft: "10px", fontSize: "0.9rem" }}
            >
              <span style={{ color: "black" }}>
                "Select Your Voice Language Personalize Your Experience"
              </span>
            </Typography>
          </Box> */}
        </Grid>
        <Grid item>
          {/* <Box height={10}></Box> */}
          <Box display="flex" justifyContent="center" alignItems="center">
            {/* <Box sx={{ p: 1 }}>
              <Box
                sx={{
                  px: 2,
                  py: 2,
                  borderRadius: "10px",
                  border: "1px solid",
                  borderColor: "#ffe5eb",
                  mb: 0,
                  // "&:hover": {
                  //   borderColor: "#ff4d70",
                  // },

                  // "&:active": {
                  //   borderColor: "#ff4d70",
                  // },
                }}
              >
                <Typography
                  variant="h6"
                  sx={{
                    color: submittedText ? "black" : "grey",
                    fontSize: "12px",
                    fontWeight: 700,
                    color: "grey",
                    mb: 1,
                  }}
                >
                  {submittedText ? "Your Entered Niche" : ""}
                </Typography>
                <Box
                  sx={{
                    textAlign: "center",
                  }}
                >
                  <Typography
                    variant="body"
                    sx={{
                      color: submittedText ? "black" : "grey",
                      fontSize: "14px",
                    }}
                  >
                    {submittedText ? submittedText : "+ Add Your Custom Niche"}
                  </Typography>
                </Box>
              </Box>
            </Box> */}
            {/* <CustomNicheBox
              text={text}
              submittedText={submittedText}
              onTextChange={handleChange}
              onKeyPress={handleKeyPress}
            /> */}
            <CustomNicheInput onNicheSubmit={handleNicheSubmit} />
          </Box>
          <Box display="flex" justifyContent="center" alignItems="center">
            {/* ========  Old Textbox Start ==============*/}
            {/* <TextField
              id="outlined-multiline-static"
              multiline
              rows={4}
              placeholder="+ Add Your Custom Niche"
              sx={{
                borderColor: "#ff4d70",
                "&:hover": {
                  borderColor: "#9b8cf2",
                },
                "& .Mui-focused": {
                  // This targets the focused state of the TextField
                  borderColor: "#735fed",
                },
                "& .MuiInputBase-input": {
                  color: "grey",
                  fontWeight: 700,
                },
              }}
            /> */}
            {/* ========  Old Textbox End ==============*/}

            {/* <TextField
              id="outlined-multiline-static"
              multiline
              rows={3}
              placeholder="Enter your custom niche here! "
              value={text} // Controlled component
              onChange={handleChange}
              onKeyPress={handleKeyPress}
              sx={{
                borderColor: "#ff4d70",
                "&:hover": {
                  borderColor: "#9b8cf2",
                },
                "& .Mui-focused": {
                  // This targets the focused state of the TextField
                  borderColor: "#735fed",
                },
                "& .MuiInputBase-input": {
                  color: "grey",
                  fontWeight: 400,
                },
              }}
            /> */}
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
function CustomNicheInput(props) {
  const [text, setText] = useState(""); // Value being typed in the text field
  const [submittedText, setSubmittedText] = useState(""); // Value that has been submitted

  // Handle text change
  const handleChange = (event) => {
    setText(event.target.value);
  };

  // Handle 'Enter' key press
  const handleKeyPress = (event) => {
    if (event.key === "Enter") {
      event.preventDefault(); // Prevent the default behavior
      handleSubmit();
    }
  };

  const handleSubmit = () => {
    setSubmittedText(text);
    setText(""); // Clear text field after submitting
    props.onNicheSubmit(text); // Pass submitted text back to parent
  };

  return (
    <>
      <Box
        sx={{
          borderRadius: "10px",
          border: "2px solid",
          borderColor: "lightgrey",
          px: 2,
          py: 0,
          // pt: 0,
        }}
      >
        <Box sx={{}}>
          <Box
            sx={{
              px: 2,
              py: 2,

              mb: 0,
            }}
          >
            {/* <Typography
              variant="h6"
              sx={{
                color: submittedText ? "black" : "grey",
                fontSize: "12px",
                fontWeight: 700,
                mb: 1,
              }}
            >
              {submittedText ? "Your Entered Niche" : ""}
            </Typography> */}
            <Box sx={{ textAlign: "center" }}>
              <Typography
                variant="body"
                sx={{
                  color: submittedText ? "black" : "grey",
                  fontSize: "12px",
                }}
              >
                {submittedText ? submittedText : "+ Add Your Custom Niche"}
              </Typography>
            </Box>
          </Box>
        </Box>
        <TextField
          id="outlined-multiline-static"
          multiline
          rows={1}
          placeholder="Enter your custom niche"
          value={text} // Controlled component
          onChange={handleChange}
          onKeyPress={handleKeyPress}
          variant="outlined"
          sx={{
            // Remove default borders
            "& .MuiOutlinedInput-root": {
              "& fieldset": {
                borderColor: "transparent", // This removes the border
              },
              "&:hover fieldset": {
                borderColor: "transparent", // This ensures border remains hidden on hover
              },
              "&.Mui-focused fieldset": {
                borderColor: "transparent", // This ensures border remains hidden on focus
              },
            },
            "&:hover": {
              borderColor: "transparent",
            },
            "& .Mui-focused": {
              borderColor: "transparent",
            },
            "& .MuiInputBase-input": {
              color: "grey",
              fontWeight: 300,
              fontSize: "12px",
            },
          }}
        />

        <Box sx={{ display: "block", textAlign: "right" }}>
          <Button onClick={handleSubmit} sx={{ color: "#ff4d70" }}>
            Enter
          </Button>
        </Box>
      </Box>
    </>
  );
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
            style={{
              textTransform: "capitalize",
              fontSize: "10px",
              color: "black",
            }}
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
          RPM:- ${country.cpm}
        </Typography>
      </Box>
    </Button>
  );
}

export default PickNiche;
