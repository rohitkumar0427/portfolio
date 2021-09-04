import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import Menu from "@material-ui/core/Menu";
import Box from "@material-ui/core/Box";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import { useTheme } from "@material-ui/core/styles";
import { Link, animateScroll as scroll } from "react-scroll";
import homeIcon from "./homeIcon.png";

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
    // opacity: "0.1"
  },
  icon: {
    margin: "10px 1rem 0",
  },
}));

export default function Navbar() {
  const classes = useStyles();
  const theme = useTheme();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const [top, setTop] = useState(false);

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
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
                onClick={handleMenu}
              >
                <MenuIcon />
              </IconButton>
              <Menu
                id="menu-appbar"
                className={classes.menuItems}
                anchorEl={anchorEl}
                anchorOrigin={{
                  vertical: "bottom",
                  horizontal: "right",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "bottom",
                  horizontal: "left",
                }}
                open={open}
                onClose={handleClose}
              >
                {menuItems.map(({ title, id, pageURL }) => (
                  <Link
                    activeClass="active"
                    to={id}
                    spy={true}
                    smooth={true}
                    scroll="easeInOutQuint"
                    offset={-70}
                    duration={500}
                  >
                    <MenuItem onClick={() => handleClose(pageURL)}>
                      {title}
                    </MenuItem>
                  </Link>
                ))}
              </Menu>
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
