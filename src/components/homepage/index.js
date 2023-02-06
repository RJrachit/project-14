import { PASSWORD } from "../../constant";
import { Navigate } from "react-router-dom";
import * as React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import Button from "@mui/material/Button";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import DehazeIcon from "@mui/icons-material/Dehaze";
import { grey, deepOrange, blue, yellow, red } from "@mui/material/colors";
import HomeIcon from "@mui/icons-material/Home";
import FavoriteIcon from "@mui/icons-material/Favorite";
import EmojiEmotionsIcon from "@mui/icons-material/EmojiEmotions";
import EmailIcon from "@mui/icons-material/Email";
import "./homepage.scss";
import Home from "../home";
import DearValentine from "../dearValentine";
import Memories from "../memories";
import Letter from "../letter";
import { Container } from "@mui/material";

function Homepage(props) {

  

  const [component, setComponent] = React.useState("Home");
  const [state, setState] = React.useState({
    left: false,
  });

  

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <Box
      sx={{ width: anchor === "top" || anchor === "bottom" ? "auto" : 250 }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
        {["Home", "Dear Valentine"].map((text, index) => (
          <ListItem
            key={text}
            onClick={() => {
              setComponent(text);
            }}
            disablePadding
          >
            <ListItemButton>
              <ListItemIcon>
                {index === 0 && <HomeIcon sx={{color: grey[900]}}/>}
                {index === 1 && <FavoriteIcon sx={ {color: red[500]} }/>}
                {index === 2 && <EmojiEmotionsIcon sx={ {color: yellow[600]} }/>}
                {index === 3 && <EmailIcon sx={ {color: blue[500]} }/>}
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      <Divider />
      <List>
        {["Memories","Letter"].map((text, index) => (
          <ListItem key={text} disablePadding>
            <ListItemButton disabled>
              <ListItemIcon>
                {index === 0 && <EmojiEmotionsIcon sx={ {color: yellow[600]} }/>}
                {index === 1 && <EmailIcon sx={ {color: blue[500]} }/>}
              </ ListItemIcon>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );
  return (
    <>
      {props.password !== PASSWORD ? (
        <>
          <Navigate to="/project-14" />
        </>
      ) : (
        <>
          <div className="banner"></div>
          <Container maxWidth="xl">
            <div className="homepage">
              <div>
                {["left"].map((anchor) => (
                  <React.Fragment key={anchor}>
                    <Button
                      sx={{ position: "fixed" }}
                      onClick={toggleDrawer(anchor, true)}
                    >
                      <DehazeIcon sx={{ color: grey[200] }} fontSize="large" />
                    </Button>
                    <Drawer
                      anchor={anchor}
                      open={state[anchor]}
                      onClose={toggleDrawer(anchor, false)}
                    >
                      {list(anchor)}
                    </Drawer>
                  </React.Fragment>
                ))}
              </div>

              <div className="padding-top-40">
                {component === "Home" && <Home />}
                {component === "Dear Valentine" && <DearValentine />}
                {component === "Memories" && <Memories data={props.data.memories}/>}
                {component === "Letter" && <Letter />}
              </div>

            </div>
          </Container>

          <div className="footer">
            <span>{ "< Made with " }</span> 
            <FavoriteIcon sx={ {color : deepOrange[500]} }/> 
            <span>{ " >" }</span>
          </div>
        </>
      )}
    </>
  );
}

export default Homepage;
