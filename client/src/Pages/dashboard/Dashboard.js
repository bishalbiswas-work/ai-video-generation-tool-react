import * as React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import CssBaseline from "@mui/material/CssBaseline";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import MailIcon from "@mui/icons-material/Mail";
import Button from "@mui/material/Button";

// Icons
import HomeIcon from "@mui/icons-material/Home";
import AssessmentIcon from "@mui/icons-material/Assessment";
import PaidIcon from "@mui/icons-material/Paid";
import PeopleIcon from "@mui/icons-material/People";
import PeopleAltIcon from "@mui/icons-material/PeopleAlt";
import DescriptionIcon from "@mui/icons-material/Description";
import SettingsIcon from "@mui/icons-material/Settings";
import AddIcon from "@mui/icons-material/Add";
import ContentCopyIcon from "@mui/icons-material/ContentCopy";

// Component
import Appbar from "./Components/Appbar";
import VideoSection from "./Components/VideoSection";
const drawerWidth = 240;

const menuItems = [
  { name: "Dashboard", icon: <HomeIcon /> },
  { name: "Product Suggestion", icon: <AssessmentIcon /> },
  { name: "Revenue", icon: <PaidIcon /> },
  { name: "Customers", icon: <PeopleIcon /> },
  { name: "Team Members", icon: <PeopleAltIcon /> },
  { name: "Invoices", icon: <DescriptionIcon /> },
];

export default function Dashboard() {
  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <Appbar drawerWidth={drawerWidth} />
      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          "& .MuiDrawer-paper": {
            width: drawerWidth,
            boxSizing: "border-box",
          },
        }}
        variant="permanent"
        anchor="left"
      >
        <Box sx={{ m: 2, p: 1, mt: 1 }}>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{
              fontSize: "24px",
              fontWeight: "900",
              color: "#7B68EE",
              fontStyle: "Lato",
            }}
          >
            Clipfy Club
          </Typography>
        </Box>
        {/* <Toolbar /> */}

        <Box sx={{ height: "50px" }} />

        <List>
          {menuItems.map((item, index) => (
            <ListItem key={item.name} disablePadding>
              <ListItemButton
                sx={{
                  ...(index === 0 && {
                    // bgcolor: "#afa3f5",
                    background: "linear-gradient(90deg, #c3baf7, transparent)",
                  }),
                }}
              >
                <Box sx={{ mx: 2, color: "grey" }}>
                  {item.icon} {/* This will render the corresponding icon */}
                </Box>
                <ListItemText
                  primary={item.name}
                  sx={{
                    ".MuiListItemText-primary": {
                      fontStyle: "Raleway",
                      fontSize: "12px",
                      color: "black",

                      fontWeight: "300",
                    },
                  }}
                />
              </ListItemButton>
            </ListItem>
          ))}
          <ListItem key="Setting" disablePadding>
            <ListItemButton>
              <Box sx={{ mx: 2, color: "grey" }}>
                <SettingsIcon />
              </Box>
              <ListItemText
                primary="Settings"
                sx={{
                  ".MuiListItemText-primary": {
                    fontStyle: "Raleway",
                    fontSize: "12px",
                    color: "black",
                    fontWeight: "300",
                  },
                }}
              />
            </ListItemButton>
          </ListItem>
        </List>
        {/* <Divider /> */}
      </Drawer>
      <Box component="main" sx={{ flexGrow: 1, bgcolor: "#f2f2f2", p: 3 }}>
        <Toolbar />
        <Box
          sx={{
            display: "flex", // Make sure this is a flex container
            alignItems: "center", // To vertically align the items
            width: "100%",
            height: "70px",
            backgroundColor: "transparent",
          }}
        >
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ display: "inline" }}
          >
            Recent Videos
          </Typography>
          <Box sx={{ flexGrow: 1 }} />
          {/* This box will grow and take up available space */}
          <Button
            variant="outlined"
            disableElevation
            startIcon={<AddIcon />}
            sx={{
              mx: 1,
              color: "#7B68EE",
              borderColor: "#7B68EE",
              fontStyle: "Raleway",
              fontSize: "10px",
              padding: "8px 24px", // Example padding values: 12px vertical and 24px horizontal
              borderRadius: "8px", // Fully rounded edges
            }}
          >
            Create new video
          </Button>
          <Button
            variant="contained"
            disableElevation
            startIcon={<ContentCopyIcon />}
            sx={{
              mx: 1,
              bgcolor: "#7B68EE",
              fontStyle: "Raleway",
              fontSize: "10px",
              padding: "8px 24px", // Example padding values: 12px vertical and 24px horizontal
              borderRadius: "8px", // Fully rounded edges
              "&:hover": {
                bgcolor: "#7B68EE",
              },
            }}
          >
            Copy the code snippet
          </Button>
        </Box>

        <VideoSection />
      </Box>
    </Box>
  );
}
