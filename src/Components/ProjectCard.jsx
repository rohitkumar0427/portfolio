import {
  Grid,
  Paper,
  Box,
  Typography,
  Button,
  ButtonGroup,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import express from "../Pages/expressjs.png";
import mongoDB from "../Pages/mongoDB.png";
import js from "../Pages/js.png";

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
      //   backgroundColor: "#F9004D",
      color: "#fff",
    },
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

  const { title, description1, tech, site, image, github } = item;

  return (
    <Grid item md={4} sm={6} xs={12}>
      <Paper className={classes.root}>
        <Box>
          <img src={image} alt="logo" srcset="" width="100%" height="200px" />
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
            Demo
          </Button>
          <Button
            className={classes.buttonItem}
            onClick={() => window.open(`${github}`)}
          >
            Github
          </Button>
        </ButtonGroup>
      </Paper>
    </Grid>
  );
}
