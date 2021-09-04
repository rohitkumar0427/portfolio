import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import Box from "@material-ui/core/Box";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import { useTheme } from "@material-ui/core/styles";
import { Link, animateScroll as scroll } from "react-scroll";
import homeIcon from "./homeIcon.png";
import Divider from "@material-ui/core/Divider";
import Drawer from "@material-ui/core/Drawer";
import { List, ListItem, ListItemText } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    position: "relative",
    alignContent: "baseline",
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  menuItems: {
    position: "absolute",
  },
  menu: {
    display: "flex",
    height: "100%",
    marginLeft: "2rem",
  },
  button: {
    margin: "1rem",
  },
  title: {
    flexGrow: "1",
  },
  appBar: {
    backgroundColor: "#191919",
  },
  appBarOpac: {
    color: "transparent",
  },
  icon: {
    margin: "10px 1rem 0",
  },
  divider:{
    backgroundColor: "#fff",
  }
}));

export default function Navbar() {
  const classes = useStyles();
  const theme = useTheme();
  const [anchor, setAnchor] = React.useState(false);
  const [top, setTop] = useState(false);

  const handleClose = () => {
    setAnchor(false);
  };

  const isMobile = useMediaQuery(theme.breakpoints.down("xs"));

  const menuItems = [
    {
      title: "Home",
      id: "home",
      pageURL: "./",
    },
    {
      title: "About",
      id: "about",
      pageURL: "./about",
    },
    {
      title: "Projects",
      id: "projects",
      pageURL: "./projects",
    },
    {
      title: "Contact",
      id: "contact",
      pageURL: "./contact",
    },
  ];

  window.addEventListener("scroll", (event) => {
    let scroll = window.scrollY;
    if (scroll > 0) setTop(true);
    else setTop(false);
  });

  function scrollToTop() {
    scroll.scrollToTop();
  }

  return (
    <div className={classes.root}>
      <AppBar
        position="fixed"
        color="transparent"
        className={top && classes.appBar}
      >
        <Toolbar>
          <Typography
            variant="h6"
            className={classes.title}
            onClick={() => scrollToTop()}
          >
            <img
              src={homeIcon}
              alt="homeIcon"
              height="50px"
              width="50px"
              className={classes.icon}
            />
          </Typography>
          {isMobile ? (
            <div>
              <IconButton
                edge="start"
                className={classes.menuButton}
                color="inherit"
                aria-label="menu"
                onClick={() => setAnchor(true)}
              >
                <MenuIcon />
              </IconButton>
              <Drawer
                open={anchor}
                anchor="right"
                onClose={() => setAnchor(false)}
              >
                <List style={{ width: "12rem" }}>
                  {menuItems.map(({ title, id, pageURL }) => (
                    <>
                      <Link
                        activeClass="active"
                        to={id}
                        spy={true}
                        smooth={true}
                        scroll="easeInOutQuint"
                        offset={-70}
                        duration={500}
                      >
                        <ListItem
                          button
                          key={title}
                          onClick={() => handleClose(pageURL)}
                        >
                          <ListItemText primary={title} />
                        </ListItem>
                        <Divider className={classes.divider}/>
                      </Link>
                    </>
                  ))}
                </List>
              </Drawer>
            </div>
          ) : (
            <Box className={classes.menu}>
              {menuItems.map(({ title, id }) => {
                return (
                  <Link
                    activeClass="active"
                    to={id}
                    spy={true}
                    smooth={true}
                    scroll="easeInOutQuint"
                    offset={-70}
                    duration={500}
                  >
                    <Box className={classes.button}>{title}</Box>
                  </Link>
                );
              })}
            </Box>
          )}
        </Toolbar>
      </AppBar>
    </div>
  );
}
