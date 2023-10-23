import * as React from "react";
import { useNavigate } from "react-router-dom";
import { styled } from "@mui/material/styles";

import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Collapse from "@mui/material/Collapse";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import { red } from "@mui/material/colors";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShareIcon from "@mui/icons-material/Share";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { Box } from "@mui/material";
import Dialog from "@mui/material/Dialog";

import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";

// ContentAPI
import { useContext } from "react";
import DataContext from "../../../context/DataContext";
// End Context API

const socialMediaIcons = {
  facebook: "/icons/facebook.png",
  reels: "/icons/instagram.png",
  tiktok: "/icons/tiktok.png",
  youtube: "/icons/youtube.png",
  linkedin: "/icons/linkedin.png",
  shorts: "/icons/youtube-shorts.png",
};
const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? "rotate(0deg)" : "rotate(180deg)",
  marginLeft: "auto",
  transition: theme.transitions.create("transform", {
    duration: theme.transitions.duration.shortest,
  }),
}));

export default function VideoCards({
  videoTitle,
  prompt,
  thumbnailUrl,
  videoUrl,
  setOpen
}) {
  const navigate = useNavigate();
  const dataContext = useContext(DataContext);
  const [expanded, setExpanded] = React.useState(false);
  const [VideoDialogopen, VideoDialogsetOpen] = React.useState(false);

  const handleOpenStripe = () => {
    window.open("https://buy.stripe.com/4gwcPb04Fa7135u00i", "_blank");
  };
  const handleExpandClick = () => {
    setExpanded(!expanded);
  };
  const VideoDialoghandleOpen = () => {
    VideoDialogsetOpen(true);
  };

  const VideoDialoghandleClose = () => {
    VideoDialogsetOpen(false);
  };
  console.log(dataContext.thumbnail, dataContext.video);

  return (
    <Card
      sx={{
        maxWidth: 325,
        marginRight: "25px",
        marginBottom: "20px",
        borderRadius: "10px",
      }}
    >
      <CardHeader />
      <CardMedia
        component="img"
        height="300"
        // image={
        //   thumbnailUrl && thumbnailUrl.trim() !== ""
        //     ? thumbnailUrl
        //     : "/cat.jpeg"
        // }
        // image={dataContext.thumbnail.url}
        image={
          dataContext.thumbnail && dataContext.thumbnail.url
            ? dataContext.thumbnail.url
            : "/assets/icons/error_icon.jpg"
        }
        // alt="Paella dish"
        sx={{
          p: 2,
          borderRadius: "25px",
        }}
        onClick={VideoDialoghandleOpen} // <-- Add this line
      />
      {/* <Dialog
        open={VideoDialogopen}
        onClose={VideoDialoghandleClose}
        maxWidth="md" // Adjust based on your video size preference
        fullWidth={true}
      >
        <video controls width="100%">
          <source src={dataContext.video.video_url} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </Dialog> */}
      <Dialog
        open={VideoDialogopen}
        onClose={VideoDialoghandleClose}
        maxWidth="md" // Adjust based on your video size preference
        fullWidth={true}
      >
        <video controls style={{ height: "90vh", width: "auto" }}>
          <source
            // src={dataContext.video.video_path}
            src={
              dataContext.video && dataContext.video.video_path
                ? dataContext.video.video_path
                : ""
            }
            type="video/mp4"
          />
          Your browser does not support the video tag.
        </video>
      </Dialog>

      <CardContent>
        <Stack direction="column" spacing={1} sx={{ pb: 3 }}>
          <Typography
            variant="h6"
            // noWrap
            component="div"
            sx={{
              fontStyle: "Lato",
              fontSize: "16px",
              fontWeight: "700", // Adjust this value for desired thickness
            }}
          >
            {/* Kitty Reel */}
            {/* {dataContext.video.social_media_post.headline} */}

            {dataContext.video && dataContext.video.social_media_post.headline
              ? dataContext.video.social_media_post.headline
              : "Error! Please try again!"}
          </Typography>
          <Box>
            <Typography
              variant="h6"
              // noWrap
              component="div"
              sx={{
                // display: "inline",
                color: "grey",
                fontStyle: "Ralway",
                fontSize: "16px",
                fontWeight: "400", // Adjust this value for desired thickness
              }}
            >
              {/* Kitty Reel */}
              Hashtags
            </Typography>
            <div style={{ display: "flex", flexWrap: "wrap" }}>
              {/* {dataContext.video.social_media_post.hashtags.map(
                (hashtag, index) => (
                  <Typography
                    variant="span"
                    key={index}
                    style={{
                      color: "#7B68EE",
                      marginRight: "10px",
                      fontSize: "12px",
                    }}
                  >
                    #{hashtag}
                  </Typography>
                )
              )} */}
              {dataContext.video &&
                dataContext.video.social_media_post.hashtags.length > 0 &&
                dataContext.video.social_media_post.hashtags.map(
                  (hashtag, index) => (
                    <Typography
                      variant="span"
                      key={index}
                      style={{
                        color: "#7B68EE",
                        marginRight: "10px",
                        fontSize: "12px",
                      }}
                    >
                      {hashtag}
                    </Typography>
                  )
                )}
            </div>
          </Box>

          <Box>
            <Typography
              variant="h6"
              noWrap
              component="div"
              sx={{
                display: "inline",
                color: "grey",
                fontStyle: "Ralway",
                fontSize: "16px",
                fontWeight: "400", // Adjust this value for desired thickness
              }}
            >
              Social Media :
            </Typography>
            {/* <IconButton sx={{ mx: "3px", p: 0 }}>
              <Avatar
                alt="Remy Sharp"
                src="/static/icons/facebook.png"
                sx={{ width: 20, height: 20 }} // Adjust the width and height values for desired size
              />
            </IconButton>
            <IconButton sx={{ mx: "3px", p: 0 }}>
              <Avatar
                alt="Remy Sharp"
                src="/static/icons/instagram.png"
                sx={{ width: 20, height: 20 }} // Adjust the width and height values for desired size
              />
            </IconButton>
            <IconButton sx={{ mx: "3px", p: 0 }}>
              <Avatar
                alt="Remy Sharp"
                src="/static/icons/tiktok.png"
                sx={{ width: 20, height: 20 }} // Adjust the width and height values for desired size
              />
            </IconButton>
            <IconButton sx={{ mx: "3px", p: 0 }}>
              <Avatar
                alt="Remy Sharp"
                src="/static/icons/youtube.png"
                sx={{ width: 20, height: 20 }} // Adjust the width and height values for desired size
              />
            </IconButton> */}
            {Object.entries(socialMediaIcons).map(([platform, iconPath]) => (
              <IconButton
                sx={{ mx: "3px", p: 0 }}
                // onClick={handleOpenStripe}
                key={platform}
                onClick={() => setOpen(true)}
              >
                <Avatar
                  alt={platform}
                  src={iconPath}
                  sx={{ width: 20, height: 20 }}
                />
              </IconButton>
            ))}
          </Box>
          <Typography
            variant="h6"
            noWrap
            component="div"
            onClick={() => {
              handleOpenStripe();
            }}
            sx={{
              my: 1,
              display: "inline",
              color: "grey",
              fontStyle: "Ralway",
              fontSize: "16px",
              fontWeight: "400", // Adjust this value for desired thickness
            }}
          >
            {/* Prompt : Create a insta reel of a kitty cat */}
            Prompt: {prompt}
          </Typography>
        </Stack>
        <Stack direction="row" spacing={2} sx={{ my: 1 }}>
          <Button
            variant="outlined"
            sx={{
              mx: 1,
              color: "#7B68EE",
              borderColor: "#7B68EE",
              fontStyle: "Raleway",
              fontSize: "12px",
              padding: "5px 64px", // Example padding values: 12px vertical and 24px horizontal
              borderRadius: "8px", // Fully rounded edges
              "&:hover": {
                borderColor: "#7B68EE",
              },
            }}
            onClick={() => setOpen(true)}
          >
            Edit
          </Button>
          <Button
            onClick={() => setOpen(true)}
            variant="contained"
            sx={{
              mx: 1,
              bgcolor: "#7B68EE",
              fontStyle: "Raleway",
              fontSize: "12px",
              padding: "5px 64px", // Example padding values: 12px vertical and 24px horizontal
              borderRadius: "8px", // Fully rounded edges
              "&:hover": {
                bgcolor: "#7B68EE",
              },
            }}
          >
            Post
          </Button>
        </Stack>
        <Stack direction="row" spacing={2} sx={{ my: 1 }}>
         <div  onClick={() => setOpen(true)} className="badge-dash" style={{display: 'flex'}}>
             <img src="/translate.svg"/> 
             <p>Translate</p>
         </div>
         <div  onClick={() => setOpen(true)} className="badge-dash" style={{display: 'flex'}}>
             <img src="/stars.svg"/> 
             <p>Add Subtitles</p>
         </div>
        </Stack>
        <Stack direction="row" spacing={2} sx={{ my: 1 }}>
         <div  onClick={() => setOpen(true)} className="badge-dash" style={{display: 'flex'}}>
             <img src="/ml.svg"/> 
             <p>Longer</p>
         </div>
         <div  onClick={() => setOpen(true)} className="badge-dash" style={{display: 'flex'}}>
             <img src="/ms.svg"/> 
             <p>Shorter</p>
         </div>
        </Stack>
        <Stack>
          <input
          className="dash-in"
          type="text"
          placeholder="Add uplifting song to it..."
          />
          <img  onClick={() => setOpen(true)} style={{
            position: 'absolute',
            top: '42rem', 
            left: '17.5rem'
          }} src="send.svg" />
        </Stack>
      </CardContent>
    </Card>
  );
}
