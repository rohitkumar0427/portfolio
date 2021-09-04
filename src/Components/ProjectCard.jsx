import {
  Grid,
  Paper,
  Box,
  Typography,
  Button,
  ButtonGroup,
  Modal,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import { useState } from "react";
import express from "../Pages/images/expressjs.png";
import mongoDB from "../Pages/images/mongoDB.png";
import js from "../Pages/images/js.png";

const useStyles = makeStyles({
  root: {
    height: "90%",
    display: "flex",
    padding: "1rem",
    flexDirection: "column",
    marginBottom: "2rem",
    "&:hover": {
      backgroundPosition: "100% 0",
      transition: "backgroundColor 1s ease-in-out",
      backgroundImage:
        "linear-gradient(to bottom, #F9004D, #e7014a, #c70341, #790127)",
      boxShadow: "0 5px 15px rgba(242, 97, 103, .4)",
    },
  },
  des: {
    flexGrow: 1,
    color: "#8B8E97",
    fontWeight: "400",
  },
  title: {
    fontWeight: "900",
    fontFamily: "Montserrat, sans-serif",
    color: "#fff",
  },
  name: {
    color: "#fff",
    fontWeight: "500",
  },
  button: {
    display: "flex",
    justifyContent: "center",
    width: "100%",
    marginTop: "2rem",
  },
  buttonItem: {
    flexGrow: "1",
    backgroundColor: "#F9004D",
    "&:hover": {
      color: "#fff",
    },
  },
  paper: {
    position: "absolute",
    width: "60%",
    height: "60%",
    textAlign: "center",
    // backgroundColor: theme.palette.background.paper,
    border: "2px solid #000",
    // boxShadow: theme.shadows[5],
    padding: "0",
  },
  modalContainer: {
    position: "relative",
  },
  modalButton: {
    // position: "absolute",
    top: 1,
    zIndex: 1,
  },
});

const techStack = [
  {
    name: "React",
    tech: "frontend",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/512px-React-icon.svg.png",
  },
  {
    name: "HTML",
    tech: "frontend",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/6/61/HTML5_logo_and_wordmark.svg",
  },
  {
    name: "CSS",
    tech: "frontend",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/CSS3_logo_and_wordmark.svg/800px-CSS3_logo_and_wordmark.svg.png",
  },
  {
    name: "Redux",
    tech: "frontend",
    image: "https://redux.js.org/img/redux.svg",
  },
  {
    name: "Material UI",
    tech: "frontend",
    image: "https://material-ui.com/static/logo_raw.svg",
  },
  {
    name: "Node.js",
    tech: "backend",
    image: "https://nodejs.org/static/images/logo.svg",
  },
  {
    name: "Express.js",
    tech: "backend",
    image: `${express}`,
  },
  {
    name: "MongoDB",
    tech: "backend",
    image: `${mongoDB}`,
  },
  {
    name: "JavaScript",
    tech: "language",
    image: `${js}`,
  },
];

function getModalStyle() {
  const top = 50;
  const left = 50;

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`,
  };
}

function TechIcon({ item }) {
  const classes = useStyles();
  const { name, image } = item;
  return (
    <Grid item md={2.5} justifyContent="center">
      <img
        src={`${image}`}
        alt={`${name} icon`}
        className={classes.picIcons}
        height="50px"
        align="center"
      />
      <Typography align="center" style={{ width: "maxContent" }}>
        {name}
      </Typography>
    </Grid>
  );
}

export function ProjectCard({ item }) {
  const classes = useStyles();
  const [modalStyle] = useState(getModalStyle);
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const { title, description1, tech, site, image, github, video } = item;

  return (
    <Grid item md={4} sm={6} xs={12}>
      <Paper className={classes.root}>
        <Box classeName={classes.modalContainer}>
          <img src={image} alt="logo" srcset="" width="100%" height="200px" />
          <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="simple-modal-title"
            aria-describedby="simple-modal-description"
          >
            <Paper style={modalStyle} className={classes.paper}>
              <iframe
                width="100%"
                height="100%"
                src={`${video}`}
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen
              ></iframe>
            </Paper>
          </Modal>
        </Box>
        <Box className={classes.des}>
          <Typography variant="h5" className={classes.name}>
            {title}
          </Typography>
          <Typography className={classes.des} align="justify">
            {description1}
          </Typography>
        </Box>
        <Typography variant="h5" className={classes.name}>
          Tech Stack
        </Typography>
        <Grid container spacing={6} justifyContent="center">
          {techStack
            .filter((item) => tech.includes(item.name))
            .map((item) => (
              <TechIcon item={item} />
            ))}
        </Grid>
        <ButtonGroup className={classes.button}>
          <Button
            className={classes.buttonItem}
            onClick={() => window.open(`${site}`)}
          >
            Visit
          </Button>
          <Button onClick={handleOpen} className={classes.buttonItem}>
            Demo
          </Button>
          <Button
            className={classes.buttonItem}
            onClick={() => window.open(`${github}`)}
          >
            Code
          </Button>
        </ButtonGroup>
      </Paper>
    </Grid>
  );
}
